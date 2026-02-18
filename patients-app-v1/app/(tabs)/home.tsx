import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>CareGuard AI</Text>

      <Text style={{ marginTop: 10, color: "#666", textAlign: "center" }}>
        AI-powered symptom analysis & risk detection
      </Text>

      <Pressable
        onPress={() => router.push("/assessment")}
        style={{
          marginTop: 30,
          backgroundColor: "#2563eb",
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Start Assessment
        </Text>
      </Pressable>
    </View>
  );
}
