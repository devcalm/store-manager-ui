import { RouterProvider } from "react-router-dom";
import router from "./components/routes/router.jsx";
import "./App.scss";

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App
