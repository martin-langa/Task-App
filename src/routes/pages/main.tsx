import { useState } from "react"
import { TaskCard } from "../../components/task-card";
import { CreateForm } from "../../components/create-task-form";
import { Button } from "../../components/button";

type TaskType = {
    id: string,
    title: string,
    description: string,
    categoryId: number
}



export const MainScreen = () => {
    
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [isOpen, setIsOpen] = useState<Boolean>(false);
    const fetchTasks = async() => {

        const response = await fetch("http://localhost:8080/api/v1/tasks/list/mine", {
            credentials: "include"
        });

        const tasks = await response.json();

        setTasks(tasks.data);
    }

    const toggleForm = () => {
        setIsOpen(!isOpen);
    }

    fetchTasks();
    return(
        <div>

            {isOpen ? <CreateForm cancelar={toggleForm}/> : (
                <>
                    {tasks.map(task => (
                    <TaskCard 
                        categoryId={task.categoryId}
                        description={task.description}
                        title={task.title}
                        key={task.id}
                    />))}
                    <Button
                        onClick={toggleForm}
                        title="Adicionar Tarefa"
                    />
                </>
            )}
        </div>
    )
}