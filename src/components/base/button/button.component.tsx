import styled from "styled-components"
import { buttonColor } from "../../../theming/theme-getters"

export const Button = styled.button`
  background: ${buttonColor("primary")};
  color: white;
  outline: none;
  padding: 13px 16px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 0.16px;
  margin-right: 18px;
  height: 40px;
`
