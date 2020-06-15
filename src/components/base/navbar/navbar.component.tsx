import React, { useState } from "react"
import styled from "styled-components"
import SearchBar from "../searchBar/searchBar.component"
import SelectBar from "../selectBar/selectBar.component"
import { Button } from "../button/button.component"

const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

const NavBar = () => {
  const [query, setQuery] = useState("")
  const [select, setSelect] = useState("")

  const clear = () => {
    setQuery("")
    setSelect("")
  }

  return (
    <NavWrapper>
      <SearchBar query={query} setQuery={setQuery} />
      <SelectBar select={select} setSelect={setSelect} />
      <Button onClick={clear}>Clear filters</Button>
    </NavWrapper>
  )
}

export default NavBar
