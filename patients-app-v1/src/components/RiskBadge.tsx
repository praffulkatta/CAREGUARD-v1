import { View, Text } from "react-native";

interface RiskBadgeProps {
  level: "low" | "medium" | "high" | "critical";
}

export default function RiskBadge({ level }: RiskBadgeProps) {
  let color = "#22c55e"; // green

  if (level === "medium") color = "#f59e0b";
  if (level === "high") color = "#f97316";
  if (level === "critical") color = "#ef4444";

  return (
    <View
      style={{
        backgroundColor: color,
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
        alignSelf: "flex-start",
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>
        {level.toUpperCase()} RISK
      </Text>
    </View>
  );
}
