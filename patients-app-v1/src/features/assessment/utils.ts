export const getRiskColor = (level: string) => {
  switch (level) {
    case "critical":
      return "#ef4444";
    case "high":
      return "#f97316";
    case "medium":
      return "#f59e0b";
    default:
      return "#22c55e";
  }
};

export const formatProbability = (value: number) =>
  `${Math.round(value * 100)}%`;
