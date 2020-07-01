export const parseData = (rawData) => {
  const data = rawData.allGithubData.edges[0].node.data
  const repositories = data.organization
  return repositories
}

export const parseName = (o) =>
  o.name ? Object.assign({}, o, { name: o.name.replace(/-/g, " ") }) : o
