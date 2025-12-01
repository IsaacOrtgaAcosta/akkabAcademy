import styles from "./Button.module.css";

type ButtonVariant = "primary" | "success" | "danger";
type SizeVariant = "xxs" | "xs" | "sm" | "md" | "l" | "xl" | "xxl";

// La inteface ButtonProps define las variantes que puede recibir el componente (disabled, type, onclick, etc.)
//Además, añado la prop adicional de variant, para pasarle la propiedad de styles
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: SizeVariant;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size="medium",
  className,
  children,
  ...rest
}) => {
  const variantClass = styles[variant];
  const variantSize = styles[size];

  return(
    <button 
      className={`${styles.base} ${variantClass} ${variantSize} ${className ?? ""}`}
      {...rest}
      >
        {children}
      </button>
  );
};