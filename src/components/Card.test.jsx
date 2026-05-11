import { render, screen } from "@testing-library/react";
import Card from "./Card.jsx";

//tester car forte réutisabilité
describe("Card", () => {
  it("should render with title and description", () => {
    render(
      <Card
        title="Test Title"
        description="Test Description"
        icon={<span>🎯</span>}
      />,
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("should render icon correctly", () => {
    render(
      <Card
        title="Test"
        description="Test"
        icon={<span data-testid="test-icon">📚</span>}
      />,
    );
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });

  it("should render children when provided", () => {
    render(
      <Card title="Test" description="Test" icon={<span>🎯</span>}>
        <span>Child content</span>
      </Card>,
    );
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("should not render children container when children not provided", () => {
    const { container } = render(
      <Card title="Test" description="Test" icon={<span>🎯</span>} />,
    );
    const childrenContainer = container.querySelector(".flex.flex-wrap.gap-2");
    expect(childrenContainer).not.toBeInTheDocument();
  });

  it("should apply custom className", () => {
    const { container } = render(
      <Card
        title="Test"
        description="Test"
        icon={<span>🎯</span>}
        className="custom-class"
      />,
    );
    expect(container.querySelector(".custom-class")).toBeInTheDocument();
  });

  it("should apply custom descriptionClassName", () => {
    render(
      <Card
        title="Test Title"
        description="Test Description"
        icon={<span>🎯</span>}
        descriptionClassName="custom-desc-class"
      />,
    );
    const description = screen.getByText("Test Description");
    expect(description).toHaveClass("custom-desc-class");
  });
});
