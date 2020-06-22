import React, { useEffect, useState } from "react"
import AppContext from "./AppContext"

const GlobalState = ({ children }) => {
  const initialFavourites =
    JSON.parse(window.localStorage.getItem("favourite repos")) || []
  const [favourites, setFavourites] = useState(initialFavourites)
  const [repos, setRepos] = useState([])

  useEffect(() => {
    window.localStorage.setItem("favourite repos", JSON.stringify(favourites))
  }, [favourites])

  useEffect(() => {
    fetch(`https://api.github.com/orgs/appnroll/repos?per_page=6`)
      .then((response) => response.json())
      .then((result) => {
        setRepos(result)
      })
  }, [])

  const addToFav = (repository) => {
    setFavourites([...favourites, repository])
  }

  const removeFromFav = (id) => {
    const filteredFavs = favourites.filter((fav) => fav.id !== id)
    setFavourites(filteredFavs)
  }

  const context = {
    favourites,
    addToFav,
    removeFromFav,
    repos,
  }
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export default GlobalState
