import React, { useContext } from "react"
import styled from "styled-components"
import SearchBar from "../searchBar/searchBar.component"
import SelectBar from "../selectBar/selectBar.component"
import { Button } from "../button/button.component"
import AppContext from "../../../context/AppContext"

const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

const NavBar = () => {
  const context = useContext(AppContext)
  const { clear } = context

  return (
    <NavWrapper>
      <SearchBar />
      <SelectBar />
      <Button onClick={clear}>Clear filters</Button>
    </NavWrapper>
  )
}

export default NavBar
