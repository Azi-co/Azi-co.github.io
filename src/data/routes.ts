export type ExpeditionRoute = {
  slug: string;
  route: string;
  title: string;
  summary: string;
  location: string;
  distance: string;
  duration: string;
  segment: string;
  minimum: string;
  cardImage: string;
  heroImage: string;
  learning: { title: string; text: string }[];
  stops: { kicker: string; title: string; text: string; image: string }[];
  included: string[];
  bncc: { code: string; description: string }[];
};

export const expeditionRoutes: ExpeditionRoute[] = [
  {
    slug: "sentinelas-do-mar",
    route: "Rota da Vida Marinha",
    title: "Sentinelas do Mar",
    summary: "Uma expedição no Aquário Natal para observar espécies marinhas, manejo animal e conservação costeira a partir da Redinha Nova.",
    location: "Natal, RN",
    distance: "Local",
    duration: "Meio período",
    segment: "Infantil · Fund. I · Fund. II",
    minimum: "35 alunos",
    cardImage: "/azimute/routes/litoral/aquario-natal.webp",
    heroImage: "/azimute/sentinelas-hero.jpg",
    learning: [
      { title: "A biodiversidade deixa de ser vitrine", text: "Peixes, répteis, aves e mamíferos passam a ser analisados como organismos adaptados a ambientes diferentes." },
      { title: "O resgate ganha processo", text: "A turma compreende que cuidar da fauna envolve observação, tratamento, manejo e responsabilidade pública." },
      { title: "O litoral vira compromisso", text: "O aluno relaciona consumo, descarte e ação humana aos impactos sobre a vida marinha e costeira." },
    ],
    stops: [
      { kicker: "Parada 01", title: "Tanque principal do Aquário Natal", text: "Leitura do grande tanque marinho: volume de água salgada, espécies de recife, comportamento animal e adaptação ao ambiente costeiro.", image: "/azimute/sentinelas-hero.jpg" },
      { kicker: "Parada 02", title: "Área de mini zoológico e espécies em cuidado", text: "Pinguins, tartarugas, jacarés e aves ajudam a comparar ambientes, necessidades biológicas e formas diferentes de manejo animal.", image: "/azimute/sentinelas-card.jpg" },
      { kicker: "Parada 03", title: "Atividade mediada com monitores", text: "A equipe do local conduz a conversa sobre poluição marinha, recifes, descarte e preservação a partir do que a turma acabou de observar nos tanques e recintos.", image: "/azimute/sentinelas-hero.jpg" },
      { kicker: "Fechamento", title: "Síntese sobre conservação costeira", text: "No diário de campo, os alunos registram quais atitudes humanas afetam o litoral e que tipos de cuidado aparecem no percurso da visita.", image: "/azimute/sentinelas-card.jpg" },
    ],
    included: ["Transporte regulamentado ida e volta", "Seguro viagem para todos os participantes", "Mediação pedagógica durante a aula de campo", "Suporte operacional para escola e responsáveis", "Diário de campo e perguntas investigativas", "Alimentação conforme desenho final do roteiro"],
    bncc: [
      { code: "EF03CI04 (Ciências)", description: "Identificar características do modo de vida dos animais mais comuns no ambiente próximo." },
      { code: "EF05CI05 (Ciências)", description: "Construir propostas coletivas para consumo consciente, descarte adequado, reutilização e reciclagem." },
      { code: "EF06GE11 (Geografia)", description: "Analisar interações das sociedades com a natureza e transformações da biodiversidade local e mundial." },
    ],
  },
  {
    slug: "areia-engenho-memoria",
    route: "Rota dos Engenhos e da Memória",
    title: "Areia de Engenho e Memória",
    summary: "Uma expedição para transformar colonização, ciclo do açúcar, arquitetura e memória afro-brasileira em leitura de território.",
    location: "Areia, Paraíba",
    distance: "Rota interestadual",
    duration: "7h às 18h",
    segment: "Fund. II · Médio",
    minimum: "35 alunos",
    cardImage: "/azimute/routes/engenhos/areia.webp",
    heroImage: "/azimute/areia-hero.jpg",
    learning: [
      { title: "A escravidão deixa de ser data", text: "O aluno passa a discutir o engenho como sistema produtivo, espaço de trabalho e memória social, não apenas como conteúdo do livro." },
      { title: "Colonização vira arquitetura", text: "Ruas, casarões e igrejas ajudam a turma a perceber como poder, religião e economia organizavam a cidade colonial." },
      { title: "Cultura tem endereço", text: "A herança afro-brasileira, a cultura do Brejo e as marcas do açúcar passam a ser observadas no território real." },
    ],
    stops: [
      { kicker: "Parada 01", title: "Centro Histórico de Areia", text: "O aluno lê a cidade como documento: ruas, fachadas, praças e igrejas mostram como a vida urbana foi organizada em torno de economia, religião e poder.", image: "/azimute/areia-hero.jpg" },
      { kicker: "Parada 02", title: "Theatro Minerva", text: "No teatro mais antigo da Paraíba em funcionamento, a turma discute circulação de ideias, vida pública e como cultura também organiza a memória de uma cidade histórica.", image: "/azimute/areia-teatro.jpg" },
      { kicker: "Parada 03", title: "Praça e Igreja Matriz", text: "A praça ao lado da Matriz ajuda a turma a perceber como religião, urbanismo e convivência se encontram no desenho do centro histórico.", image: "/azimute/areia-matriz.jpg" },
      { kicker: "Fechamento", title: "Rua Pedro Américo e síntese", text: "No fechamento, a turma volta às fachadas e aos detalhes da rua para organizar evidências no diário de campo: o que o centro histórico conta sobre trabalho, poder e permanência?", image: "/azimute/areia-rua.jpg" },
    ],
    included: ["Transporte regulamentado ida e volta", "Seguro viagem para todos os participantes", "Mediação pedagógica durante a aula de campo", "Suporte operacional para escola e responsáveis", "Diário de campo e perguntas investigativas", "Alimentação conforme desenho final do roteiro"],
    bncc: [
      { code: "EF07HI13 (História)", description: "Caracterizar a ação dos europeus e suas lógicas mercantis no domínio do mundo atlântico." },
      { code: "EF07HI14 (História)", description: "Descrever dinâmicas comerciais das sociedades americanas e africanas e suas interações com outras sociedades." },
      { code: "EF06GE07 (Geografia)", description: "Explicar mudanças na interação humana com a natureza a partir do surgimento das cidades." },
    ],
  },
  {
    slug: "no-topo-da-serra",
    route: "Rota das Serras",
    title: "No Topo da Serra",
    summary: "Uma expedição serrana para ler clima, relevo, água, mirantes e formas de ocupação no interior potiguar.",
    location: "Martins + circuito regional, RN",
    distance: "Rota regional",
    duration: "Pernoite",
    segment: "Fund. II · Médio",
    minimum: "35 alunos",
    cardImage: "/azimute/routes/cavernas/martins-serra.webp",
    heroImage: "/azimute/routes/cavernas/martins-serra.webp",
    learning: [
      { title: "Altitude vira sensação e dado", text: "O aluno compara temperatura, vegetação e relevo com outras áreas do RN." },
      { title: "Mirante vira mapa vivo", text: "A paisagem ajuda a localizar formas de ocupação e caminhos regionais." },
      { title: "Serra vira estratégia", text: "A turma discute água, turismo e conservação em área serrana." },
    ],
    stops: [
      { kicker: "Parada 01", title: "Mirante da Carranca", text: "Do alto da serra, a turma compara altitude, ocupação e amplitude visual para entender como o relevo reorganiza a vida regional.", image: "/azimute/routes/cavernas/martins-serra.webp" },
      { kicker: "Parada 02", title: "Centro urbano serrano", text: "Clima, circulação e arquitetura ajudam a ler como a cidade se organiza em uma área alta do interior potiguar.", image: "/azimute/martins-card.jpg" },
      { kicker: "Parada 03", title: "Casa de Pedra", text: "A caverna de mármore desloca a discussão para a formação geológica, as cavidades naturais e a escala do tempo no relevo serrano.", image: "/azimute/routes/cavernas/martins-casa-de-pedra.webp" },
      { kicker: "Fechamento", title: "Síntese entre serra e semiárido", text: "No diário de campo, os alunos registram o que muda quando relevo, clima e ocupação são lidos a partir de uma serra dentro do semiárido.", image: "/azimute/martins-card.jpg" },
    ],
    included: ["Transporte regulamentado ida e volta", "Seguro viagem para todos os participantes", "Mediação pedagógica durante a aula de campo", "Suporte operacional para escola e responsáveis", "Diário de campo e perguntas investigativas", "Alimentação conforme desenho final do roteiro"],
    bncc: [
      { code: "EF06GE05 (Geografia)", description: "Relacionar padrões climáticos, tipos de solo, relevo e formações vegetais." },
      { code: "EF06GE11 (Geografia)", description: "Analisar interações das sociedades com a natureza e transformações da biodiversidade local e mundial." },
      { code: "EF07CI07 (Ciências)", description: "Caracterizar ecossistemas brasileiros e relacionar paisagem, água, solo, luz e temperatura à flora e à fauna." },
    ],
  },
];

export function getRouteBySlug(slug: string) {
  return expeditionRoutes.find((route) => route.slug === slug);
}

export function routeWhatsapp(title: string) {
  return `https://wa.me/5584999650530?text=${encodeURIComponent(`Olá, quero conhecer o roteiro ${title} para minha escola.`)}`;
}
