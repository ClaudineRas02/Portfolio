import { fireEvent, render, screen } from "@testing-library/react";
import CourseList from "./CourseList.jsx";

const certificate = {
  title: "Huawei ICT Academy",
  courses: [
    { id: "a", title: "HCIA-openEuler V1.0", file: "/a.png" },
    { id: "b", title: "HCIP-openGauss V1.0", file: "/b.png" },
  ],
};

//tester la liste des certificats et leurs liens
describe("CourseList", () => {
  it("should link each course to its file in a new tab", () => {
    render(<CourseList certificate={certificate} onClose={() => {}} />);
    const link = screen.getByRole("link", { name: /HCIA-openEuler/i });
    expect(link).toHaveAttribute("href", "/a.png");
    expect(link).toHaveAttribute("target", "_blank");
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });

  it("should call onClose from the close button and the backdrop", () => {
    const onClose = jest.fn();
    const { container } = render(
      <CourseList certificate={certificate} onClose={onClose} />,
    );
    fireEvent.click(screen.getByLabelText(/Fermer la liste/i));
    fireEvent.click(container.querySelector('[role="presentation"]'));
    expect(onClose).toHaveBeenCalledTimes(2);
  });
});
