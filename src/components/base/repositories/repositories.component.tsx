import React, { useState } from "react"
import styled from "styled-components"
import Repository from "../repository/repository.component"

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  margin: 39px auto;
`

const Repositories = ({ data }) => {
  const [favourite, setFavourite] = useState(false)

  return (
    <GridWrapper>
      {console.log(data)}
      {data.map((repository) => (
        <Repository {...repository} />
      ))}
    </GridWrapper>
  )
}

export default Repositories
