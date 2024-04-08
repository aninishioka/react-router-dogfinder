import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import DogFilter from "./DogFilter";

const TEST_DOGS = [
  {
    name: "Whiskey",
    age: 5,
    src: "whiskey",
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!",
    ],
  },
  {
    name: "Duke",
    age: 3,
    src: "duke",
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs.",
    ],
  },
  {
    name: "Perry",
    age: 4,
    src: "perry",
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain.",
    ],
  },
];

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: () => ({ name: "whiskey" })
  };
});

describe("DogFilter component", function () {
  it("renders without crashing", function () {
    render(<DogFilter dogs={TEST_DOGS} />);
  });

  it("contains correct dog info", function () {
    const result = render(<DogFilter dogs={TEST_DOGS} />);

    expect(result.queryByText("Whiskey")).toBeInTheDocument();
    expect(result.queryByText("Age: 5")).toBeInTheDocument();
    expect(
      result.queryByText("Whiskey loves eating popcorn.")
    ).toBeInTheDocument();
    expect(result.container.querySelector("img").getAttribute("src")).toEqual(
      "/whiskey.jpg"
    );
  });
});
