// Funções auxiliares
const getMaturityLevelText = (score) => {
  if (score >= 4.6) return "Ideal";
  if (score >= 4.1) return "Avançado";
  if (score >= 3.1) return "Intermediário";
  if (score >= 2.1) return "Básico";
  return "Iniciante";
};

const getMaturityLevelColor = (level) => {
  switch (level) {
    case "Ideal": return "#22c55e";
    case "Avançado": return "#84cc16";
    case "Intermediário": return "#eab308";
    case "Básico": return "#f97316";
    case "Iniciante": return "#ef4444";
    default: return "#94a3b8";
  }
};

// Dados de exemplo (serão substituídos por dados reais)
const segmentScores = [
  {
    segmentId: 'seguranca_da_informacao',
    title: 'Segurança da Informação',
    icon: '🔐',
    color: 'segments-security',
    average: 3.8,
    maturityLevel: 'Intermediário'
  },
  {
    segmentId: 'ciberseguranca',
    title: 'Cibersegurança',
    icon: '🛡️',
    color: 'segments-cyber',
    average: 4.2,
    maturityLevel: 'Avançado'
  }
];

// Função principal para renderizar o relatório
function renderReport() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('pt-BR', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
  
  const overallAverage = segmentScores.reduce((sum, s) => sum + s.average, 0) / segmentScores.length;
  const overallLevel = getMaturityLevelText(overallAverage);
  
  // Renderização do HTML
  document.getElementById('root').innerHTML = `
    <div class="max-w-4xl mx-auto">
      <div class="mb-8 p-6 bg-blue-600 text-white rounded-lg">
        <div class="flex justify-between">
          <h1 class="text-2xl font-bold">Relatório de Maturidade LGPD</h1>
          <div class="text-sm opacity-80">${formattedDate}</div>
        </div>
        <p class="text-xl mt-2">Nome da Empresa</p>
      </div>
      
      <!-- Conteúdo do relatório será gerado aqui -->
    </div>
  `;
}

// Inicialização
document.addEventListener('DOMContentLoaded', renderReport);