import { useState } from "react"
import { InputField } from "./input"
import { Button } from "./button";

export const CreateForm = () => {

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

    return(
        <form
            className="max-w-96 p-6 flex flex-col gap-4"
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
                <Button title="Cancelar"/>
                <Button type="submit" title="Salvar"/>
            </div>
        </form>
    )
}