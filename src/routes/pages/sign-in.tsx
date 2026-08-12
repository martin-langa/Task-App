import { useContext, useState } from "react"
import { InputField } from "../../components/input"
import { Button } from "../../components/button";
import useAuth from "../../hooks/useAuth";
import AuthContext from "../../context/auth-context";
import { useNavigate } from "react-router";

export const SignInScreen = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        try{
            const data = {
                email,
                password
            }
            const response = await fetch("http://localhost:8080/api/v1/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(data)
            });

            if(!response.ok){
                setError("Erro ao fazer sign-in")
                console.log(await response.json())
            }

            const result = await response.json();
            console.log("Aqui" + String(result))

            const userResponse = await fetch("http://localhost:8080/api/v1/auth/me", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
            });

            const userData = await userResponse.json();

            setAuth(userData.user);
            console.log("passou")
            localStorage.setItem("user", JSON.stringify(userData.user));
            navigate("/", { replace: true})
        }catch(error){

        }
    }
    return(
        <div
            className="min-h-screen flex items-center justify-center bg-gray-50"
        >
            <form
            onSubmit={handleSubmit}
            className="
                p-8
                flex
                flex-col
                justify-center
                min-h-112
                rounded-xl
                gap-4
                max-w-126
                bg-white
                shadow-2xl
            "
            >

                <img src={""} />
                <h1

                    className="text-lg"
                >
                    {"Bom te ver de novo"}
                </h1>
                <h3
                    className="text-xs font-extralight mb-6"
                >
                    {"Insira os seus dados abaixo para entrar na sua conta"}
                </h3>
                <InputField
                    label={"Seu Email"}
                    placeholder="john-doe@example.com"
                    handleChange={handleEmailChange}
                />
                <InputField
                    label={"Sua Password"}
                    placeholder="******"
                    handleChange={handlePasswordChange}
                />
                <p className="text-xs mb-4">Não possui conta? <a className="text-blue-600 cursor-pointer" href="/sign-up">inscreva-se</a></p>
                <Button
                    title="Inscrever-se"
                    type="submit"
                />
            </form>
        </div>
    )
}