import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "../../src/components/layout/Header";

// Mock AppContext
vi.mock("../../src/context/AppContext", () => ({
  useApp: () => ({
    navigate: vi.fn(),
    darkMode: false,
    toggleDarkMode: vi.fn(),
    activeSection: "hero",
  }),
}));

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => (
      <button {...props}>{children}</button>
    ),
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  useScroll: () => ({ scrollY: { get: () => 0, getPrevious: () => 0 } }),
  useMotionValueEvent: vi.fn(),
  AnimatePresence: ({ children }: any) => <>{children}</>,
  useInView: () => true,
}));

describe("Header", () => {
  const mockNavigate = vi.fn();

  it("renders the site name", () => {
    render(<Header onNavigate={mockNavigate} />);
    expect(screen.getByText("rodrigolopes")).toBeInTheDocument();
  });

  it("renders the 'About' nav link", () => {
    render(<Header onNavigate={mockNavigate} />);
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("renders the 'Work' nav link", () => {
    render(<Header onNavigate={mockNavigate} />);
    expect(screen.getByText("Work")).toBeInTheDocument();
  });

  it("does not render a 'Writing' nav link", () => {
    render(<Header onNavigate={mockNavigate} />);
    expect(screen.queryByText("Writing")).not.toBeInTheDocument();
  });

  it("renders the 'Get in Touch' CTA button", () => {
    render(<Header onNavigate={mockNavigate} />);
    expect(screen.getByText("Get in Touch")).toBeInTheDocument();
  });
});
