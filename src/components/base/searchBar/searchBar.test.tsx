import "@testing-library/jest-dom/extend-expect"
import React from "react"
import { fireEvent, waitForElement } from "@testing-library/react"
import { render } from "../../../tests/test-render"
import SearchBar from "./searchBar.component"

it("renders without crashing", async () => {
  const { getByTestId, getByText } = render(<SearchBar />)
  const input = getByTestId("search")

  fireEvent.change(input, { target: { value: "kudos" } })
  const textNode = await waitForElement(() => getByText("kudos"))
  expect(textNode).toBeInTheDocument()
})
