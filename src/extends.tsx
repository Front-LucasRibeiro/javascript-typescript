import { InputHTMLAttributes } from "react";
import "./styles.css";

// extendendo a tipagem nativa para o input
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
}

export function Input({ isLoading = false, ...rest }: Props) {
  return (
    <div className="input">
      <input type="text" {...rest} />
      {isLoading}
    </div>
  );
}
