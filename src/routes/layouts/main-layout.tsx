import { Outlet } from "react-router"
import { Header } from "../../components/header"

export const MainLayout = () => {

    return(

        <div
            className="p-4"
        >
            
            <Outlet/>
        </div>
    )
}