
type Props = {
    category: string
}
 
export const CategoryPill = ({ category }: Props ) => {


    return(
        <div
            className="
                bg-gray-200
                text-xs
                px-2
                py-0.2
                flex
                max-h-p-1
            "
        >
            <p>{category}</p>
        </div>
    )
}