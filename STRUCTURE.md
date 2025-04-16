[📄 HTML ESTRUTURA]

- container-fluid (vh-100) => layout de altura da tela toda
  ├── enemy-info (Topo, status do inimigo)
  ├── tabuleiro-wrapper (Centro, área de ação)
  └── player-zone (Rodapé, cartas + info jogador)

[📦 player-zone]
  ├── hand => cartas (flex com gap e no-wrap)
  └── player-info => recursos (no-wrap com 3 colunas e space-between, 3 divs diferentes)

[🎯 tabuleiro-wrapper]
  - position-relative para permitir elementos com position absolute (efeitos visuais, botões, etc)
