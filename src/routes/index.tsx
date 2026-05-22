import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CETI José Nogueira de Aguiar — História da Escola" },
      {
        name: "description",
        content:
          "Conheça a história, cursos, turmas, anos importantes e eventos do CETI José Nogueira de Aguiar.",
      },
      { property: "og:title", content: "CETI José Nogueira de Aguiar" },
      {
        property: "og:description",
        content: "História, cursos, turmas e eventos da nossa escola.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const navLinks = [
    { href: "#historia", label: "História" },
    { href: "#cursos", label: "Cursos" },
    { href: "#turmas", label: "Turmas" },
    { href: "#anos", label: "Anos" },
    { href: "#eventos", label: "Eventos" },
  ];

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#333] font-sans">
      <header className="bg-[#003366] text-white text-center py-6 px-5">
        <h1 className="text-3xl font-bold">CETI JOSE NOGUEIRA DE AGUIAR</h1>
        <p className="mt-2">
          Conheça a história, cursos, turmas e eventos da nossa escola
        </p>
      </header>

      <nav className="bg-[#0055aa] py-3 text-center">
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-white font-bold mx-4 hover:text-yellow-300 transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <section id="historia" className="px-8 py-8">
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-[#003366] text-2xl font-semibold mb-3">
            História da Escola
          </h2>
          <p>
            O CETI foi fundada em 1976 com o objetivo de oferecer ensino de
            qualidade para jovens da região. Ao longo dos anos, a escola cresceu
            e passou a oferecer diversos cursos técnicos e projetos
            educacionais.
          </p>
        </div>
      </section>

      <section id="cursos" className="px-8 py-8">
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-[#003366] text-2xl font-semibold mb-3">
            Categorias de Cursos
          </h2>
          <ul className="list-disc ml-6">
            <li>Desenvolvimento de Sistemas</li>
            <li>Administração</li>
            <li>Informática</li>
            <li>Marketing</li>
          </ul>
        </div>
      </section>

      <section id="turmas" className="px-8 py-8">
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-[#003366] text-2xl font-semibold mb-3">Turmas</h2>
          <ul className="list-disc ml-6">
            <li>1º Ano A</li>
            <li>1º Ano B</li>
            <li>2º Ano A</li>
            <li>2º Ano B</li>
            <li>3º Ano A</li>
            <li>3º Ano B</li>
          </ul>
        </div>
      </section>

      <section id="anos" className="px-8 py-8">
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-[#003366] text-2xl font-semibold mb-3">
            Anos Importantes
          </h2>
          <ul className="list-disc ml-6">
            <li>1976 - Fundação da escola</li>
            <li>2024 - Primeiro curso técnico</li>
            <li>2006 - Expansão das salas digitais</li>
          </ul>
        </div>
      </section>

      <section id="eventos" className="px-8 py-8">
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-[#003366] text-2xl font-semibold mb-3">
            Eventos Históricos
          </h2>

          <div className="border-l-4 border-[#0055aa] pl-4 mt-4">
            <h3 className="font-semibold">Feira de Ciências</h3>
            <p>Geralmente organizado por grupos de alunos e professores.</p>
          </div>

          <div className="border-l-4 border-[#0055aa] pl-4 mt-4">
            <h3 className="font-semibold">Jogos Escolares</h3>
            <p>Competições esportivas entre as turmas da escola.</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#003366] text-white text-center py-4 mt-5">
        <p>
          © 2026 - Ceti Jose Nogueira De Aguiar — Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}
