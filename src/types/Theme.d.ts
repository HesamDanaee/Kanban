interface Color {
  accent: string;
  primary: string;
  secondary: string;
  third: string;
  forth: string;
  fifth: string;
  status: StatusColor;
}

interface StatusColor {
  todo: string;
  doing: string;
  done: string;
}

interface Theme {
  dark: Color;
  light: Color;
}
