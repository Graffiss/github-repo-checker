export const parseData = (rawData) => {
  const data = rawData.githubData.data
  const repositories = data.search.edges
  return repositories
}

export const parseName = (o) =>
  o.name ? Object.assign({}, o, { name: o.name.replace(/-/g, " ") }) : o
