import React, { useEffect, useState } from "react"
import AppContext from "./AppContext"

const GlobalState = ({ children }) => {
  const initialFavourites =
    JSON.parse(window.localStorage.getItem("favourite repos")) || []
  const [favourites, setFavourites] = useState(initialFavourites)
  const [repos, setRepos] = useState([])
  const [query, setQuery] = useState("")
  const [language, setLanguage] = useState("all")

  useEffect(() => {
    window.localStorage.setItem("favourite repos", JSON.stringify(favourites))
  }, [favourites])

  useEffect(() => {
    fetch(
      `https://api.github.com/search/repositories?q=${query}+language:${language}+user:Appnroll&sort=stars&order=desc&per_page=6`
    )
      .then((response) => response.json())
      .then((result) => {
        setRepos(result.items)
      })
  }, [language])

  const addToFav = (repository) => {
    setFavourites([...favourites, repository])
  }

  const removeFromFav = (id) => {
    const filteredFavs = favourites.filter((fav) => fav.id !== id)
    setFavourites(filteredFavs)
  }

  const clear = () => {
    setQuery("")
    setLanguage("all")
  }

  const context = {
    favourites,
    addToFav,
    removeFromFav,
    repos,
    language,
    setLanguage,
    query,
    setQuery,
    clear,
  }
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export default GlobalState
