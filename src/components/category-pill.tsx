
type Props = {
    category: string
}
 
export const CategoryPill = ({ category }: Props ) => {


    return(
        <div
            className="
                bg-emerald-600
                text-white
                font-bold
                p-1
                px-2
                max-h-6
                text-center
                rounded-lg
            "
        >
            <p
                className="text-xs"
            >{category}</p>
        </div>
    )
}