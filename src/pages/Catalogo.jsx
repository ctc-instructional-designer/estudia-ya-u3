import { useState, useEffect } from "react";
import coursesData from "../data/courses.json";

const Catalogo = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Simulación de carga de datos desde JSON
  useEffect(() => {
    const loadCourses = () => {
      setTimeout(() => {
        setCourses(coursesData);
        setFilteredCourses(coursesData);
        setLoading(false);
      }, 800); // Simula tiempo de carga
    };

    loadCourses();
  }, []);

  // Filtros y búsqueda
  useEffect(() => {
    let filtered = [...courses];

    // Filtro por categoría
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (course) => course.category === selectedCategory
      );
    }

    // Filtro por nivel
    if (selectedLevel !== "all") {
      filtered = filtered.filter((course) => course.level === selectedLevel);
    }

    // Búsqueda por texto
    if (searchTerm) {
      filtered = filtered.filter(
        (course) =>
          course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Ordenamiento
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price":
          return a.price - b.price;
        case "rating":
          return b.rating - a.rating;
        case "students":
          return b.students - a.students;
        default:
          return 0;
      }
    });

    setFilteredCourses(filtered);
  }, [courses, selectedCategory, selectedLevel, searchTerm, sortBy]);

  // Categorías únicas para el filtro
  const categories = [...new Set(courses.map((course) => course.category))];

  const levels = ["basico", "intermedio", "avanzado"];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando catálogo de cursos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Catálogo de Cursos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra amplia gama de cursos diseñados para impulsar tu
            crecimiento académico y profesional. Filtra, busca y encuentra el
            curso perfecto para ti.
          </p>
        </div>

        {/* Filtros y Búsqueda */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Búsqueda */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🔍 Buscar cursos
              </label>
              <input
                type="text"
                placeholder="Buscar por nombre, instructor o descripción..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filtro por categoría */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                📚 Categoría
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Todas las categorías</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtro por nivel */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                📊 Nivel
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Todos los niveles</option>
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Ordenamiento y estadísticas */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-gray-200">
            <div className="mb-4 sm:mb-0">
              <p className="text-gray-600">
                Mostrando {filteredCourses.length} de {courses.length} cursos
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">
                Ordenar por:
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Nombre A-Z</option>
                <option value="price">Precio (menor a mayor)</option>
                <option value="rating">Calificación (mayor a menor)</option>
                <option value="students">Popularidad</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid de Cursos */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">😕</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No se encontraron cursos
            </h3>
            <p className="text-gray-600">
              Intenta ajustar tus filtros o términos de búsqueda
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Imagen del curso */}
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-48 object-cover"
                  />
                  {course.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                        ⭐ Destacado
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${
                        {
                          basico: "bg-green-500",
                          intermedio: "bg-yellow-500",
                          avanzado: "bg-red-500",
                        }[course.level]
                      }`}
                    >
                      {course.level.charAt(0).toUpperCase() +
                        course.level.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Contenido del curso */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-semibold">
                      {course.category.charAt(0).toUpperCase() +
                        course.category.slice(1)}
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      ${course.price}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {course.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="text-sm text-gray-500 mb-4">
                    <p>👨‍🏫 {course.instructor}</p>
                    <p>⏱️ {course.duration}</p>
                  </div>

                  {/* Calificación y estudiantes */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400">⭐</span>
                      <span className="ml-1 text-sm font-semibold">
                        {course.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      👥 {course.students.toLocaleString()} estudiantes
                    </span>
                  </div>

                  {/* Temas del curso */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {course.topics.slice(0, 3).map((topic, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                      {course.topics.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{course.topics.length - 3} más
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Botón de acción */}
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Cursos destacados */}
        {selectedCategory === "all" &&
          selectedLevel === "all" &&
          !searchTerm && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🌟 Cursos Destacados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses
                  .filter((course) => course.featured)
                  .slice(0, 4)
                  .map((course) => (
                    <div
                      key={course.id}
                      className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white"
                    >
                      <h3 className="text-lg font-bold mb-2">{course.name}</h3>
                      <p className="text-blue-100 text-sm mb-3">
                        {course.instructor}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">
                          ${course.price}
                        </span>
                        <div className="flex items-center">
                          <span className="text-yellow-300">⭐</span>
                          <span className="ml-1 text-sm">{course.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Catalogo;
