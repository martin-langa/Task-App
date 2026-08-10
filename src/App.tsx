import { BrowserRouter } from "react-router";
import { TaskCard } from "./components/task-card";
import { AppRoutes } from "./routes";
import { AuthProvider } from "./context/auth-context";


export default function App() {
  return(
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}