import "@testing-library/jest-dom/extend-expect"
import React from "react"
import { render } from "../../../tests/test-render"
import { Button } from "./button.component"

it("renders without crashing", () => {
  render(<Button />)
})
