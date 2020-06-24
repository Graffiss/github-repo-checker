import React, { useEffect, useState } from "react"
import AppContext from "./AppContext"
import axios from "axios"

const GlobalState = ({ children }) => {
  const initialFavourites =
    JSON.parse(window.localStorage.getItem("favourite repos")) || []
  const [favourites, setFavourites] = useState(initialFavourites)
  const [repos, setRepos] = useState([])
  const [query, setQuery] = useState("")
  const [language, setLanguage] = useState("all")
  const [search, setSearch] = useState("")

  useEffect(() => {
    window.localStorage.setItem("favourite repos", JSON.stringify(favourites))
  }, [favourites])

  useEffect(() => {
    const fetchData = async () => {
      const repos = await axios.get(
        `https://api.github.com/search/repositories?q=${search}+language:${language}+user:Appnroll&sort=stars&order=desc&per_page=6`
      )
      setRepos(repos.data.items)
    }
    fetchData()
  }, [language, search])

  const addToFav = (repository) => {
    setFavourites([...favourites, repository])
  }

  const removeFromFav = (id) => {
    const filteredFavs = favourites.filter((fav) => fav.id !== id)
    setFavourites(filteredFavs)
  }

  const clear = (e) => {
    e.preventDefault()

    setSearch("")
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
    setSearch,
  }
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export default GlobalState
