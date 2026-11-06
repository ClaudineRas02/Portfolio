import { fireEvent, render, screen } from "@testing-library/react";
import Projects from "./Projects.jsx";

jest.mock("../components/Reveal", () => ({
  __esModule: true,
  default: ({ children }) => <div>{children}</div>,
}));

jest.mock("../data/projects", () => ({
  projects: [
    {
      id: "private",
      isPrivate: true,
      alt: "Couverture privée",
      title: "Projet privé test",
      category: "Stage",
      company: "Entreprise",
      period: "2026",
      challenge: "Défi",
      contribution: ["Contribution"],
      inProgress: ["Chantier en cours"],
      impact: ["Impact"],
      chips: ["Ansible"],
    },
    {
      id: "public",
      image: "public.png",
      alt: "Image publique",
      title: "Projet public test",
      challenge: "Défi",
      contribution: ["Contribution publique"],
      impact: ["Impact public"],
      githubUrl: "https://github.com/example/repo",
      chips: ["React"],
    },
  ],
}));

const openDetails = (index) =>
  fireEvent.click(screen.getAllByRole("button", { name: /Détails/i })[index]);

//tester l'affichage d'un projet privé et sa note de confidentialité
describe("Projects - private project", () => {
  it("should show no repo link and a privacy label", () => {
    render(<Projects />);
    openDetails(0);
    expect(screen.queryByText("Voir le repo")).not.toBeInTheDocument();
    expect(screen.getByText("Chantier en cours")).toBeInTheDocument();
    expect(
      screen.getAllByText(/Projet privé — Réalisé en entreprise/i).length,
    ).toBeGreaterThan(1);
  });

  it("should toggle the privacy note", () => {
    render(<Projects />);
    openDetails(0);
    const toggle = screen.getByRole("button", { name: /Pourquoi aucun lien/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("note")).not.toBeInTheDocument();

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("note")).toHaveTextContent(
      /confidentialité professionnelle/i,
    );

    fireEvent.click(toggle);
    expect(screen.queryByRole("note")).not.toBeInTheDocument();
  });

  it("should keep the repo link for public projects", () => {
    render(<Projects />);
    openDetails(1);
    expect(screen.getByText("Voir le repo")).toHaveAttribute(
      "href",
      "https://github.com/example/repo",
    );
    expect(
      screen.queryByRole("button", { name: /Pourquoi aucun lien/i }),
    ).not.toBeInTheDocument();
  });
});
