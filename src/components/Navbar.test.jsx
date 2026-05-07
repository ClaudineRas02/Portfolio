import { render, screen, waitFor } from "@testing-library/react";
import Navbar from "./Navbar.jsx";

//tester car logique du lien active et chgmt page
describe("Navbar", () => {
  beforeEach(() => {
    window.location.hash = "#home";
  });

  it("should render all navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });

  it("should highlight active link based on hash", () => {
    window.location.hash = "#home";
    const { rerender } = render(<Navbar />);
    const homeLink = screen.getByText("Home").closest("a");
    expect(homeLink).toHaveClass("text-[#e63946]");
  });

  it("should update active link when hash changes", async () => {
    render(<Navbar />);
    window.location.hash = "#tools";
    window.dispatchEvent(new HashChangeEvent("hashchange"));

    await waitFor(() => {
      const skillsLink = screen.getByText("Skills").closest("a");
      expect(skillsLink).toHaveClass("text-[#e63946]");
    });
  });

  it("should set default hash to home if no hash provided", () => {
    window.location.hash = "";
    render(<Navbar />);
    const homeLink = screen.getByText("Home").closest("a");
    expect(homeLink).toHaveClass("text-[#e63946]");
  });

  it("should have correct href attributes", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toHaveAttribute("href", "#home");
    expect(screen.getByText("Skills")).toHaveAttribute("href", "#tools");
  });
});
