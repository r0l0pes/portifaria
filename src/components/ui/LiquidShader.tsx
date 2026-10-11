import { useRef, useEffect } from "react";

const vertexSrc = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const fragmentSrc = `
precision highp float;

uniform vec2  u_resolution;
uniform float u_time;
uniform vec2  u_mouse;
uniform float u_speed;
uniform float u_warpStrength;
uniform float u_mouseIntensity;
uniform float u_brightness;
uniform float u_gamma;

// ── Hash-based noise (fast, no texture lookups) ─────────────────────────────
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// ── fBm — 4 octaves, value noise ────────────────────────────────────────────
float fbm(vec2 p) {
  float val = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i++) {
    val += amp * noise(p);
    p *= 2.0;
    amp *= 0.5;
  }
  return val;
}

// ── Domain warping: Inigo Quilez style ───────────────────────────────────────
// f(p) = fbm( p + fbm( p + fbm(p) ) )
float domainWarp(vec2 p) {
  // First layer
  float q = fbm(p + vec2(0.0, 0.0));
  // Second layer — feed q back
  float r = fbm(p + u_warpStrength * vec2(q, q * 0.8));
  // Third layer — feed r back
  return fbm(p + u_warpStrength * vec2(r * 0.8, r));
}

// ── Chrome / mercury color ramp ─────────────────────────────────────────────
vec3 chromeRamp(float t) {
  float g = pow(clamp(t, 0.0, 1.0), u_gamma);

  vec3 nearBlack = vec3(0.01, 0.01, 0.04);
  vec3 cobalt    = vec3(0.0,  0.20, 0.55);
  vec3 steel     = vec3(0.35, 0.50, 0.68);
  vec3 silver    = vec3(0.68, 0.70, 0.76);
  vec3 white     = vec3(0.97, 0.97, 1.0);

  vec3 c = nearBlack;
  c = mix(c, cobalt, smoothstep(0.00, 0.30, g));
  c = mix(c, steel,  smoothstep(0.20, 0.50, g));
  c = mix(c, silver, smoothstep(0.45, 0.70, g));
  c = mix(c, white,  smoothstep(0.75, 1.00, g));
  return c;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 st = (uv - 0.5) * vec2(aspect, 1.0);

  float t = u_time * u_speed;

  // Mouse warp — distort UV toward cursor
  vec2 mouse = (u_mouse / u_resolution - 0.5) * vec2(aspect, 1.0);
  float d = length(st - mouse);
  vec2 warped = st + (st - mouse) * exp(-d * 3.5) * u_mouseIntensity * 0.12;

  // Domain-warped pattern
  float n = domainWarp(warped * 2.8 + t * 0.3);

  // Chromatic aberration
  float ca = 0.004;
  float nR = domainWarp((warped + vec2(ca, 0.0)) * 2.8 + t * 0.3);
  float nB = domainWarp((warped - vec2(ca * 0.6, ca * 0.4)) * 2.8 + t * 0.3);

  // Map to color
  vec3 color;
  color.r = chromeRamp(nR).r;
  color.g = chromeRamp(n).g;
  color.b = chromeRamp(nB).b;

  color *= u_brightness;

  gl_FragColor = vec4(color, 1.0);
}`;

interface LiquidShaderProps {
	speed?: number;
	warpStrength?: number;
	mouseIntensity?: number;
	brightness?: number;
	gamma?: number;
	className?: string;
}

export function LiquidShader({
	speed = 0.12,
	warpStrength = 0.9,
	mouseIntensity = 0.5,
	brightness = 0.7,
	gamma = 2.0,
	className = "",
}: LiquidShaderProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const glRef = useRef<WebGLRenderingContext | null>(null);
	const animRef = useRef<number>(0);
	const mouseRef = useRef({ x: 0, y: 0 });

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const dpr = Math.min(window.devicePixelRatio || 1, 2);

		const resize = () => {
			const w = canvas.clientWidth;
			const h = canvas.clientHeight;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
		};
		resize();

		// ── Init GL ──────────────────────────────────────────────────────
		const gl = canvas.getContext("webgl", {
			alpha: false,
			antialias: false,
			preserveDrawingBuffer: false,
		});
		if (!gl) return;
		glRef.current = gl;

		// Compile shaders
		const compile = (type: number, src: string) => {
			const s = gl.createShader(type)!;
			gl.shaderSource(s, src);
			gl.compileShader(s);
			if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
				console.error("Shader error:", gl.getShaderInfoLog(s));
			}
			return s;
		};

		const vs = compile(gl.VERTEX_SHADER, vertexSrc);
		const fs = compile(gl.FRAGMENT_SHADER, fragmentSrc);

		const prog = gl.createProgram()!;
		gl.attachShader(prog, vs);
		gl.attachShader(prog, fs);
		gl.linkProgram(prog);
		if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
			console.error("Link error:", gl.getProgramInfoLog(prog));
			return;
		}
		gl.useProgram(prog);

		// Fullscreen quad
		const buf = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buf);
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
			gl.STATIC_DRAW,
		);
		const aPos = gl.getAttribLocation(prog, "a_position");
		gl.enableVertexAttribArray(aPos);
		gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

		// Uniforms
		const u: Record<string, WebGLUniformLocation | null> = {};
		for (const name of [
			"u_resolution",
			"u_time",
			"u_mouse",
			"u_speed",
			"u_warpStrength",
			"u_mouseIntensity",
			"u_brightness",
			"u_gamma",
		]) {
			u[name] = gl.getUniformLocation(prog, name);
		}

		// Mouse
		const onMove = (e: PointerEvent) => {
			const rect = canvas.getBoundingClientRect();
			mouseRef.current = {
				x: (e.clientX - rect.left) * dpr,
				y: (rect.height - (e.clientY - rect.top)) * dpr,
			};
		};
		canvas.addEventListener("pointermove", onMove);

		// ── Render loop ──────────────────────────────────────────────────
		const start = performance.now();

		const render = () => {
			gl.viewport(0, 0, canvas.width, canvas.height);
			const elapsed = (performance.now() - start) / 1000;

			gl.uniform2f(u.u_resolution, canvas.width, canvas.height);
			gl.uniform1f(u.u_time, elapsed);
			gl.uniform2f(u.u_mouse, mouseRef.current.x, mouseRef.current.y);
			gl.uniform1f(u.u_speed, speed);
			gl.uniform1f(u.u_warpStrength, warpStrength);
			gl.uniform1f(u.u_mouseIntensity, mouseIntensity);
			gl.uniform1f(u.u_brightness, brightness);
			gl.uniform1f(u.u_gamma, gamma);

			gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
			animRef.current = requestAnimationFrame(render);
		};

		animRef.current = requestAnimationFrame(render);

		// ── Resize ───────────────────────────────────────────────────────
		const observer = new ResizeObserver(() => {
			resize();
		});
		observer.observe(canvas.parentElement || canvas);

		return () => {
			observer.disconnect();
			canvas.removeEventListener("pointermove", onMove);
			cancelAnimationFrame(animRef.current);
			const ext = gl.getExtension("WEBGL_lose_context");
			ext?.loseContext();
		};
	}, [speed, warpStrength, mouseIntensity, brightness, gamma]);

	return (
		<canvas
			ref={canvasRef}
			className={`absolute inset-0 w-full h-full ${className}`}
			style={{ display: "block" }}
		/>
	);
}
