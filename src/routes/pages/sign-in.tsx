import { useState } from "react"
import { InputField } from "../../components/input"
import { Button } from "../../components/button";

export const SignInScreen = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
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
                body: JSON.stringify(data)
            });

            if(!response.ok){
                setError("Erro ao fazer sign-in")
                console.log(await response.json())
            }

            const result = await response.json();
            console.log("Okay: ", result)
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
                border
                rounded-xl
                gap-4
                max-w-126
                bg-white
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