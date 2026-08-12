import { useState } from "react"
import { TaskCard } from "../../components/task-card";
import { CreateForm } from "../../components/create-task-form";
import { Button } from "../../components/button";
import { Header } from "../../components/header";

type TaskType = {
    id: string,
    title: string,
    description: string,
    categoryName: string
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
        <div className="flex flex-col h-screen ">

            <Header />
            {isOpen ? <div className="flex flex-1 min-h-screen items-center justify-center"><CreateForm cancelar={toggleForm}/></div> : (
                <>
                    <div className="flex flex-1 gap-4 p-8">
                        {tasks.map(task => (
                        <TaskCard 
                            categoryName={task.categoryName}
                            description={task.description}
                            title={task.title}
                            key={task.id}
                        />))}
                    </div>
                    <div className="fixed z-1 inset-y-140 md:inset-x-305">
                        <Button
                        onClick={toggleForm}
                        title="Adicionar Tarefa"
                        />
                    </div>
                </>
            )}
        </div>
    )
}