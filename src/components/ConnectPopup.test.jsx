import { render, screen, fireEvent } from "@testing-library/react";
import ConnectPopup from "./ConnectPopup.jsx";

//tester car affichage et fermeture du popup contact
describe("ConnectPopup", () => {
  it("should render user name", () => {
    render(<ConnectPopup onClose={jest.fn()} />);
    expect(screen.getByText("Claudine Rasamimanana")).toBeInTheDocument();
  });

  it("should render availability status", () => {
    render(<ConnectPopup onClose={jest.fn()} />);
    expect(screen.getByText("Available for opportunities")).toBeInTheDocument();
  });

  it("should render all contact options", () => {
    render(<ConnectPopup onClose={jest.fn()} />);
    expect(screen.getByText("Facebook")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("WhatsApp")).toBeInTheDocument();
    expect(screen.getByText("Mail")).toBeInTheDocument();
  });

  it("should call onClose when close button is clicked", () => {
    const mockOnClose = jest.fn();
    render(<ConnectPopup onClose={mockOnClose} />);
    fireEvent.click(screen.getByLabelText("Close"));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("should have correct Facebook link", () => {
    render(<ConnectPopup onClose={jest.fn()} />);
    const facebookLink = screen.getByText("Claudine R.").closest("a");
    expect(facebookLink).toHaveAttribute(
      "href",
      "https://www.facebook.com/claudine.rasamimanana",
    );
  });

  it("should have correct LinkedIn link", () => {
    render(<ConnectPopup onClose={jest.fn()} />);
    const linkedinLink = screen
      .getAllByRole("link")
      .find(
        (link) =>
          link.getAttribute("href") ===
          "https://www.linkedin.com/in/claudinerasamimanana/",
      );
    expect(linkedinLink).toBeInTheDocument();
  });

  it("should have correct GitHub link", () => {
    render(<ConnectPopup onClose={jest.fn()} />);
    const githubLink = screen
      .getAllByRole("link")
      .find(
        (link) =>
          link.getAttribute("href") === "https://github.com/ClaudineRas02",
      );
    expect(githubLink).toBeInTheDocument();
  });

  it("should have correct email link", () => {
    render(<ConnectPopup onClose={jest.fn()} />);
    const emailLink = screen
      .getAllByRole("link")
      .find(
        (link) =>
          link.getAttribute("href") === "mailto:hanitraclaudine@gmail.com",
      );
    expect(emailLink).toBeInTheDocument();
  });
});
