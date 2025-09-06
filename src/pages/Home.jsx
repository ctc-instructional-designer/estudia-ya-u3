import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import featuresData from "../data/features.json";
import testimonialsData from "../data/testimonials.json";
import coursesData from "../data/courses.json";

const Home = () => {
  const [features, setFeatures] = useState([]);
  const [stats, setStats] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setFeatures(featuresData.features);
      setStats(featuresData.stats);
      setTestimonials(testimonialsData.slice(0, 3)); // Mostrar solo 3 testimonios
      setFeaturedCourses(
        coursesData.filter((course) => course.featured).slice(0, 3)
      );
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Estudia más inteligente,
                <span className="block text-green-300">no más difícil</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/90">
                EstudiaYa es la plataforma que revoluciona tu forma de estudiar.
                Organizamos tu tiempo, optimizamos tu aprendizaje y te motivamos
                a alcanzar tus metas académicas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/catalogo"
                  className="btn-primary bg-white text-blue-600 hover:bg-gray-100"
                >
                  🚀 Explorar Catálogo
                </Link>
                <button className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
                  Ver demo
                </button>
              </div>
            </div>
            <div className="hidden lg:block fade-in">
              <div className="relative">
                <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">📚</div>
                    <p className="text-xl text-white/80">
                      Plataforma EstudiaYa
                    </p>
                  </div>
                </div>
                {/* Elementos flotantes decorativos */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full"></div>
                <div className="absolute top-1/2 -left-6 w-6 h-6 bg-blue-300 rounded-full"></div>
                <div className="absolute -bottom-6 left-1/3 w-10 h-10 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Resultados que hablan por sí solos
            </h2>
            <p className="text-xl text-gray-600">
              Miles de estudiantes ya han transformado su experiencia académica
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-500 mb-2">
                {stats.activeUsers}
              </div>
              <p className="text-gray-600 font-medium">Usuarios Activos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-500 mb-2">
                {stats.successRate}
              </div>
              <p className="text-gray-600 font-medium">Tasa de Éxito</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-yellow-500 mb-2">
                {stats.averageImprovement}
              </div>
              <p className="text-gray-600 font-medium">Mejora Promedio</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-purple-500 mb-2">
                {stats.coursesCompleted}
              </div>
              <p className="text-gray-600 font-medium">Cursos Completados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Destacados */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              🌟 Cursos Más Populares
            </h2>
            <p className="text-xl text-gray-600">
              Descubre nuestros cursos destacados y mejor calificados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course) => (
              <div key={course.id} className="card p-6">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {course.category}
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    ${course.price}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  👨‍🏫 {course.instructor}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-yellow-400">⭐</span>
                    <span className="ml-1 text-sm font-semibold">
                      {course.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    👥 {course.students.toLocaleString()}
                  </span>
                </div>
                <Link
                  to="/catalogo"
                  className="btn-primary w-full text-center block"
                >
                  Ver Detalles
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/catalogo" className="btn-secondary text-lg px-8 py-3">
              📚 Ver Todos los Cursos
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              ¿Por qué elegir EstudiaYa?
            </h2>
            <p className="text-xl text-gray-600">
              Herramientas diseñadas específicamente para estudiantes modernos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="card p-8 text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios Dinámicos */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              💬 Lo Que Dicen Nuestros Estudiantes
            </h2>
            <p className="text-xl text-white/90">
              Testimonios reales de estudiantes que han transformado su futuro
              con EstudiaYa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-white/80">{testimonial.role}</p>
                  </div>
                  {testimonial.verified && (
                    <div className="ml-auto">
                      <span className="text-green-300">✓</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-300">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-sm text-white/90 italic">
                  "{testimonial.comment}"
                </p>
                <div className="mt-3 text-xs text-white/70">
                  Curso: {testimonial.course}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contacto"
              className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3"
            >
              📝 Comparte Tu Experiencia
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para transformar tu forma de estudiar?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Únete a miles de estudiantes que ya han mejorado sus resultados
            académicos con EstudiaYa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="btn-primary bg-white text-blue-600 hover:bg-gray-100"
            >
              Empezar gratis
            </Link>
            <Link
              to="/quienes-somos"
              className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600"
            >
              Conocer más
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
