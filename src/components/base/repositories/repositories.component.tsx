import React, { useContext } from "react"
import styled from "styled-components"
import Repository from "../repository/repository.component"
import AppContext from "../../../context/AppContext"

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  margin: 39px auto;
`

const Repositories = () => {
  const context = useContext(AppContext)
  const { repos } = context
  return (
    <GridWrapper>
      {repos.map((repository) => (
        <Repository key={repository.id} repository={repository} />
      ))}
    </GridWrapper>
  )
}

export default Repositories
