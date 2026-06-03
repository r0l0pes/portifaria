import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { AboutContent } from "../../src/components/sections/About";

// Mock analytics
vi.mock("../../src/components/Analytics", () => ({
  logEvent: vi.fn(),
}));

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => (
      <button {...props}>{children}</button>
    ),
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
  useInView: () => true,
}));

describe("AboutContent", () => {
  it("renders the 'What I do' section", () => {
    render(<AboutContent />);
    expect(screen.getByText("What I do")).toBeInTheDocument();
  });

  it("renders the 'Background' section", () => {
    render(<AboutContent />);
    expect(screen.getByText("Background")).toBeInTheDocument();
  });

  it("does not render a Download Resume button", () => {
    render(<AboutContent />);
    expect(screen.queryByText("Download Resume")).not.toBeInTheDocument();
  });

  it("does not render a link with aria-label 'Download Resume PDF'", () => {
    render(<AboutContent />);
    expect(
      screen.queryByLabelText("Download Resume PDF"),
    ).not.toBeInTheDocument();
  });
});
