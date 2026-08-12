import { useState } from "react"
import { InputField } from "./input"
import { Button } from "./button";
import { useNavigate } from "react-router";

type FormTypes = {
    cancelar: React.MouseEventHandler<HTMLButtonElement>
}

export const CreateForm = ({ cancelar }: FormTypes) => {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }

    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            title,
            description,
            category
        }

        const response = await fetch("http://localhost:8080/api/v1/tasks/create",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        navigate("/")
    }

    return(
        <form
            className="max-w-96 p-6 flex rounded-xl flex-col gap-4 shadow-2xl"
            onSubmit={handleSubmit}
        >
            <InputField 
                label="Titulo" 
                placeholder="Lavar a louça" 
                value={title} 
                handleChange={handleTitleChange} 
            /> 
            <InputField 
                label="Descrição" 
                placeholder="Fale um pouco mais sobre a tarefa" 
                value={description} 
                handleChange={handleDescriptionChange} 
            /> 
            <InputField 
                label="Categoria" 
                placeholder="Fale um pouco mais sobre a tarefa" 
                value={category} 
                handleChange={handleCategoryChange} 
            />
            <div className="w-full flex gap-6 mt-4">
                <Button onClick={cancelar} title="Cancelar"/>
                <Button type="submit" title="Adicionar"/>
            </div>
        </form>
    )
}