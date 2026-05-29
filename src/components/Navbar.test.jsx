import { render, screen, waitFor } from "@testing-library/react";
import Navbar from "./Navbar.jsx";

//tester car logique du lien active et chgmt page
describe("Navbar", () => {
  beforeEach(() => {
    window.location.hash = "#home";
  });

  it("should render all navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("Accueil")).toBeInTheDocument();
    expect(screen.getByText("À propos")).toBeInTheDocument();
    expect(screen.getByText("Compétences")).toBeInTheDocument();
  });

  it("should highlight active link based on hash", () => {
    window.location.hash = "#home";
    render(<Navbar />);
    const homeLink = screen.getByText("Accueil").closest("a");
    expect(homeLink).toHaveClass("text-[#e63946]");
  });

  it("should update active link when hash changes", async () => {
    render(<Navbar />);
    window.location.hash = "#tools";
    window.dispatchEvent(new HashChangeEvent("hashchange"));

    await waitFor(() => {
      const skillsLink = screen.getByText("Compétences").closest("a");
      expect(skillsLink).toHaveClass("text-[#e63946]");
    });
  });

  it("should set default hash to home if no hash provided", () => {
    window.location.hash = "";
    render(<Navbar />);
    const homeLink = screen.getByText("Accueil").closest("a");
    expect(homeLink).toHaveClass("text-[#e63946]");
  });

  it("should have correct href attributes", () => {
    render(<Navbar />);
    expect(screen.getByText("Accueil")).toHaveAttribute("href", "#home");
    expect(screen.getByText("Compétences")).toHaveAttribute("href", "#tools");
  });
});
