import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesPage from "./pages/RoutesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesPage />
      </BrowserRouter>
    </>
  );
}
export default App;
