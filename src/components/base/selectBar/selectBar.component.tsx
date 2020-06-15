import React from "react"
import styled from "styled-components"
import { textColor } from "../../../theming/theme-getters"

const SelectBar = ({ select, setSelect }) => {
  const StyledSelect = styled.select`
    color: ${textColor("secondary")};
    border: 1px solid ${textColor("secondary")};
    border-radius: 2px;
    height: 40px;
    width: 275px;
    font-size: 14px;
    outline: none;
    letter-spacing: 0.16px;
    line-height: 18px;
    padding-left: 14px;
    margin-right: 18px;
  `

  const handleChange = (e) => {
    setSelect(e.target.value)
  }

  return (
    <StyledSelect value={select} onChange={(e) => handleChange(e)}>
      <option disabled={true} value="">
        Select language
      </option>
      <option value="javascript">JavaScript</option>
      <option value="css">CSS</option>
      <option selected value="swift">
        Swift
      </option>
      <option value="kotlin">Kotlin</option>
    </StyledSelect>
  )
}

export default SelectBar
