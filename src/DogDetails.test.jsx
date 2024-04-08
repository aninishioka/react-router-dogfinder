import React from "react";
import { render } from "@testing-library/react";
import {describe, it, expect } from "vitest";
import DogDetails from "./DogDetails";

const TEST_DOG = {
    "name": "Whiskey",
    "age": 5,
    "src": "whiskey",
    "facts": [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  }

describe("dogdetails component", function () {
  it("renders without crashing", function () {
    render(<DogDetails dog={TEST_DOG}/>);
  });

  it("contains correct dog info", function () {
    const result = render(<DogDetails dog={TEST_DOG}/>);
    expect(result.queryByText("Whiskey")).toBeInTheDocument();
    expect(result.queryByText("Age: 5")).toBeInTheDocument();
    expect(result.queryByText("Whiskey loves eating popcorn.")).toBeInTheDocument();
    expect(result.container.querySelector('img').getAttribute('src')).toEqual('/whiskey.jpg')
  });

});