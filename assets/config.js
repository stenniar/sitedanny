/*
 * CONFIGURAÇÃO DO SITE — dannyaraujo.com.br
 *
 * Duas formas de atualizar o site:
 *  1) AUTOMÁTICA (recomendada): preencha a planilha "Painel do site" no Google Sheets e cole abaixo,
 *     em `planilha`, o link CSV de cada aba (Arquivo → Compartilhar → Publicar na Web → aba → CSV).
 *     Tudo o que você mudar na planilha aparece no site sozinho, sem reenviar arquivos.
 *  2) MANUAL: edite os valores deste arquivo e envie-o de novo para a hospedagem (pasta assets/).
 *  Se um link da planilha estiver vazio ou fora do ar, o site usa os valores deste arquivo.
 */
window.DANNY_CONFIG = {
  // ---------- Contatos ----------
  whatsapp: '5584974005115',          // só números: 55 + DDD + número
  canalVip: 'https://whatsapp.com/channel/0029VbDS742JZg4DrIH8VP1b',
  linkedin: 'https://www.linkedin.com/in/stenniar',
  newsletter: 'https://www.linkedin.com/newsletters/arquitetura-do-acaso-7515930234483953664/',

  // ---------- Redes sociais (deixe '' para esconder) ----------
  redes: [
    { nome: 'LinkedIn', usuario: 'in/stenniar', url: 'https://www.linkedin.com/in/stenniar' },
    { nome: 'Instagram', usuario: '@stenniar', url: 'https://www.instagram.com/stenniar/' },
    { nome: 'YouTube', usuario: '', url: '' },
    { nome: 'TikTok', usuario: '', url: '' },
    { nome: 'Canal VIP', usuario: 'Arquitetura da Gestão', url: 'https://whatsapp.com/channel/0029VbDS742JZg4DrIH8VP1b' }
  ],

  // ---------- Newsletter: as 3 primeiras aparecem no site ----------
  edicoes: [
    { titulo: 'A lei construiu o alicerce. A experiência constrói o prédio.', resumo: 'O que a nova regra do SAC ensina sobre Customer Success, escala 5x2 e faturamento.', link: 'https://www.linkedin.com/pulse/lei-construiu-o-alicerce-experi%C3%AAncia-constr%C3%B3i-pr%C3%A9dio-danielly-ara%C3%BAjo-v2stf/', leitura: '3 min' },
    { titulo: '80% sinal, 20% ruído', resumo: 'Como calibrar a antena e parar de confundir movimento com resultado.', link: 'https://www.linkedin.com/pulse/80-sinal-20-ru%C3%ADdo-como-calibrar-antena-e-parar-de-confundir-ara%C3%BAjo-sztkf/', leitura: '4 min' },
    { titulo: 'Menos tempo, mais obra', resumo: 'Foco não é dom. É projeto: a planta e a ordem das etapas mudam o resultado.', link: 'https://www.linkedin.com/pulse/menos-tempo-mais-obra-danielly-ara%C3%BAjo-cyzuf/', leitura: '2 min' }
  ],

  // ---------- Instagram: os 3 primeiros aparecem no site (com o material ligado ao post) ----------
  instagram: [
    { gancho: 'Uma operação com demanda real, equipe ativa e agenda cheia não quebra por falta de clientes. Ela trava por falta de arquitetura.', link: 'https://www.instagram.com/stenniar/p/DgIByVFHHYQ/', material: 'materiais/estudo-de-caso-150.pdf', rotulo: 'Arquitetura' },
    { gancho: 'Aumentar o investimento em anúncios com o comercial desorganizado só acelera o prejuízo.', link: 'https://www.instagram.com/stenniar/p/DgHoiNuHAc7/', material: 'materiais/auditoria-5-perguntas.pdf', rotulo: 'Funil' },
    { gancho: 'Ter um bom produto e postar todos os dias não salva uma operação comercial sem processo.', link: 'https://www.instagram.com/stenniar/p/DgHJ7BXjHAY/', material: 'materiais/diagnostico-arquitetura-comercial.pdf', rotulo: 'Método' }
  ],

  // ---------- Livros ----------
  // status: 'venda' mostra o botão de compra com `link`; 'em-breve' mostra "avise-me" pelo WhatsApp
  livros: [
    {
      titulo: 'A Arquitetura do Acaso',
      subtitulo: 'Sorte também tem projeto',
      descricao: 'Gestão, negócios e growth para quem constrói sorte com método. Histórias reais de operação, liderança e vendas, com o que dá para aplicar na segunda-feira.',
      status: 'em-breve',
      link: '',
      textoBotao: 'Comprar o livro',
      formato: 'Livro · projeto literário',
      preco: ''
    }
  ],

  // ---------- Agenda de consultoria ----------
  agenda: {
    sessao: 'Diagnóstico Comercial',
    duracaoMin: 45,
    formato: 'Online por vídeo ou presencial em Natal/RN',
    diasAFrente: 21,
    antecedenciaHoras: 24,
    dias: {                         // 1 = segunda ... 5 = sexta. Horário de Brasília.
      1: ['09:00', '10:30', '14:30'],
      2: ['09:00', '10:30', '14:30', '16:00'],
      3: ['10:30', '14:30'],
      4: ['09:00', '10:30', '14:30', '16:00'],
      5: ['09:00', '10:30']
    },
    ocupados: [],                   // 'AAAA-MM-DD HH:MM'
    bloqueados: ['2026-12-24', '2026-12-25', '2026-12-31', '2027-01-01'],
    linkAgendaExterna: ''           // página de agendamento do Google Agenda ou Calendly, se usar
  },

  // ---------- Atualização automática pela planilha (links CSV publicados) ----------
  planilha: {
    edicoes: '',     // colunas: titulo, resumo, link, leitura
    instagram: '',   // colunas: gancho, link, material, rotulo
    livros: '',      // colunas: titulo, subtitulo, descricao, status, link, preco, formato
    redes: '',       // colunas: nome, usuario, url
    ocupados: '',    // colunas: data (AAAA-MM-DD), hora (HH:MM)
    bloqueados: ''   // colunas: data (AAAA-MM-DD)
  },

  // ---------- Medição de conversões (opcional) ----------
  // Com um ID preenchido, o site pede consentimento (LGPD) e registra: clique no WhatsApp,
  // agendamento solicitado, diagnóstico enviado, download de material e clique em conteúdo.
  analytics: {
    ga4: '',         // ex.: 'G-XXXXXXXXXX'
    metaPixel: ''    // ex.: '123456789012345'
  }
};
