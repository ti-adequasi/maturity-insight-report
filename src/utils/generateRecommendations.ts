
import { SegmentScore } from "./calculateMaturity";

type Recommendation = {
  text: string;
  priority: "alta" | "média" | "baixa";
};

export const generateSegmentRecommendations = (score: SegmentScore): Recommendation[] => {
  const recommendations: Recommendation[] = [];
  
  switch (score.segmentId) {
    case "seguranca_da_informacao":
      if (score.average < 3.0) {
        recommendations.push({
          text: "Desenvolver e implementar uma política formal de segurança da informação.",
          priority: "alta"
        });
        recommendations.push({
          text: "Realizar um inventário de ativos de informação e classificá-los quanto à criticidade.",
          priority: "alta"
        });
      }
      if (score.average < 4.0) {
        recommendations.push({
          text: "Implementar controles de acesso mais robustos, incluindo autenticação de múltiplos fatores.",
          priority: "média"
        });
        recommendations.push({
          text: "Estabelecer um programa regular de testes de segurança (penetração, vulnerabilidade).",
          priority: "média"
        });
      }
      break;
      
    case "ciberseguranca":
      if (score.average < 3.0) {
        recommendations.push({
          text: "Implementar ferramentas de segurança básicas: firewall, antivírus e sistemas de detecção de intrusão.",
          priority: "alta"
        });
        recommendations.push({
          text: "Estabelecer um processo de gestão de patches e atualizações de segurança.",
          priority: "alta"
        });
      }
      if (score.average < 4.0) {
        recommendations.push({
          text: "Implementar segmentação de rede para isolamento de sistemas críticos.",
          priority: "média"
        });
        recommendations.push({
          text: "Estabelecer um programa de conscientização sobre phishing e ameaças cibernéticas.",
          priority: "média"
        });
      }
      break;
      
    case "ti":
      if (score.average < 3.0) {
        recommendations.push({
          text: "Criar e manter um inventário atualizado de hardware e software.",
          priority: "alta"
        });
        recommendations.push({
          text: "Implementar ambientes segregados (desenvolvimento, teste, produção).",
          priority: "alta"
        });
      }
      if (score.average < 4.0) {
        recommendations.push({
          text: "Documentar adequadamente a infraestrutura e sistemas da organização.",
          priority: "média"
        });
        recommendations.push({
          text: "Estabelecer um processo formal de gestão de mudanças.",
          priority: "média"
        });
      }
      break;
      
    case "juridico":
      if (score.average < 3.0) {
        recommendations.push({
          text: "Atualizar políticas e avisos de privacidade em conformidade com a LGPD.",
          priority: "alta"
        });
        recommendations.push({
          text: "Revisar contratos com fornecedores e incluir cláusulas específicas sobre proteção de dados.",
          priority: "alta"
        });
      }
      if (score.average < 4.0) {
        recommendations.push({
          text: "Implementar um processo formal para coleta e gestão de consentimento dos titulares.",
          priority: "média"
        });
        recommendations.push({
          text: "Conduzir Relatórios de Impacto à Proteção de Dados Pessoais (RIPD) para processos críticos.",
          priority: "média"
        });
      }
      break;
      
    case "governanca":
      if (score.average < 3.0) {
        recommendations.push({
          text: "Designar um Encarregado de Proteção de Dados (DPO) conforme exigido pela LGPD.",
          priority: "alta"
        });
        recommendations.push({
          text: "Estabelecer um comitê dedicado à privacidade e proteção de dados.",
          priority: "alta"
        });
      }
      if (score.average < 4.0) {
        recommendations.push({
          text: "Implementar um programa de conscientização sobre privacidade e proteção de dados.",
          priority: "média"
        });
        recommendations.push({
          text: "Definir papéis e responsabilidades claros quanto à proteção de dados na organização.",
          priority: "média"
        });
      }
      break;
  }
  
  return recommendations;
};

export const generateGeneralDiagnosis = (scores: SegmentScore[]): string => {
  const lowMaturitySegments = scores.filter(s => s.average <= 3.0).map(s => s.title);
  const highMaturitySegments = scores.filter(s => s.average >= 4.0).map(s => s.title);
  
  let diagnosis = "";
  
  if (highMaturitySegments.length > 0) {
    diagnosis += `A empresa apresenta boa maturidade em ${highMaturitySegments.join(", ")}. `;
  }
  
  if (lowMaturitySegments.length > 0) {
    diagnosis += `Áreas que precisam de atenção prioritária: ${lowMaturitySegments.join(", ")}. `;
  }
  
  const overallAverage = scores.reduce((sum, s) => sum + s.average, 0) / scores.length;
  
  if (overallAverage < 2.5) {
    diagnosis += "Recomenda-se iniciar um programa estruturado de adequação à LGPD com apoio especializado.";
  } else if (overallAverage < 3.5) {
    diagnosis += "A empresa está no caminho certo, mas precisa formalizar e documentar melhor seus processos de proteção de dados.";
  } else if (overallAverage < 4.5) {
    diagnosis += "A empresa demonstra bom nível de maturidade, sendo recomendável focar em melhorias específicas e monitoramento contínuo.";
  } else {
    diagnosis += "A empresa demonstra excelente nível de maturidade em proteção de dados, devendo manter o programa de melhoria contínua.";
  }
  
  return diagnosis;
};

export const getTopRecommendations = (scores: SegmentScore[]): Recommendation[] => {
  const allRecommendations: Recommendation[] = [];
  
  scores.forEach(score => {
    if (score.average < 4.0) {
      const segmentRecs = generateSegmentRecommendations(score);
      allRecommendations.push(...segmentRecs);
    }
  });
  
  // Sort by priority (alta > média > baixa)
  const priorityOrder = { "alta": 0, "média": 1, "baixa": 2 };
  allRecommendations.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  
  // Return top 5 recommendations
  return allRecommendations.slice(0, 5);
};
