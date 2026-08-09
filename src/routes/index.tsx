import { Route, Routes } from "react-router"
import App from "../App"
import { SignUpScreen } from "./pages/sign-up"
import { SignInScreen } from "./pages/sign-in"


export const AppRoutes = () => {

    return(
        <Routes>
            <Route path={"/"} element={<App />} />
            <Route path={"/sign-up"} element={<SignUpScreen />} />
            <Route path="/sign-in" element={<SignInScreen />} />
        </Routes>
    )
}