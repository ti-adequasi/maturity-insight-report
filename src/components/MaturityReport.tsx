
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
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

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
  
  const handleExportPDF = async () => {
    try {
      const element = document.getElementById('report-content');
      if (!element) return;
      
      // Add temporary styles for PDF capture
      const originalStyles = element.getAttribute('style');
      element.style.overflow = 'visible';
      element.style.height = 'auto';
      element.style.display = 'block';
      
      // Scroll to top before capturing
      window.scrollTo(0, 0);
      
      // Add delay to ensure all content is rendered
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const canvas = await html2canvas(element, {
        scale: 2,
        scrollY: -window.scrollY,
        useCORS: true,
        allowTaint: true,
        logging: true,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
        onclone: (clonedDoc) => {
          // Ensure all elements are visible in the cloned document
          const reportContent = clonedDoc.getElementById('report-content');
          if (reportContent) {
            reportContent.style.overflow = 'visible';
            reportContent.style.height = 'auto';
            reportContent.style.display = 'block';
          }
        }
      });
      
      // Restore original styles
      if (originalStyles) {
        element.setAttribute('style', originalStyles);
      } else {
        element.removeAttribute('style');
      }
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth() - 20; // Margem de 10mm
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      // Calcular quantas páginas serão necessárias
      const pageHeight = pdf.internal.pageSize.getHeight() - 20;
      let heightLeft = pdfHeight;
      let position = 10;
      
      // Adicionar primeira página
      pdf.addImage(imgData, 'PNG', 10, position, pdfWidth, pdfHeight, undefined, 'FAST');
      heightLeft -= pageHeight;
      
      // Adicionar páginas adicionais se necessário
      while (heightLeft >= 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, pdfWidth, pdfHeight, undefined, 'FAST');
        heightLeft -= pageHeight;
      }
      
      pdf.save(`Relatório LGPD - ${companyName}.pdf`);
    } catch (error) {
      console.error('Erro ao exportar PDF:', error);
    }
  };

  return (
    <div id="report-content" className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" size="sm" onClick={onReset} className="border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3] hover:text-white">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Nova Avaliação
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3] hover:text-white">
            <FilePlus className="h-4 w-4 mr-2" />
            Salvar
          </Button>
          <Button variant="outline" size="sm" onClick={handleExportPDF} className="border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3] hover:text-white">
            <FileDown className="h-4 w-4 mr-2" />
            Exportar PDF
          </Button>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader className="bg-[#0056b3] text-white">
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
              <Alert key={index} variant={getPriorityVariant(rec.priority)} className="border-[#0056b3]">
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

      <div className="text-center text-sm text-[#0056b3] mb-8">
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
    case "Ideal": return "#0056b3"; // Azul Adequa
    case "Avançado": return "#0077cc"; // Azul mais claro
    case "Intermediário": return "#0099ff"; // Azul claro
    case "Básico": return "#66c2ff"; // Azul muito claro
    case "Iniciante": return "#b3e0ff"; // Azul pastel
    default: return "#94a3b8"; // Slate
  }
};

const getPriorityVariant = (priority: string): "default" | "destructive" => {
  return priority === "alta" ? "destructive" : "default";
};

export default MaturityReport;
