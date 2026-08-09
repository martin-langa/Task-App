
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string
}

export const Button = ({title, ...props}: Props) => {

    return(
        <button {...props}
            className="bg-black p-2 text-white rounded-lg"
        >
            {title}
        </button>
    )
}