export const theme = {
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "32px",
    xl: "64px",
  },

  colors: {
    text: "#202020",
    background: "#FFFFFF",
    primary: "#FD6F00",

    button: {
      primary: {
        bg: "#FD6F00",
        text: "#FFFFFF",
      },
      secondary: {
        bg: "#FFFFFF",
        text: "#FD6F00",
        border: "#FD6F00",
      },
    },
  },

  fonts: {
    heading: "'Urbanist', sans-serif",
    body: "'Poppins', sans-serif",
  },

  typography: {
    /* HERO TITLE (Frontend Developer) */
    h1: {
      desktop: "82px",
      tablet: "64px",
      mobile: "42px",
    },

    /* HERO NAME (Sara…) */
    h3: {
      size: "75px",
    },

    /* SKILLS TITLE */
    h2: {
      size: "80px",
      weight: 700,
      lineHeight: "100px",
    },

    /* BODY TEXT */
    body: {
      desktop: "18px",
      tablet: "16px",
      mobile: "15px",
      weight: 400,
      lineHeight: "32px",
    },
  },

  /* BUTTON TYPOGRAPHY */
  button: {
    size: "18px",
    weight: 500,
  },

  /* BUTTON LAYOUT */
  buttons: {
    height: "48px",
    radius: "12px",
    paddingX: "16px",
    gap: "16px",
  },

  breakpoints: {
    tablet: "1024px",
    mobile: "768px",
  },
};
