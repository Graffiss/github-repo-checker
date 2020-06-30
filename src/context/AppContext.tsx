import React from "react"

interface Repository {
  id: number
  language: string
  name: string
  description: string
  full_name: string
  stargazers_count: number
  forks_count: number
  url: string
  watchers_count: number
}

interface Context {
  favourites: Repository[]
  repos: Repository[]
  addToFav: (repository: Repository) => Repository[]
  removeFromFav: (id: number) => Repository[]
  language: string
  setLanguage: (value: string) => string
  query: string
  setQuery: (query: string) => string
  clear: () => void
  setSearch: (query: string) => string
}

const AppContext = React.createContext<Context>({})

export default AppContext
