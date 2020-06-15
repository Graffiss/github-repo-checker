import { createGlobalStyle } from "styled-components"
import { Theme } from "../theming/theme"
import { textColor } from "../theming/theme-getters"

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
  html, body, p {
    margin: 0;
    padding: 0;
    font-family: 'Quicksand';
    font-weight: 400;
    letter-spacing: 0.16px;
    line-height: 18px;
    color: ${textColor("primary")}
  }
`

export default GlobalStyle
