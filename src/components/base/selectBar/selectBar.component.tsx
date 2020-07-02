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
  cursor: pointer;
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    margin: 10px auto;
  }
`

const SelectBar = () => {
  const context = useContext(AppContext)
  const { language, setLanguage, repos } = context

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value)
  }

  const repoUniqueLanguages = Array.from(
    new Set(
      repos === undefined ? "Loading" : repos.map((item: any) => item.language)
    )
  )

  return (
    <StyledSelect value={language} onChange={(e) => handleChange(e)}>
      <option disabled={true} value="all">
        Select language
      </option>
      {repoUniqueLanguages.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </StyledSelect>
  )
}

export default SelectBar
