
export type Question = {
  id: string;
  text: string;
  options?: string[]; // Optional array for specific answer options
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
      {
        id: 'si_1',
        text: 'A empresa possui políticas claras sobre proteção de dados?',
        options: [
          'Não temos nenhuma política.',
          'Temos algumas orientações informais.',
          'Existe uma política, mas poucos conhecem.',
          'Política escrita e comunicada, mas sem revisão.',
          'Política atualizada, documentada e aplicada com treinamentos.'
        ]
      },
      {
        id: 'si_2',
        text: 'Existe controle de acesso aos arquivos e sistemas da empresa?',
        options: [
          'Não há controle.',
          'Alguns documentos têm senha.',
          'Usamos logins, mas sem controle de acesso.',
          'Acesso com permissões por área/setor.',
          'Controle completo por usuário, com registros e auditoria.'
        ]
      },
      {
        id: 'si_3',
        text: 'Os funcionários recebem treinamento sobre como proteger os dados?',
        options: [
          'Nunca receberam.',
          'Apenas no início do trabalho.',
          'Já houve treinamento, mas sem frequência.',
          'Ocasionalmente fazemos treinamentos.',
          'Treinamentos frequentes e obrigatórios.'
        ]
      },
      {
        id: 'si_4',
        text: 'Existe um responsável formal pela segurança da informação?',
        options: [
          'Não.',
          'Alguém cuida informalmente.',
          'Pessoa da TI assume a função parcialmente.',
          'Responsável nomeado, mas sem dedicação exclusiva.',
          'Responsável dedicado, com autonomia e rotina definida.'
        ]
      },
      {
        id: 'si_5',
        text: 'Como é feito o descarte de documentos físicos e digitais?',
        options: [
          'Não há nenhum critério.',
          'Cada setor faz como acha melhor.',
          'Há orientação, mas não é seguida.',
          'Processo definido, mas sem controle.',
          'Processo padronizado, com segurança e rastreabilidade.'
        ]
      },
      {
        id: 'si_6',
        text: 'Os dados pessoais são protegidos por mecanismos técnicos (ex: criptografia)?',
        options: [
          'Não utilizamos nenhuma proteção técnica.',
          'Apenas alguns arquivos são protegidos.',
          'Usamos senhas básicas.',
          'Dados críticos têm proteção adequada.',
          'Dados pessoais são protegidos com múltiplas camadas (ex: criptografia + controle de acesso).'
        ]
      },
      {
        id: 'si_7',
        text: 'As informações sensíveis (ex: dados de clientes) têm controle de quem acessa?',
        options: [
          'Qualquer pessoa pode acessar.',
          'Alguns dados têm acesso restrito.',
          'Acesso controlado em algumas áreas.',
          'Acesso por setor com registro parcial.',
          'Acesso restrito por usuário com registro e autorização.'
        ]
      },
      {
        id: 'si_8',
        text: 'Há controle de onde os dados pessoais estão armazenados?',
        options: [
          'Não sabemos onde estão.',
          'Sabemos parcialmente.',
          'Sabemos, mas não temos organização.',
          'Documentado, mas desatualizado.',
          'Totalmente mapeado e controlado.'
        ]
      },
      {
        id: 'si_9',
        text: 'Em caso de incidente de segurança, existe um plano de ação?',
        options: [
          'Não sabemos o que fazer.',
          'Resolveríamos por tentativa e erro.',
          'Temos uma ideia geral.',
          'Plano documentado, mas sem testes.',
          'Plano testado, conhecido e revisado regularmente.'
        ]
      },
      {
        id: 'si_10',
        text: 'Com que frequência as políticas de segurança são revisadas?',
        options: [
          'Nunca foram revisadas.',
          'Apenas quando há problemas.',
          'Revisamos de forma eventual.',
          'Há calendário anual, mas sem revisão formal.',
          'Revisadas periodicamente com participação dos gestores.'
        ]
      }
    ]
  },
  {
    id: 'ciberseguranca',
    title: 'Cibersegurança',
    icon: '🛡️',
    color: 'segments-cyber',
    questions: [
      {
        id: 'cs_1',
        text: 'A empresa utiliza antivírus ou ferramentas de proteção contra ameaças?',
        options: [
          'Nenhuma proteção.',
          'Apenas antivírus gratuito.',
          'Antivírus pago em alguns dispositivos.',
          'Antivírus pago em todos os dispositivos.',
          'Antivírus com gestão centralizada e relatórios.'
        ]
      },
      {
        id: 'cs_2',
        text: 'Existe firewall configurado na rede da empresa?',
        options: [
          'Não usamos firewall.',
          'Apenas o firewall padrão do roteador.',
          'Firewall com regras básicas.',
          'Firewall com regras definidas e segmentação.',
          'Firewall com monitoramento e atualização frequente.'
        ]
      },
      {
        id: 'cs_3',
        text: 'A empresa realiza backups dos dados importantes?',
        options: [
          'Não fazemos backup.',
          'Backup manual e irregular.',
          'Backup automático, mas sem validação.',
          'Backup periódico com validação ocasional.',
          'Backup automático, testado e armazenado em local seguro.'
        ]
      },
      {
        id: 'cs_4',
        text: 'Os sistemas da empresa são atualizados com frequência?',
        options: [
          'Nunca atualizamos.',
          'Só quando há falha.',
          'Atualizamos manualmente, sem controle.',
          'Atualização periódica, mas sem política formal.',
          'Atualizações automatizadas e controladas.'
        ]
      },
      {
        id: 'cs_5',
        text: 'Existe proteção contra golpes por e-mail (phishing, spam)?',
        options: [
          'Não há proteção.',
          'Apenas filtro básico do e-mail.',
          'Filtro de spam ativo, sem gestão.',
          'Solução de proteção ativa em todos os e-mails.',
          'Filtro avançado, com monitoramento e treinamento de usuários.'
        ]
      },
      {
        id: 'cs_6',
        text: 'Os dispositivos móveis usados (celulares, notebooks) têm segurança adequada?',
        options: [
          'Nenhuma proteção.',
          'Apenas senha de acesso.',
          'Antivírus ou bloqueio de tela.',
          'Dispositivos gerenciados pela TI.',
          'Dispositivos criptografados, monitorados e com controle remoto.'
        ]
      },
      {
        id: 'cs_7',
        text: 'Já houve algum incidente de segurança digital na empresa?',
        options: [
          'Sim, e não sabemos a causa.',
          'Sim, resolvemos sem medidas preventivas.',
          'Sim, e tomamos medidas depois.',
          'Não, mas não temos plano de ação.',
          'Não, e temos plano de resposta implementado.'
        ]
      },
      {
        id: 'cs_8',
        text: 'A empresa possui plano de resposta a incidentes cibernéticos?',
        options: [
          'Não temos plano.',
          'Temos ideia geral.',
          'Plano informal.',
          'Plano documentado, mas sem testes.',
          'Plano testado, revisado e com responsáveis definidos.'
        ]
      }
    ]
  },
  {
    id: 'ti',
    title: 'Tecnologia da Informação',
    icon: '🖥️',
    color: 'segments-it',
    questions: [
      {
        id: 'ti_1',
        text: 'Existe alguém responsável pela área de TI?',
        options: [
          'Não há ninguém responsável.',
          'Um funcionário ajuda ocasionalmente.',
          'Um colaborador atua, mas sem processo.',
          'Terceirizamos para empresa de TI.',
          'Profissional ou equipe dedicada, com processos documentados.'
        ]
      },
      {
        id: 'ti_2',
        text: 'A rede da empresa é organizada e protegida?',
        options: [
          'Totalmente desorganizada.',
          'Uso de Wi-Fi aberto ou sem senha forte.',
          'Wi-Fi com senha simples e equipamentos misturados.',
          'Wi-Fi com separação por setor e senha forte.',
          'Rede segmentada com equipamentos gerenciados.'
        ]
      },
      {
        id: 'ti_3',
        text: 'As senhas são trocadas regularmente?',
        options: [
          'Nunca são trocadas.',
          'Trocadas apenas quando há problema.',
          'Trocadas esporadicamente.',
          'Política informal de troca.',
          'Política obrigatória de troca periódica.'
        ]
      },
      {
        id: 'ti_4',
        text: 'Os softwares utilizados são originais e licenciados?',
        options: [
          'Usamos softwares piratas.',
          'Alguns são originais, outros não.',
          'Usamos apenas os que vieram nos equipamentos.',
          'Usamos software livre ou com licenças organizadas.',
          'Todos são licenciados e com controle centralizado.'
        ]
      },
      {
        id: 'ti_5',
        text: 'Os dados da empresa estão centralizados e organizados?',
        options: [
          'Estão espalhados em diversos computadores.',
          'Estão em pen drives ou HDs externos.',
          'Centralizamos em pastas, mas sem organização.',
          'Usamos servidor ou nuvem, mas sem controle.',
          'Dados centralizados, organizados e com backup.'
        ]
      },
      {
        id: 'ti_6',
        text: 'Os equipamentos seguem padrão de compra e configuração?',
        options: [
          'Cada setor compra o que quer.',
          'Compramos conforme necessidade, sem padrão.',
          'Temos preferência por algumas marcas.',
          'Compramos conforme padrão, mas sem documentação.',
          'Equipamentos padronizados e documentados.'
        ]
      },
      {
        id: 'ti_7',
        text: 'Há controle de quem acessa os sistemas?',
        options: [
          'Não há controle.',
          'Login compartilhado.',
          'Logins individuais sem controle de permissões.',
          'Logins com permissões, mas sem histórico.',
          'Logins controlados, com permissões e auditoria.'
        ]
      },
      {
        id: 'ti_8',
        text: 'Existe inventário de equipamentos e softwares?',
        options: [
          'Não temos inventário.',
          'Temos lista informal.',
          'Lista desatualizada.',
          'Lista organizada, mas manual.',
          'Inventário digital e atualizado.'
        ]
      },
      {
        id: 'ti_9',
        text: 'A empresa tem plano de continuidade em caso de falhas?',
        options: [
          'Não temos plano.',
          'Apenas uma ideia informal.',
          'Documentado, mas desatualizado.',
          'Plano atualizado, mas nunca testado.',
          'Plano documentado, testado e revisado periodicamente.'
        ]
      }
    ]
  },
  {
    id: 'juridico',
    title: 'Jurídico',
    icon: '⚖️',
    color: 'segments-legal',
    questions: [
      {
        id: 'ju_1',
        text: 'A empresa possui contratos ou políticas que mencionam a LGPD?',
        options: [
          'Nenhum contrato menciona a LGPD.',
          'Só mencionamos em contratos com grandes clientes.',
          'Temos cláusulas genéricas sobre proteção de dados.',
          'Nossos contratos já incluem cláusulas específicas da LGPD.',
          'Todos os contratos e políticas são revisados com foco na LGPD.'
        ]
      },
      {
        id: 'ju_2',
        text: 'Existe um profissional jurídico que assessora a empresa sobre proteção de dados?',
        options: [
          'Não temos advogado ou suporte jurídico.',
          'Contamos com ajuda eventual de terceiros.',
          'Temos suporte jurídico, mas sem foco em LGPD.',
          'Um advogado nos orienta sobre proteção de dados quando necessário.',
          'Temos apoio jurídico especializado e contínuo sobre LGPD.'
        ]
      },
      {
        id: 'ju_3',
        text: 'A empresa já revisou contratos com fornecedores e parceiros para incluir cláusulas da LGPD?',
        options: [
          'Nunca foi feito.',
          'Estamos começando a revisar.',
          'Só revisamos contratos mais recentes.',
          'Grande parte já está revisada.',
          'Todos os contratos com terceiros foram revisados e ajustados.'
        ]
      },
      {
        id: 'ju_4',
        text: 'Como é feito o registro do consentimento dos titulares de dados?',
        options: [
          'Não coletamos consentimento formalmente.',
          'Pedimos por e-mail ou verbalmente.',
          'Utilizamos formulários simples.',
          'Temos sistema que registra consentimento.',
          'Consentimentos são documentados, com base legal clara e rastreável.'
        ]
      },
      {
        id: 'ju_5',
        text: 'A empresa possui procedimento para responder pedidos de titulares (acesso, correção, exclusão)?',
        options: [
          'Nunca recebemos e não temos preparo.',
          'Já recebemos, mas tratamos caso a caso.',
          'Temos uma orientação interna.',
          'Processo definido, mas pouco usado.',
          'Procedimento claro, registrado e com responsáveis designados.'
        ]
      },
      {
        id: 'ju_6',
        text: 'A empresa mantém registro das bases legais utilizadas para tratamento de dados?',
        options: [
          'Não conhecemos as bases legais.',
          'Sabemos que existem, mas não aplicamos.',
          'Aplicamos de forma genérica.',
          'Bases legais são analisadas e documentadas em alguns casos.',
          'Todas as operações têm base legal identificada e registrada.'
        ]
      },
      {
        id: 'ju_7',
        text: 'Foi feito mapeamento dos dados pessoais tratados pela empresa?',
        options: [
          'Não sabemos quais dados tratamos.',
          'Sabemos informalmente.',
          'Fizemos um levantamento parcial.',
          'Mapeamento quase completo, mas sem documentação.',
          'Mapeamento completo, atualizado e documentado.'
        ]
      },
      {
        id: 'ju_8',
        text: 'Já foi elaborado um Relatório de Impacto à Proteção de Dados (RIPD)?',
        options: [
          'Nunca ouvimos falar.',
          'Sabemos o que é, mas não fizemos.',
          'Iniciamos a elaboração.',
          'Elaborado, mas ainda não revisado.',
          'RIPD completo, revisado e com plano de ação.'
        ]
      }
    ]
  },
  {
    id: 'governanca',
    title: 'Governança',
    icon: '🏛️',
    color: 'segments-governance',
    questions: [
      {
        id: 'go_1',
        text: 'A alta direção da empresa está envolvida nas decisões sobre proteção de dados?',
        options: [
          'Não tem conhecimento do tema.',
          'Já ouviu falar, mas não se envolve.',
          'Demonstra interesse esporádico.',
          'Acompanha o projeto de conformidade.',
          'Está diretamente envolvida e toma decisões estratégicas.'
        ]
      },
      {
        id: 'go_2',
        text: 'A empresa possui um comitê ou grupo responsável por proteção de dados?',
        options: [
          'Não temos nenhum grupo.',
          'Algumas pessoas discutem informalmente.',
          'Há reuniões esporádicas sobre o tema.',
          'Grupo formado, mas com atuação parcial.',
          'Comitê ativo com reuniões e decisões documentadas.'
        ]
      },
      {
        id: 'go_3',
        text: 'Existe canal oficial para denúncias ou reclamações sobre uso de dados pessoais?',
        options: [
          'Não temos canal definido.',
          'Reclamações são feitas diretamente a colaboradores.',
          'Utilizamos o e-mail institucional para isso.',
          'Temos canal exclusivo, mas pouco divulgado.',
          'Canal claro, divulgado e com tratamento documentado.'
        ]
      },
      {
        id: 'go_4',
        text: 'A empresa nomeou formalmente um Encarregado de Dados (DPO)?',
        options: [
          'Não temos.',
          'Temos alguém não nomeado oficialmente.',
          'Nomeamos alguém sem definição clara do papel.',
          'Nomeamos oficialmente, mas sem divulgação.',
          'Nomeado, com responsabilidades definidas e publicado.'
        ]
      },
      {
        id: 'go_5',
        text: 'Existem metas ou indicadores relacionados à proteção de dados?',
        options: [
          'Não temos metas.',
          'Temos ideias gerais, mas não mensuramos.',
          'Metas estão sendo discutidas.',
          'Temos alguns indicadores sendo acompanhados.',
          'Metas definidas, com acompanhamento periódico.'
        ]
      },
      {
        id: 'go_6',
        text: 'Há políticas de ética e conformidade relacionadas à LGPD?',
        options: [
          'Não temos políticas.',
          'Temos código de conduta geral.',
          'Política escrita, mas não aplicada.',
          'Política aplicada em alguns setores.',
          'Política ética estruturada e com aplicação contínua.'
        ]
      },
      {
        id: 'go_7',
        text: 'Liderança participa de treinamentos sobre proteção de dados?',
        options: [
          'Não participa.',
          'Já foi convidada, mas não compareceu.',
          'Participou uma vez.',
          'Participa ocasionalmente.',
          'Participa ativamente e promove treinamentos.'
        ]
      },
      {
        id: 'go_8',
        text: 'As decisões sobre dados são registradas com justificativa legal?',
        options: [
          'Nada é registrado.',
          'Registramos informalmente.',
          'Só em casos mais críticos.',
          'Documentamos algumas decisões.',
          'Todas as decisões com dados são justificadas e registradas.'
        ]
      },
      {
        id: 'go_9',
        text: 'A proteção de dados faz parte do planejamento estratégico da empresa?',
        options: [
          'Não faz parte.',
          'É mencionada sem ação prática.',
          'Está sendo considerada em reuniões.',
          'Incluímos nos planos operacionais.',
          'Parte integrada e estratégica da empresa.'
        ]
      },
      {
        id: 'go_10',
        text: 'Existe integração entre áreas (jurídico, TI, RH, comercial) para LGPD?',
        options: [
          'Nenhuma integração.',
          'Algumas áreas envolvidas pontualmente.',
          'Participam apenas quando necessário.',
          'Reuniões periódicas com algumas áreas.',
          'Trabalho integrado com representantes de todas as áreas.'
        ]
      }
    ]
  }
];
