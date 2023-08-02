export interface Theme {
  colors: {
    [key: string]: string;
  };
  bg: {
    [key: string]: string;
  };
  status: {
    [key: string]: string;
  };
}

const theme: Theme = {
  colors: {
    white: "#ffffff",
    "purplish-blue": " #635fc7",
  },
  bg: {
    white: "#ffffff",
    "blueish-black": " #20212c",
    "dark-shade": " #2b2c37",
    "purplish-blue": " #635fc7",
    "steel-blue": " #828fa3",
    "Lavender-Blue": "#a8a4ff",
  },
  status: {
    todo: "#5FC1DA",
    doing: "#8374DE",
    done: "#78C8AE",
  },
};

export default theme;
