import { screen, fireEvent, render } from "@testing-library/react";
import Home from "./Home.jsx";

//tester car affichage du bouton et des textes accueils
describe("Home - Modal Connect", () => {
  it("should open ConnectPopup when button is clicked", () => {
    render(<Home />);
    fireEvent.click(screen.getByText(/Let's Connect/i));
    expect(screen.getByText("Claudine Rasamimanana")).toBeInTheDocument();
  });

  it("should close modal when close button is clicked", () => {
    render(<Home />);
    fireEvent.click(screen.getByText(/Let's Connect/i));
    fireEvent.click(screen.getByLabelText("Close"));
    expect(screen.queryByText("Claudine Rasamimanana")).not.toBeInTheDocument();
  });

  it("should close modal when backdrop is clicked", () => {
    const { container } = render(<Home />);
    fireEvent.click(screen.getByText(/Let's Connect/i));
    fireEvent.click(container.querySelector('[role="presentation"]'));
    expect(screen.queryByText("Claudine Rasamimanana")).not.toBeInTheDocument();
  });
});
