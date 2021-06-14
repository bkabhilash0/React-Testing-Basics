// import {} from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// 3As =  Arrange,Act,Assert

describe("Greeting Component", () => {
  test("Renders Hello World as a Test", () => {
    //* Arrange
    render(<Greeting />);

    //* Act => Here its Nothing

    //* Assert
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Renders It's good to see you! if the Button wasn't clickeed", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("It's good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("Renders Changed! if the Button was clicked", () => {
    //* Arrange
    render(<Greeting />);
    //* Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //* Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("Doesn't renders It's good to see you! if the Button was clicked", () => {
    //* Arrange
    render(<Greeting />);
    //* Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //* Assert
    const outputElement = screen.queryByText("It's good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
