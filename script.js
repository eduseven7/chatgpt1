const books = [
  {
    title: "Os 7 Hábitos das Pessoas Altamente Eficazes",
    description: "Base prática para liderança pessoal e gestão de prioridades.",
  },
  {
    title: "De Zero a Um",
    description: "Como construir soluções únicas e duradouras em mercados competitivos.",
  },
  {
    title: "Mindset",
    description: "Mentalidade de crescimento para profissionais e equipes de alta performance.",
  },
];

const news = [
  {
    title: "Mercado latino de IA cresce 37%",
    description: "Novos hubs de inovação surgem com foco em formação de líderes técnicos.",
  },
  {
    title: "Startups B2B aceleram no Brasil",
    description: "Empresas criam programas de liderança para talentos em início de carreira.",
  },
  {
    title: "Comunidades fechadas ganham força",
    description: "Grupos por níveis de maturidade elevam qualidade das discussões estratégicas.",
  },
];

function renderCards(items, containerId) {
  const container = document.querySelector(`#${containerId}`);

  if (!container) {
    return;
  }

  container.innerHTML = items
    .map(
      ({ title, description }) => `
        <article class="card">
          <h3>${title}</h3>
          <p>${description}</p>
        </article>
      `
    )
    .join("");
}

function setupForm() {
  const form = document.querySelector("#signup-form");
  const feedback = document.querySelector("#form-feedback");

  if (!form || !feedback) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const nome = formData.get("nome");
    const interesse = formData.get("interesse");

    feedback.textContent = `Inscrição recebida, ${nome}! Em breve você receberá o cronograma de aulas de ${interesse}.`;
    form.reset();
  });
}

function setupCommunityButtons() {
  const buttons = document.querySelectorAll(".community-card button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const link = button.dataset.link;

      if (!link) {
        return;
      }

      window.open(link, "_blank", "noopener,noreferrer");
    });
  });
}

function setupFooterYear() {
  const yearContainer = document.querySelector("#year");

  if (!yearContainer) {
    return;
  }

  yearContainer.textContent = new Date().getFullYear();
}

renderCards(books, "book-list");
renderCards(news, "news-list");
setupForm();
setupCommunityButtons();
setupFooterYear();
