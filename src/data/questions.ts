
export type Question = {
  id: string;
  text: string;
};

export type Segment = {
  id: string;
  title: string;
  icon: string;
  color: string;
  questions: Question[];
};

export type MaturityLevel = 'Iniciante' | 'Básico' | 'Intermediário' | 'Avançado' | 'Ideal';

export const segments: Segment[] = [
  {
    id: 'seguranca_da_informacao',
    title: 'Segurança da Informação',
    icon: '🔐',
    color: 'segments-security',
    questions: [
      { id: 'si_1', text: 'A empresa possui uma política de segurança da informação documentada e aprovada pela alta direção?' },
      { id: 'si_2', text: 'Existe um inventário de ativos de informação atualizado e classificado conforme criticidade?' },
      { id: 'si_3', text: 'São realizadas análises de riscos periódicas para identificação de vulnerabilidades e ameaças?' },
      { id: 'si_4', text: 'A empresa possui controles de acesso lógico implementados (senhas fortes, autenticação em múltiplos fatores)?' },
      { id: 'si_5', text: 'São realizados backups regulares dos dados críticos com testes de restauração?' },
      { id: 'si_6', text: 'Existe um plano de resposta a incidentes de segurança documentado e testado?' },
      { id: 'si_7', text: 'São conduzidos treinamentos de conscientização em segurança da informação para todos os funcionários?' },
      { id: 'si_8', text: 'A empresa implementa criptografia para proteção de dados sensíveis em repouso e em trânsito?' },
      { id: 'si_9', text: 'Existe um processo formal para gestão de acessos (concessão, revisão e revogação)?' },
      { id: 'si_10', text: 'A empresa realiza testes de segurança (penetração, vulnerabilidade) periodicamente?' }
    ]
  },
  {
    id: 'ciberseguranca',
    title: 'Cibersegurança',
    icon: '🛡️',
    color: 'segments-cyber',
    questions: [
      { id: 'cs_1', text: 'A empresa possui firewalls e sistemas de detecção/prevenção de intrusão atualizados?' },
      { id: 'cs_2', text: 'São implementadas ferramentas de proteção contra malware em todos os sistemas?' },
      { id: 'cs_3', text: 'Existe um processo formal de gestão de patches e atualizações de segurança?' },
      { id: 'cs_4', text: 'A empresa realiza monitoramento contínuo da rede e dos sistemas críticos?' },
      { id: 'cs_5', text: 'São realizados testes de phishing simulados para avaliar a conscientização dos funcionários?' },
      { id: 'cs_6', text: 'A empresa possui controles específicos para proteção contra ransomware?' },
      { id: 'cs_7', text: 'Existe segmentação adequada da rede para isolamento de sistemas críticos?' },
      { id: 'cs_8', text: 'A empresa possui um CSIRT (Computer Security Incident Response Team) ou processo equivalente?' }
    ]
  },
  {
    id: 'ti',
    title: 'Tecnologia da Informação',
    icon: '🖥️',
    color: 'segments-it',
    questions: [
      { id: 'ti_1', text: 'A empresa possui um inventário atualizado de hardware e software?' },
      { id: 'ti_2', text: 'Existe uma política de desenvolvimento seguro para aplicações internas?' },
      { id: 'ti_3', text: 'São realizados testes de qualidade e segurança antes da implantação de sistemas?' },
      { id: 'ti_4', text: 'A empresa possui ambientes segregados (desenvolvimento, teste, produção)?' },
      { id: 'ti_5', text: 'Existe documentação técnica atualizada dos sistemas e infraestrutura?' },
      { id: 'ti_6', text: 'A empresa possui processos formais de gestão de mudanças?' },
      { id: 'ti_7', text: 'São mantidos registros (logs) de atividades nos sistemas críticos?' },
      { id: 'ti_8', text: 'Existe redundância para sistemas e infraestrutura críticos?' },
      { id: 'ti_9', text: 'A empresa possui controles específicos para ambientes em nuvem?' }
    ]
  },
  {
    id: 'juridico',
    title: 'Jurídico',
    icon: '⚖️',
    color: 'segments-legal',
    questions: [
      { id: 'ju_1', text: 'A empresa possui políticas e avisos de privacidade atualizados e em conformidade com a LGPD?' },
      { id: 'ju_2', text: 'Os contratos com fornecedores e parceiros possuem cláusulas específicas sobre proteção de dados?' },
      { id: 'ju_3', text: 'Existe um processo formal para coleta e gestão de consentimento dos titulares?' },
      { id: 'ju_4', text: 'A empresa possui mecanismos para atender às solicitações dos titulares de dados?' },
      { id: 'ju_5', text: 'São realizados Relatórios de Impacto à Proteção de Dados Pessoais (RIPD)?' },
      { id: 'ju_6', text: 'A empresa possui procedimentos documentados para notificação de violações de dados?' },
      { id: 'ju_7', text: 'Existe um mapeamento dos fluxos de dados pessoais na organização?' },
      { id: 'ju_8', text: 'São realizadas avaliações periódicas de conformidade com a legislação de proteção de dados?' }
    ]
  },
  {
    id: 'governanca',
    title: 'Governança',
    icon: '🏛️',
    color: 'segments-governance',
    questions: [
      { id: 'go_1', text: 'A empresa possui um Encarregado de Proteção de Dados (DPO) designado?' },
      { id: 'go_2', text: 'Existe um comitê ou grupo de trabalho dedicado à privacidade e proteção de dados?' },
      { id: 'go_3', text: 'A alta direção demonstra comprometimento com a proteção de dados e privacidade?' },
      { id: 'go_4', text: 'São realizadas auditorias internas periódicas sobre proteção de dados?' },
      { id: 'go_5', text: 'A empresa possui métricas e indicadores de desempenho para proteção de dados?' },
      { id: 'go_6', text: 'Existe um programa de conscientização sobre privacidade e proteção de dados?' },
      { id: 'go_7', text: 'A empresa possui um programa de gestão de riscos que contempla riscos à privacidade?' },
      { id: 'go_8', text: 'São definidos papéis e responsabilidades claros quanto à proteção de dados?' },
      { id: 'go_9', text: 'A empresa possui planos de adequação e melhoria contínua para LGPD?' },
      { id: 'go_10', text: 'São alocados recursos adequados (humanos, tecnológicos, financeiros) para a proteção de dados?' }
    ]
  }
];
