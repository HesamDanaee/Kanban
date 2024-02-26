import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { getToggles } from "@/selectors/togglesSelector";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";

interface Props {
  children: ReactNode;
}

const ThemeProviderLayer = ({ children }: Props) => {
  const currTheme = useSelector(getToggles).theme;

  return (
    <ThemeProvider theme={currTheme === "light" ? theme.light : theme.dark}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderLayer;
