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

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    grid-template-columns: repeat(1, 1fr);
    margin: 10px auto;
  }
`

const Repositories = () => {
  const context = useContext(AppContext)
  const { repos } = context
  return (
    <GridWrapper>
      {repos.length === 0 ? (
        <p>Loading data...</p>
      ) : (
        repos.map((repository) => (
          <Repository key={repository.id} repository={repository} />
        ))
      )}
    </GridWrapper>
  )
}

export default Repositories
