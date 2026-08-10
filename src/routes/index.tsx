import { Route, Routes } from "react-router"
import App from "../App"
import { SignUpScreen } from "./pages/sign-up"
import { SignInScreen } from "./pages/sign-in"
import { AuthProvider } from "../context/auth-context"
import { MainScreen } from "./pages/main"
import { RequireAuth } from "./pages/require-auth"
import { MainLayout } from "./layouts/main-layout"


export const AppRoutes = () => {

    return(
        <Routes>
            <Route>
                <Route path={"/sign-up"} element={<SignUpScreen/>}/>
                <Route path="/sign-in" element={<SignInScreen/>}/>
            </Route>
            <Route element={<RequireAuth/>}>
                <Route element={<MainLayout/>}>
                    <Route path="/" element={<MainScreen/>}/>
                </Route>
            </Route>
        </Routes>
    )
}