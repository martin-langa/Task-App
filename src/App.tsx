import { BrowserRouter } from "react-router";
import { TaskCard } from "./components/task-card";
import { AppRoutes } from "./routes";


export default function App() {
  return(
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}