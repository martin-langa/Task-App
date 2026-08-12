import useAuth from "../hooks/useAuth"

type authType = {
    username: string,
    role: "ADMIN" | "USER",
    id: string,
    email: string,
}

export const Header = () => {
    const { setAuth } = useAuth();
    const storedUser = localStorage.getItem("user");
    
    const auth: authType | null = storedUser ? JSON.parse(storedUser) : null;

    if (auth) {
        setAuth(auth);
    }

    const initials = auth
        ?.username
        ?.split(" ")
        .map(name => name[0])
        .join("").toUpperCase() ?? "UK";
    return(
        <header
            className="flex w-full justify-between"
        >
            <h1 className="font-bold text-xl">
                Task Management App
            </h1>
            <form className="flex items-center gap-4" onSubmit={() => {
                setAuth(null)
                localStorage.removeItem("user");
                window.location.href = "/sign-in"
                }}>
                <div className="w-12 h-12 bg-gray-500 border-gray-300 border-2 text-white flex items-center justify-center rounded-full">
                    <h1 className="text-md">{initials}</h1>
                </div>
                <button type="submit" className="bg-gray-400 text-md text-white h-8 px-6 rounded-2xl" >Sair</button>
            </form>
        </header>
    )
}