// Global Modules
import { store } from "@/app/store/store";
import { Provider } from "react-redux";

// Local Imports

// Styles
import "@/styles/GlobalStyle.css";

// Components
import TaskBody from "@/containers/TaskBody";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "./containers/Header";
import ThemeProviderLayer from "./components/ThemeProvider";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProviderLayer>
          <Header />
          <Sidebar />
          <TaskBody />
        </ThemeProviderLayer>
      </Provider>
    </>
  );
}

export default App;
