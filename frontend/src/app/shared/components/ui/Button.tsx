import styles from "./Button.module.css";

// Es correcto poner el tipo en el mismo archivo? No habría pasar el tipo desde el archivo types/common.ts?
type ButtonVariant = "primary" | "success" | "danger";

// La inteface ButtonProps define las variantes que puede recibir el componente (disabled, type, onclick, etc.)
//Además, añado la prop adicional de variant, para pasarle la propiedad de styles
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...rest
}) => {
  const variantClass = styles[variant];

  return(
    <button 
      className={`${styles.base} ${variantClass} ${className ?? ""}`}
      {...rest}
      >
        {children}
      </button>
  );
};