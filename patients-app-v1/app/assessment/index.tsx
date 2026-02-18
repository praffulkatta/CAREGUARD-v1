import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function AssessmentScreen() {
  const router = useRouter();

  const [symptom, setSymptom] = useState("");

  const runAssessment = async () => {
    // Move to loading screen first
    router.push("/assessment/loading");

    try {
      const res = await fetch(
        "http://192.168.1.3:5001/api/assessment/run/session-001",
        // http://192.168.1.3:5001/api/assessment/run/session-001
        { method: "POST" }
      );

      const data = await res.json();

      // Navigate to result with data
      router.replace({
        pathname: "/assessment/result",
        params: { result: JSON.stringify(data) },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex:1, padding:20 }}>
      <Text style={{ fontSize:24, fontWeight:"bold" }}>
        Symptom Input
      </Text>

      <TextInput
        placeholder="Enter symptom (e.g. chest pain)"
        value={symptom}
        onChangeText={setSymptom}
        style={{
          borderWidth:1,
          borderColor:"#ccc",
          borderRadius:10,
          padding:12,
          marginTop:20
        }}
      />

      <TouchableOpacity
        onPress={runAssessment}
        style={{
          marginTop:20,
          backgroundColor:"#2563eb",
          padding:14,
          borderRadius:10
        }}
      >
        <Text style={{ color:"white", textAlign:"center", fontWeight:"bold" }}>
          Run AI Assessment
        </Text>
      </TouchableOpacity>
    </View>
  );
}
