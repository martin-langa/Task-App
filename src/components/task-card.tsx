import { Button } from "./button"
import { CategoryPill } from "./category-pill"

type TaskProps = {
    title: string,
    category: string,
    description: string
}

export const TaskCard = ({ title, category, description}: TaskProps) => {


    return(
        <div
            className="
                border
                flex
                flex-col
                px-4
                max-w-96
                justify-center
                py-6
                rounded-lg
            "
        >
            <div
                className="flex flex-row justify-between mb-4 text-lg"
            >
                <h3>{title}</h3>
                <CategoryPill category={category} />
            </div>
            <p className="text-[14px] font-extralight max-w-66">
                {description}
            </p>
            <div 
                className="h-[0.1px] bg-black mx-2 my-6"
            />
            <Button title="Edit Task" />
        </div>
    )
}