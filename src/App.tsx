// Global Modules
import { store } from "@/app/store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

// Local Imports

// Styles
import "@/styles/GlobalStyle.css";
import theme from "@/styles/theme";

// Custom Hooks

import useToggleSidebar from "./hooks/useToggleSidebar";

// Components
import TaskBody from "@/containers/TaskBody";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";

function App() {
  const { toggle, handleToggle } = useToggleSidebar();

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header />
          <Sidebar toggle={toggle} handleToggle={handleToggle} />
          <TaskBody toggle={toggle} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
