import { View, Text } from "react-native";

export default function AlertsScreen() {
  return (
    <View style={{ flex:1, padding:20 }}>
      <Text style={{ fontSize:24, fontWeight:"bold" }}>
        Health Alerts
      </Text>

      <View
        style={{
          marginTop:20,
          backgroundColor:"#ef4444",
          padding:15,
          borderRadius:10
        }}
      >
        <Text style={{ color:"white", fontWeight:"bold" }}>
          ⚠ Possible Cardiac Risk Detected
        </Text>

        <Text style={{ color:"white", marginTop:6 }}>
          Seek medical attention if symptoms continue.
        </Text>
      </View>
    </View>
  );
}
