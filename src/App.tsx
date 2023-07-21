// Global Modules
import { store } from "@/app/store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

// Local Imports

// Styles
import "@/styles/GlobalStyle.css";
import theme from "@/styles/theme";

// Components
import Sidebar from "@/components/sidebar/Sidebar";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Sidebar />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
