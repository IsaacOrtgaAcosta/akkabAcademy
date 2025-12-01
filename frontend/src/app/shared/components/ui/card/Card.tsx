import styles from "./Card.module.css";



interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Card: React.FC<CardProps> = ({
className,
children
}) => {

    return (
        <div
        className={`${styles.base} ${className ?? ""}`}
        >
            {children}
        </div>
    )
}