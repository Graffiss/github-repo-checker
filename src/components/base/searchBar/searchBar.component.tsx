import React, { useContext } from "react"
import styled from "styled-components"
import { textColor } from "../../../theming/theme-getters"
import AppContext from "../../../context/AppContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Wrapper = styled.div`
  position: relative;
`

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

  &::placeholder {
    color: ${textColor("secondary")};
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 225px;
  }
`

const SearchButton = styled.button`
  position: absolute;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: ${textColor("secondary")};
`
const SearchBar = () => {
  const context = useContext(AppContext)
  const { query, setQuery, setSearch } = context

  return (
    <Wrapper>
      <StyledInput
        type="text"
        name="search"
        data-testid="search"
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
        placeholder="Search"
        autoComplete="off"
        autoFocus
      />
      <SearchButton type="button" onClick={() => setSearch(query)}>
        <FontAwesomeIcon icon={faSearch} />
      </SearchButton>
    </Wrapper>
  )
}

export default SearchBar
