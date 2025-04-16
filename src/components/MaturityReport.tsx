
import React from "react";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SegmentScore } from "@/utils/calculateMaturity";
import { generateSegmentRecommendations, generateGeneralDiagnosis, getTopRecommendations } from "@/utils/generateRecommendations";
import MaturityChart from "./MaturityChart";
import { ArrowLeft, FileDown, FilePlus } from "lucide-react";

type MaturityReportProps = {
  companyName: string;
  segmentScores: SegmentScore[];
  onReset: () => void;
};

const MaturityReport: React.FC<MaturityReportProps> = ({
  companyName,
  segmentScores,
  onReset
}) => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "dd 'de' MMMM 'de' yyyy", { locale: pt });
  
  const overallAverage = segmentScores.reduce((sum, s) => sum + s.average, 0) / segmentScores.length;
  const overallLevel = segmentScores.length > 0 ? getMaturityLevelText(overallAverage) : "Não avaliado";
  
  const diagnosis = generateGeneralDiagnosis(segmentScores);
  const topRecommendations = getTopRecommendations(segmentScores);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" size="sm" onClick={onReset}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Nova Avaliação
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <FilePlus className="h-4 w-4 mr-2" />
            Salvar
          </Button>
          <Button variant="outline" size="sm">
            <FileDown className="h-4 w-4 mr-2" />
            Exportar PDF
          </Button>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader className="bg-primary text-primary-foreground">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Relatório de Maturidade LGPD</h1>
            <div className="text-sm opacity-80">{formattedDate}</div>
          </div>
          <p className="text-xl mt-2">{companyName}</p>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 border rounded-lg">
              <div className="text-sm text-muted-foreground">Nível Geral de Maturidade</div>
              <div className="text-3xl font-bold mt-1">{overallLevel}</div>
              <div className="text-xl mt-1">{overallAverage.toFixed(1)} / 5.0</div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-sm text-muted-foreground">Segmentos Avaliados</div>
              <div className="text-3xl font-bold mt-1">{segmentScores.length}</div>
              <div className="text-xl mt-1">
                {segmentScores.filter(s => s.average >= 3.1).length} em conformidade
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <MaturityChart segmentScores={segmentScores} />

      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-xl font-bold">Resultados por Segmento</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {segmentScores.map((score) => (
              <div 
                key={score.segmentId} 
                className="p-4 border rounded-lg flex flex-col"
                style={{ borderLeftWidth: "4px", borderLeftColor: `var(--${score.color})` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{score.icon}</span>
                  <span className="font-medium">{score.title}</span>
                </div>
                <div className="text-3xl font-bold mt-1">{score.average.toFixed(1)}</div>
                <div className="text-sm mt-1" style={{ color: getMaturityLevelColor(score.maturityLevel) }}>
                  {score.maturityLevel}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-xl font-bold">Diagnóstico</h2>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-6">{diagnosis}</p>
          
          <h3 className="font-semibold text-lg mb-3">Principais Recomendações</h3>
          <div className="space-y-3">
            {topRecommendations.map((rec, index) => (
              <Alert key={index} variant={getPriorityVariant(rec.priority)}>
                <AlertTitle className="flex items-center">
                  <span className="mr-2">
                    {rec.priority === "alta" ? "🔴" : rec.priority === "média" ? "🟠" : "🟡"}
                  </span>
                  {rec.priority === "alta" ? "Prioridade Alta" : rec.priority === "média" ? "Prioridade Média" : "Prioridade Baixa"}
                </AlertTitle>
                <AlertDescription>
                  {rec.text}
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-sm text-gray-500 mb-8">
        <p>© {new Date().getFullYear()} - Relatório de Maturidade LGPD</p>
        <p>Gerado em {formattedDate}</p>
      </div>
    </div>
  );
};

// Helper functions
const getMaturityLevelText = (score: number): string => {
  if (score >= 4.6) return "Ideal";
  if (score >= 4.1) return "Avançado";
  if (score >= 3.1) return "Intermediário";
  if (score >= 2.1) return "Básico";
  return "Iniciante";
};

const getMaturityLevelColor = (level: string): string => {
  switch (level) {
    case "Ideal": return "#22c55e"; // Green
    case "Avançado": return "#84cc16"; // Lime
    case "Intermediário": return "#eab308"; // Yellow
    case "Básico": return "#f97316"; // Orange
    case "Iniciante": return "#ef4444"; // Red
    default: return "#94a3b8"; // Slate
  }
};

const getPriorityVariant = (priority: string): "default" | "destructive" => {
  return priority === "alta" ? "destructive" : "default";
};

export default MaturityReport;
