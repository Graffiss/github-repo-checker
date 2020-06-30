import "@testing-library/jest-dom/extend-expect"
import React from "react"
import { render } from "../../../tests/test-render"
import { ButtonIcon } from "./buttonIcon.component"

it("renders without crashing", () => {
  render(<ButtonIcon fav icon={"some url"} />)
})
