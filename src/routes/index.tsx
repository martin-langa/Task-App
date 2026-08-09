import { Route, Routes } from "react-router"
import App from "../App"
import { SignUpScreen } from "./pages/sign-up"


export const AppRoutes = () => {

    return(
        <Routes>
            <Route path={"/"} element={<App />} />
            <Route path={"/sign-up"} element={<SignUpScreen />} />
            
        </Routes>
    )
}