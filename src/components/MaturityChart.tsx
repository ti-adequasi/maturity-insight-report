
import React from "react";
import { 
  ComposedChart, 
  Bar, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { SegmentScore } from "@/utils/calculateMaturity";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type MaturityChartProps = {
  segmentScores: SegmentScore[];
};

const MaturityChart: React.FC<MaturityChartProps> = ({ segmentScores }) => {
  const chartData = segmentScores.map((score) => ({
    name: score.title.split(" ")[0], // Use just the first word for display
    pontuação: score.average,
    fullName: score.title,
    icon: score.icon,
    color: `var(--${score.color})`
  }));

  // Add threshold line data points
  const thresholdData = [
    { name: "Iniciante", threshold: 2.0 },
    { name: "Básico", threshold: 3.0 },
    { name: "Intermediário", threshold: 4.0 },
    { name: "Avançado", threshold: 4.5 },
    { name: "Ideal", threshold: 5.0 }
  ];

  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-xl font-bold">Níveis de Maturidade por Segmento</h2>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                angle={-15}
                textAnchor="middle"
              />
              <YAxis 
                domain={[0, 5]} 
                ticks={[0, 1, 2, 3, 4, 5]} 
              />
              <Tooltip
                formatter={(value, name, props) => {
                  if (name === "pontuação") {
                    return [`${value} (${getMaturityText(Number(value))})`, props.payload.fullName];
                  }
                  return [value, name];
                }}
                labelFormatter={(label) => `${chartData.find(item => item.name === label)?.icon} ${chartData.find(item => item.name === label)?.fullName}`}
              />
              <Bar 
                dataKey="pontuação" 
                fill="#8884d8" 
                barSize={40}
                isAnimationActive={true}
                animationDuration={1000}
                animationEasing="ease-out"
                stroke={(data, index) => chartData[index].color}
                fill={(data, index) => chartData[index].color}
              />
              {thresholdData.map((threshold, index) => (
                <Line 
                  key={threshold.name}
                  type="monotone" 
                  dataKey={() => threshold.threshold} 
                  stroke={getThresholdColor(threshold.name)} 
                  strokeWidth={1} 
                  strokeDasharray="5 5"
                  dot={false}
                  activeDot={false}
                />
              ))}
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center flex-wrap mt-4 gap-2">
          {thresholdData.map((level) => (
            <div key={level.name} className="flex items-center text-xs">
              <span 
                className="inline-block w-3 h-3 mr-1 rounded-full"
                style={{ backgroundColor: getThresholdColor(level.name) }}
              ></span>
              {level.name} ({level.threshold})
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Helper function to get maturity level text based on score
const getMaturityText = (score: number): string => {
  if (score >= 4.6) return "Ideal";
  if (score >= 4.1) return "Avançado";
  if (score >= 3.1) return "Intermediário";
  if (score >= 2.1) return "Básico";
  return "Iniciante";
};

// Helper function to get threshold colors
const getThresholdColor = (level: string): string => {
  switch (level) {
    case "Iniciante": return "#ef4444"; // Red
    case "Básico": return "#f97316"; // Orange
    case "Intermediário": return "#eab308"; // Yellow
    case "Avançado": return "#84cc16"; // Lime
    case "Ideal": return "#22c55e"; // Green
    default: return "#94a3b8"; // Slate
  }
};

export default MaturityChart;
