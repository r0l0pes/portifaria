import React, { Component } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * React error boundary that catches rendering errors in child components
 * and displays a fallback UI instead of crashing the page.
 * @param {ErrorBoundaryProps} props
 * @param {React.ReactNode} props.children - Components to protect
 * @param {React.ReactNode} [props.fallback] - Custom fallback UI on error
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="p-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40">
            Something went wrong loading this section.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
