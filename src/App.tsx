// Global Modules
import { store } from "@/app/store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

// Local Imports

// Styles
import "@/styles/GlobalStyle.css";
import theme from "@/styles/theme";

// Components
import TaskBody from "@/containers/TaskBody";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "./containers/Header";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header />
          <Sidebar />
          <TaskBody />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
