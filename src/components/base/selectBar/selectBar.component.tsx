import React, { useContext } from "react"
import styled from "styled-components"
import { textColor } from "../../../theming/theme-getters"
import AppContext from "../../../context/AppContext"

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

const SelectBar = () => {
  const context = useContext(AppContext)
  const { language, setLanguage } = context

  const handleChange = (e) => {
    setLanguage(e.target.value)
  }

  return (
    <StyledSelect
      defaultValue="all"
      value={language}
      onChange={(e) => handleChange(e)}
    >
      <option disabled={true} value="all">
        Select language
      </option>
      <option value="javascript">JavaScript</option>
      <option value="css">CSS</option>
      <option selected value="typescript">
        TypeScript
      </option>
      <option value="kotlin">Kotlin</option>
    </StyledSelect>
  )
}

export default SelectBar
