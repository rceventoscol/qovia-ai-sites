
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Envíanos tu idea o negocio",
    description: "Cuéntanos sobre tu proyecto, necesidades y objetivos de tu negocio local."
  },
  {
    number: "02",
    title: "Recibe un borrador personalizado",
    description: "En 24-48h te presentamos una propuesta de sitio web con IA integrada."
  },
  {
    number: "03",
    title: "Apruebas y optimizamos",
    description: "Ajustamos el diseño y funcionalidades según tus preferencias."
  },
  {
    number: "04",
    title: "Activamos tu web con IA incluida",
    description: "Lanzamos tu sitio con todas las integraciones y automatizaciones."
  }
];

const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="proceso">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proceso QOVIA</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Convertimos tu idea en una web inteligente en pocos pasos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md relative"
            >
              <div className="text-5xl font-bold text-gray-100 absolute right-6 top-4">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white mb-6">
                  {parseInt(step.number)}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
