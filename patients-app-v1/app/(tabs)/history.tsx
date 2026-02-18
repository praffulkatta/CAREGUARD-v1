import { View, Text } from "react-native";

export default function HistoryScreen() {
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <Text style={{ fontSize:22, fontWeight:"bold" }}>
        Assessment History
      </Text>

      <Text style={{ marginTop:10, color:"#666" }}>
        Past assessments will appear here </Text>
    </View>
  );
}
