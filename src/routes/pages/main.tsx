import { useState } from "react"
import { TaskCard } from "../../components/task-card";
import { CreateForm } from "../../components/create-task-form";

type TaskType = {
    id: string,
    title: string,
    description: string,
    category: any
}

export const MainScreen = () => {
    
    const [tasks, setTasks] = useState<TaskType[]>([]);

    const fetchTasks = async() => {

        const response = await fetch("http://localhost:8080/api/v1/tasks/list/mine", {
            credentials: "include"
        });

        const tasks = await response.json();

        setTasks(tasks.data);
    }

    fetchTasks();
    return(
        <div>

            {tasks.map(task => (
                <TaskCard 
                    category={task.category}
                    description={task.description}
                    title={task.title}
                    key={task.id}
                />
            ))}

            <button>
                Adicionar Tarefa
            </button>

            <CreateForm/>
        </div>
    )
}