
type Props = {
    category: string
}
 
export const CategoryPill = ({ category }: Props ) => {


    return(
        <div
            className="
                bg-gray-200
                text-xs
                py-1
                px-3
                rounded-lg
                font-medium
            "
        >
            <p>{category}</p>
        </div>
    )
}