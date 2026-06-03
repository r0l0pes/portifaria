import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../../App";
import { AppProvider } from "../../src/context/AppContext";

// Mock the analytics module
vi.mock("../../src/components/Analytics", () => ({
  Analytics: () => null,
  logEvent: vi.fn(),
}));

// Mock framer-motion for App-level rendering
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => (
      <button {...props}>{children}</button>
    ),
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
  },
  useScroll: () => ({ scrollY: { get: () => 0, getPrevious: () => 0 } }),
  useMotionValueEvent: vi.fn(),
  useTransform: () => vi.fn(),
  AnimatePresence: ({ children }: any) => <>{children}</>,
  useInView: () => true,
}));

// Mock child components
vi.mock("../../src/components/ui/ScrollProgress", () => ({
  ScrollProgress: () => null,
}));

vi.mock("../../src/components/ui/ErrorBoundary", () => ({
  ErrorBoundary: ({ children }: any) => <>{children}</>,
}));

vi.mock("../../src/components/ui/LiquidShader", () => ({
  LiquidShader: () => null,
}));

vi.mock("../../src/components/ui/ShinyButton", () => ({
  ShinyButton: ({ children, ...props }: any) => (
    <button {...props}>{children}</button>
  ),
}));

vi.mock("../../src/components/ui/LogoMarquee", () => ({
  LogoMarquee: () => null,
}));

vi.mock("../../src/components/ui/BlurFade", () => ({
  BlurFade: ({ children }: any) => <>{children}</>,
}));

vi.mock("../../src/components/ui/AnimatedGridPattern", () => ({
  AnimatedGridPattern: () => null,
}));

// Mock lazy-loaded sections to render nothing synchronously
vi.mock("../../src/components/sections/Writings", () => ({
  BlogContent: () => null,
}));

vi.mock("../../src/components/sections/Work", () => ({
  WorkSection: () => null,
  CaseStudyModal: () => null,
}));

describe("Writings section absence in App", () => {
  const renderApp = () =>
    render(
      <AppProvider>
        <App />
      </AppProvider>,
    );

  it("does not render a writing section heading", async () => {
    renderApp();

    // Wait for Suspense to resolve lazy imports
    await waitFor(() => {
      const headings = screen.queryAllByText("Writing");
      const writingH2 = headings.find(
        (el) => el.tagName === "H2" && el.textContent === "Writing",
      );
      expect(writingH2).toBeUndefined();
    });
  });

  it("does not render blog post entries", async () => {
    renderApp();

    await waitFor(() => {
      expect(
        screen.queryByText("Claude Code", { exact: false }),
      ).not.toBeInTheDocument();
    });
  });
});
