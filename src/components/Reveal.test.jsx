import { act, render, screen } from "@testing-library/react";
import Reveal from "./Reveal.jsx";

// tester car composant reutilisable pour les animations d'apparition
describe("Reveal", () => {
  let observeMock;
  let unobserveMock;
  let disconnectMock;
  let intersectionCallback;

  const mockMatchMedia = (matches = false) => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockReturnValue({
        matches,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      }),
    });
  };

  const mockIntersectionObserver = () => {
    observeMock = jest.fn();
    unobserveMock = jest.fn();
    disconnectMock = jest.fn();

    const IntersectionObserverMock = jest.fn((callback) => {
      intersectionCallback = callback;

      return {
        observe: observeMock,
        unobserve: unobserveMock,
        disconnect: disconnectMock,
      };
    });

    Object.defineProperty(window, "IntersectionObserver", {
      configurable: true,
      writable: true,
      value: IntersectionObserverMock,
    });
    global.IntersectionObserver = IntersectionObserverMock;
  };

  beforeEach(() => {
    mockMatchMedia();
    mockIntersectionObserver();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render children with default classes and custom className", () => {
    render(<Reveal className="custom-reveal">Reveal content</Reveal>);

    const element = screen.getByText("Reveal content");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("reveal");
    expect(element).toHaveClass("custom-reveal");
    expect(element).not.toHaveClass("reveal-visible");
  });

  it("should render with the provided HTML tag", () => {
    render(<Reveal as="section">Section content</Reveal>);

    expect(screen.getByText("Section content").tagName).toBe("SECTION");
  });

  it("should apply reveal delay as a CSS custom property", () => {
    render(<Reveal delay={180}>Delayed content</Reveal>);

    expect(screen.getByText("Delayed content")).toHaveStyle({
      "--reveal-delay": "180ms",
    });
  });

  it("should observe the element and become visible when it intersects", () => {
    render(<Reveal>Observed content</Reveal>);

    const element = screen.getByText("Observed content");
    expect(observeMock).toHaveBeenCalledWith(element);

    act(() => {
      intersectionCallback([{ isIntersecting: true, target: element }]);
    });

    expect(element).toHaveClass("reveal-visible");
    expect(unobserveMock).toHaveBeenCalledWith(element);
  });

  it("should stay hidden when the observed element does not intersect", () => {
    render(<Reveal>Hidden content</Reveal>);

    const element = screen.getByText("Hidden content");

    act(() => {
      intersectionCallback([{ isIntersecting: false, target: element }]);
    });

    expect(element).not.toHaveClass("reveal-visible");
    expect(unobserveMock).not.toHaveBeenCalled();
  });

  it("should show content immediately when reduced motion is preferred", () => {
    mockMatchMedia(true);

    render(<Reveal>Accessible content</Reveal>);

    expect(screen.getByText("Accessible content")).toHaveClass(
      "reveal-visible",
    );
    expect(window.IntersectionObserver).not.toHaveBeenCalled();
  });

  it("should show content immediately when IntersectionObserver is unavailable", () => {
    delete window.IntersectionObserver;
    delete global.IntersectionObserver;

    render(<Reveal>Fallback content</Reveal>);

    expect(screen.getByText("Fallback content")).toHaveClass("reveal-visible");
  });

  it("should disconnect observer on unmount", () => {
    const { unmount } = render(<Reveal>Unmounted content</Reveal>);

    unmount();

    expect(disconnectMock).toHaveBeenCalled();
  });
});
