import { View, Text, ActivityIndicator } from "react-native";

export default function LoadingCard() {
  return (
    <View
      style={{
        padding: 20,
        borderRadius: 12,
        backgroundColor: "#f3f4f6",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color="#2563eb" />

      <Text style={{ marginTop: 12, fontWeight: "600", fontSize: 16 }}>
        AI analyzing symptoms...
      </Text>

      <Text style={{ marginTop: 6, color: "#666", textAlign: "center" }}>
        Running risk analysis and diagnosis engine
      </Text>
    </View>
  );
}
