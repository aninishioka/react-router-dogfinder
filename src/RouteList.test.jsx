import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import RouteList from "./RouteList";

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

describe("RouteList component", function () {
    it("renders without crashing", function () {
        render(<MemoryRouter><RouteList dogs={TEST_DOGS} /></MemoryRouter>);
    });

    it("renders DogList", function () {
        const result = render(
            <MemoryRouter initialEntries={["/dogs"]}>
                <RouteList dogs={TEST_DOGS} />
            </MemoryRouter>);

        expect(result.queryByText("Whiskey")).toBeInTheDocument();
        expect(result.queryByText("Duke")).toBeInTheDocument();
        expect(result.queryByText("Perry")).toBeInTheDocument();
    });

    it("renders DogFilter and then DogDetails given URL param", function () {
        const result = render(
            <MemoryRouter initialEntries={["/dogs/whiskey"]}>
                <RouteList dogs={TEST_DOGS} />
            </MemoryRouter>);

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
