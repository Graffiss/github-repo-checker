import styled, { css } from "styled-components"
import { buttonColor } from "../../../theming/theme-getters"

export const ButtonIcon = styled.div`
  display: block;
  width: 16px;
  height: 16px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100% 100%;
  background-color: transparent;
  border: none;
  margin-right: 4px;

  ${({ fav }) =>
    fav &&
    css`
      width: 32px;
      height: 32px;
      background-size: 50% 50%;
      background-color: ${buttonColor("primary")};
      margin: 0;
      cursor: pointer;
    `}
`
