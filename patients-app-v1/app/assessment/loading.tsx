import { View, Text, ActivityIndicator } from "react-native";

export default function LoadingScreen() {
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <ActivityIndicator size="large" color="#2563eb" />

      <Text style={{ marginTop:20, fontSize:18, fontWeight:"600" }}>
        AI analyzing symptoms...
      </Text>

      <Text style={{ marginTop:8, color:"#666" }}>
        Running risk analysis & diagnosis engine
      </Text>
    </View>
  );
}
