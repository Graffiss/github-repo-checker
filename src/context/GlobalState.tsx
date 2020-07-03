import React, { useEffect, useState } from "react"
import AppContext from "./AppContext"
import axios from "axios"

interface IProps {
  children: React.ReactNode
}

export interface Repository {
  id: number
  language: string
  name: string
  description: string
  full_name: string
  stargazers_count: number
  forks_count: number
  html_url: string
  watchers_count: number
}

const GlobalState = ({ children }: IProps) => {
  const windowGlobal =
    typeof window !== "undefined" &&
    window.localStorage.getItem("favourite repos")
  const initialFavourites = JSON.parse(windowGlobal) || []
  const [favourites, setFavourites] = useState<Repository[]>(initialFavourites)
  const [repos, setRepos] = useState<Repository[]>([])
  const [query, setQuery] = useState<String>("")
  const [language, setLanguage] = useState<String>("all")
  const [search, setSearch] = useState<String>("")

  useEffect(() => {
    window.localStorage.setItem("favourite repos", JSON.stringify(favourites))
  }, [favourites])

  useEffect(() => {
    const fetchData = async () => {
      const repos = await axios.get(
        `https://api.github.com/search/repositories?q=${search}+language:${language}+user:Appnroll&sort=stars&order=desc`
      )
      setRepos(repos.data.items)
    }
    fetchData()
  }, [language, search])

  const addToFav = (repository: Repository) => {
    setFavourites([...favourites, repository])
  }

  const removeFromFav = (id: number) => {
    const filteredFavs = favourites.filter((fav: Repository) => fav.id !== id)
    setFavourites(filteredFavs)
  }

  const clear = (e: any) => {
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
