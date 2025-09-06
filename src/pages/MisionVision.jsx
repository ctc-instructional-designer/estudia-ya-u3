import { useState, useEffect } from "react";
import teamData from "../data/team.json";
import featuresData from "../data/features.json";

const MisionVision = () => {
  const [company, setCompany] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setCompany(teamData.company);
      setTestimonials(featuresData.testimonials);
      setIsLoading(false);
    }, 800);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando información...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 fade-in">
            Misión y Visión
          </h1>
          <p className="text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto fade-in">
            Conoce los principios que nos guían y hacia dónde nos dirigimos como
            empresa comprometida con la educación del futuro.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Misión */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Nuestra Misión
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {company.mission}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🌍</div>
                  <h4 className="font-semibold text-gray-800">Global</h4>
                  <p className="text-sm text-gray-600">
                    Impacto mundial en educación
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">⚡</div>
                  <h4 className="font-semibold text-gray-800">Innovación</h4>
                  <p className="text-sm text-gray-600">
                    Tecnología de vanguardia
                  </p>
                </div>
              </div>
            </div>

            {/* Visión */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🔮</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Nuestra Visión
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {company.vision}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🏆</div>
                  <h4 className="font-semibold text-gray-800">Liderazgo</h4>
                  <p className="text-sm text-gray-600">
                    Plataforma líder regional
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🚀</div>
                  <h4 className="font-semibold text-gray-800">Futuro</h4>
                  <p className="text-sm text-gray-600">Educación del mañana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos y Metas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Nuestros Objetivos 2025
            </h2>
            <p className="text-xl text-gray-600">
              Metas concretas que nos impulsan hacia el futuro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Crecimiento
              </h3>
              <p className="text-gray-600 mb-4">
                Alcanzar 100,000 usuarios activos en toda América Latina
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">75% completado</p>
            </div>

            <div className="card p-8 text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Calidad
              </h3>
              <p className="text-gray-600 mb-4">
                Mantener una satisfacción del cliente superior al 95%
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-full"></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">100% completado</p>
            </div>

            <div className="card p-8 text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Innovación
              </h3>
              <p className="text-gray-600 mb-4">
                Lanzar 5 nuevas funcionalidades basadas en IA
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full w-1/2"></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">50% completado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Lo que dicen nuestros usuarios
            </h2>
            <p className="text-xl text-gray-600">
              Testimonios reales de estudiantes que han transformado su forma de
              estudiar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Sé parte de nuestra visión
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Únete a nosotros en la misión de transformar la educación con
            tecnología inteligente y accesible para todos.
          </p>
          <button className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
            Comenzar mi transformación académica
          </button>
        </div>
      </section>
    </div>
  );
};

export default MisionVision;
