import React from "react";
import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';

import {describe, it, expect } from "vitest";

import App from "./App";

describe("dogfinder app", function () {
  it("renders without crashing", function () {
    render(<App />);
  });

  it("contains loading", function () {
    const result = render(<App />);
    expect(result.queryByText("Loading...")).toBeInTheDocument();
  });

  it("contains DogList", async function () {
    const result = render(<App />);
    await waitFor(() => expect(result.container.querySelector(".DogList")).toBeInTheDocument());
  });

  it("contains nav", async function () {
    const result = render(<App />);
    await waitFor(() => expect(result.container.querySelector(".NavBar")).toBeInTheDocument());
  });

});
