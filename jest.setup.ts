import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock IntersectionObserver for Framer Motion and other components
if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
  class IntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  }
  // @ts-expect-error Mock for testing
  window.IntersectionObserver = IntersectionObserver;
  // @ts-expect-error Mock for testing
  window.IntersectionObserverEntry = function () {};
}

// Mock ResizeObserver for components that use it
if (typeof window !== 'undefined' && !('ResizeObserver' in window)) {
  class ResizeObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  // @ts-expect-error Mock for testing
  window.ResizeObserver = ResizeObserver;
}

// Mock matchMedia for responsive components
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock scrollTo for components that use it
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn(),
});
