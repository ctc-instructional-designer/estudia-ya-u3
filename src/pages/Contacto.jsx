import { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    userType: "",
    newsletter: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validación de formulario
  const validateForm = () => {
    const newErrors = {};

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "El formato del email no es válido";
    }

    // Validar asunto
    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es obligatorio";
    }

    // Validar tipo de usuario
    if (!formData.userType) {
      newErrors.userType = "Selecciona tu tipo de usuario";
    }

    // Validar mensaje
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar cambios en inputs
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simular envío de formulario
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        userType: "",
        newsletter: false,
      });
    } catch (error) {
      console.error("Error al enviar formulario:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="card p-8 text-center max-w-md mx-4">
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ¡Mensaje Enviado!
          </h2>
          <p className="text-gray-600 mb-6">
            Gracias por contactarnos. Nuestro equipo revisará tu mensaje y te
            responderá dentro de las próximas 24 horas.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="btn-primary">
            Enviar Otro Mensaje
          </button>
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
            Contáctanos
          </h1>
          <p className="text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto fade-in">
            ¿Tienes preguntas, sugerencias o necesitas ayuda? Nuestro equipo
            está aquí para apoyarte en tu jornada académica.
          </p>
        </div>
      </section>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Información de contacto */}
            <div className="lg:col-span-1">
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Información de Contacto
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                      📧
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Email General
                      </h3>
                      <p className="text-gray-600">info@estudiaya.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
                      📞
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Teléfono</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white">
                      🎓
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Soporte Estudiantes
                      </h3>
                      <p className="text-gray-600">soporte@estudiaya.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-white">
                      ⏰
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Horario de Atención
                      </h3>
                      <p className="text-gray-600">
                        Lunes a Viernes: 8:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-600">
                        Sábados: 9:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-4">Síguenos</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-500 transition-colors"
                    >
                      📘 Facebook
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-500 transition-colors"
                    >
                      🐦 Twitter
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-500 transition-colors"
                    >
                      💼 LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Envíanos un Mensaje
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Tipo de usuario */}
                  <div>
                    <label
                      htmlFor="userType"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      Tipo de Usuario *
                    </label>
                    <select
                      id="userType"
                      name="userType"
                      value={formData.userType}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        errors.userType ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Selecciona tu tipo</option>
                      <option value="estudiante">Estudiante</option>
                      <option value="profesor">Profesor/Educador</option>
                      <option value="padre">Padre de Familia</option>
                      <option value="institución">Institución Educativa</option>
                      <option value="otro">Otro</option>
                    </select>
                    {errors.userType && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.userType}
                      </p>
                    )}
                  </div>

                  {/* Asunto */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      Asunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        errors.subject ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="¿En qué podemos ayudarte?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Comparte tus comentarios, preguntas o sugerencias..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 mt-1">
                      Caracteres: {formData.message.length}/500
                    </p>
                  </div>

                  {/* Newsletter */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                      htmlFor="newsletter"
                      className="ml-2 text-sm text-gray-600"
                    >
                      Quiero recibir actualizaciones sobre nuevas funciones y
                      consejos de estudio
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 hover:scale-105 hover:shadow-lg"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Enviando...
                      </span>
                    ) : (
                      "Enviar Mensaje 📧"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Encuentra respuestas rápidas a las consultas más comunes
            </p>
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                ¿EstudiaYa es gratuito?
              </h3>
              <p className="text-gray-600">
                Ofrecemos un plan gratuito con funciones básicas y planes
                premium con características avanzadas. Puedes comenzar gratis y
                actualizar cuando necesites más funciones.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                ¿Cómo funciona el seguimiento de progreso?
              </h3>
              <p className="text-gray-600">
                Nuestra plataforma utiliza algoritmos inteligentes para analizar
                tu comportamiento de estudio, tiempo dedicado y resultados para
                ofrecerte insights personalizados sobre tu progreso académico.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                ¿Puedo usar EstudiaYa en móvil?
              </h3>
              <p className="text-gray-600">
                Sí, EstudiaYa es completamente responsive y funciona
                perfectamente en dispositivos móviles. También estamos
                desarrollando aplicaciones nativas para iOS y Android.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
