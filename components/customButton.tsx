import clsx from "clsx";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "outline";

type Props = {
  onPress: () => void;
  variant?: Variant;
  className?: string;
  textClassName?: string;
  children?: React.ReactNode;
} & TouchableOpacityProps;

export default function CustomButton({
  onPress,
  variant = "primary",
  className = "",
  textClassName = "",
  children,
  ...props
}: Props) {
  const baseButton = "py-3 px-4 rounded-lg items-center";
  const baseText = "text-base font-semibold";

  const variantButton = {
    primary: "bg-blue-600",
    secondary: "bg-gray-700",
    outline: "border border-gray-500 bg-transparent",
  };

  const variantText = {
    primary: "text-white",
    secondary: "text-white",
    outline: "text-gray-500",
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={twMerge(clsx(baseButton, variantButton[variant]), className)}
        {...props}
    >
      <Text className={twMerge(clsx(baseText, variantText[variant]), textClassName)}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
