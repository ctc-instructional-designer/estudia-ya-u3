import { useState, useEffect } from "react";
import teamData from "../data/team.json";

const QuienesSomos = () => {
  const [team, setTeam] = useState([]);
  const [company, setCompany] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setTeam(teamData.team);
      setCompany(teamData.company);
      setIsLoading(false);
    }, 800);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando equipo...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Conoce a Nuestro Equipo
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            Somos un grupo de profesionales apasionados por la educación y la
            tecnología, comprometidos con tu éxito académico.
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Fundada en {company.founded}</strong>, EstudiaYa nació
                  de la necesidad de crear herramientas de estudio más
                  inteligentes y accesibles para estudiantes de todas las
                  edades.
                </p>
                <p>
                  Con sede en <strong>{company.location}</strong>, nuestro
                  equipo de <strong>{company.employees} profesionales</strong>{" "}
                  trabaja incansablemente para desarrollar soluciones
                  innovadoras que faciliten el aprendizaje.
                </p>
                <p>
                  Hemos ayudado a miles de estudiantes a mejorar sus resultados
                  académicos mediante el uso de tecnología inteligente y
                  metodologías pedagógicas probadas.
                </p>
              </div>
            </div>
            <div className="lg:text-center">
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <p className="text-lg text-gray-700 font-medium">
                      Innovando en Educación
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600">
              Profesionales comprometidos con tu éxito académico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white">👨‍💼</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    💼
                  </a>
                  <a
                    href={member.social.email}
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    📧
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600">
              Los principios que guían nuestro trabajo diario
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {company.values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">
                    {index === 0 && "💡"}
                    {index === 1 && "🌍"}
                    {index === 2 && "⭐"}
                    {index === 3 && "🤝"}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;
