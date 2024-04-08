import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import DogList from "./DogList";

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

describe("DogList component", function () {
    it("renders without crashing", function () {
        render(
            <MemoryRouter>
                <DogList dogs={TEST_DOGS} />
            </MemoryRouter>);
    });

    it("contains all dogs", function () {
        const result = render(
            <MemoryRouter>
                <DogList dogs={TEST_DOGS} />
            </MemoryRouter>);

        expect(result.queryByText("Whiskey")).toBeInTheDocument();
        expect(result.queryByText("Duke")).toBeInTheDocument();
        expect(result.queryByText("Perry")).toBeInTheDocument();
    });
});