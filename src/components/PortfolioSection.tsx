
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Restaurante Mediterráneo",
    category: "Restaurante",
    description: "Sitio web con menú digital y reservas automáticas. Incrementó reservas en un 30%.",
    imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Clínica Dental Sonrisas",
    category: "Salud",
    description: "Portal web con asistente virtual para agendar citas. Redujo las llamadas en un 45%.",
    imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Salón Belleza Total",
    category: "Belleza",
    description: "Web con integración de WhatsApp y calendario. Aumentó la captación de clientes en un 25%.",
    imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Gimnasio FitLife",
    category: "Fitness",
    description: "Portal con IA para gestión de membresías y clases. Optimizó la operación en un 40%.",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <section className="py-20" id="portafolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de éxito</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Negocios locales que ya transformaron su presencia digital con QOVIA
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <div className="text-sm text-primary-foreground font-medium bg-primary px-3 py-1 rounded-full inline-block mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-200 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
