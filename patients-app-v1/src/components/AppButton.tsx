import { TouchableOpacity, Text } from "react-native";

interface AppButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
}

export default function AppButton({
  title,
  onPress,
  color = "#2563eb",
}: AppButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
