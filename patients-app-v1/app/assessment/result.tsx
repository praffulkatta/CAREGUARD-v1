import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ResultScreen() {
  const params = useLocalSearchParams();

  const result = JSON.parse(params.result as string);

  const risk = result.risk.riskLevel;

  const riskColor =
    risk === "critical"
      ? "red"
      : risk === "high"
      ? "orange"
      : "green";

  return (
    <View style={{ flex:1, padding:20 }}>
      <Text style={{ fontSize:24, fontWeight:"bold" }}>
        AI Assessment Result
      </Text>

      {/* Risk Badge */}
      <View
        style={{
          marginTop:20,
          backgroundColor:riskColor,
          padding:10,
          borderRadius:8
        }}
      >
        <Text style={{ color:"white", fontWeight:"bold" }}>
          Risk Level: {risk.toUpperCase()}
        </Text>
      </View>

      {/* Diagnosis */}
      <Text style={{ marginTop:20, fontSize:18, fontWeight:"bold" }}>
        Top Diagnosis
      </Text>

      <Text style={{ marginTop:8 }}>
        {result.diagnoses[0]?.condition}
      </Text>

      {/* Insights */}
      <Text style={{ marginTop:20, fontSize:18, fontWeight:"bold" }}>
        AI Insight
      </Text>

      <Text style={{ marginTop:8 }}>
        {result.insights.summary}
      </Text>

      <Text style={{ marginTop:8, color:"#555" }}>
        {result.insights.nextAction}
      </Text>
    </View>
  );
}
