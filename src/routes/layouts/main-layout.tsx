import { Outlet } from "react-router"
import { Header } from "../../components/header"
import { useEffect } from "react"

export const MainLayout = () => {

    return(

        <div
            className="p-4"
        >
            
            <Outlet/>
        </div>
    )
}