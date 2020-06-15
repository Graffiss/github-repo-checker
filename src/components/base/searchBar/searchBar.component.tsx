import React from "react"
import styled from "styled-components"
import { textColor } from "../../../theming/theme-getters"

const SearchBar = ({ query, setQuery }) => {
  const StyledInput = styled.input`
    color: ${textColor("secondary")};
    border: 1px solid ${textColor("secondary")};
    box-shadow: 0 4px 10px 0 rgba(189, 199, 222, 0.23);
    border-radius: 2px;
    height: 40px;
    width: 180px;
    font-size: 14px;
    outline: none;
    letter-spacing: 0.16px;
    line-height: 18px;
    padding-left: 14px;
    margin-right: 18px;
  `

  return (
    <StyledInput
      type="text"
      name="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search"
      autoFocus
    />
  )
}

export default SearchBar
