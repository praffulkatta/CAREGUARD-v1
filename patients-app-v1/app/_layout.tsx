import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Tabs */}
      <Stack.Screen name="(tabs)" />

      {/* Assessment flow */}
      <Stack.Screen name="assessment/index" />
      <Stack.Screen name="assessment/loading" />
      <Stack.Screen name="assessment/result" />

      {/* Alerts */}
      <Stack.Screen name="alerts/index" />
    </Stack>
  );
}