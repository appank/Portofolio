import { ThemeProvider } from "./components/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
