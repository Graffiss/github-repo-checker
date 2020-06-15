const theme = {
  color: {
    text: {
      primary: "#243C56",
      secondary: "#B9C6E0",
      ternary: "#0062FF",
    },
    background: {
      primary: "#243C56",
    },
    button: {
      primary: "#0062FF",
    },
  },
  layout: {
    width: "80vw",
  },
  breakpoint: {
    tablet: 48,
  },
}

export type Theme = typeof theme

export default theme
