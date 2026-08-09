import { useState, type ChangeEvent } from "react"
import { InputField } from "../../components/input"
import { Button } from "../../components/button";

export const SignUpScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    return(
        <div
            className="min-h-screen flex items-center justify-center"
        >
            <div
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
            "
            >

                <img src={""} />
                <h1

                    className="text-lg"
                >
                    {"Bem vindo ao Task App"}
                </h1>
                <h3
                    className="text-xs font-extralight mb-6"
                >
                    {"Insira os seus dados abaixo para criar a sua conta"}
                </h3>
                <InputField
                    label={"Seu Email"}
                    placeholder="martin-example@mail.com"
                    handleChange={handleEmailChange}
                />
                <InputField
                    label={"Sua Password"}
                    placeholder="******"
                    handleChange={handlePasswordChange}
                />
                <p className="text-xs mb-4">Não possui conta? <a className="text-blue-600 cursor-pointer">inscreva-se</a></p>
                <Button
                    title="Inscrever-se"
                />
            </div>
        </div>
    )
}