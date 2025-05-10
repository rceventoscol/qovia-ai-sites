
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    title: "Starter AI",
    price: "Desde $XXX",
    features: [
      "Página web personalizada",
      "Integración con WhatsApp",
      "Calendario de citas",
      "Formularios básicos",
      "Dominio por 1 año",
      "Hosting incluido"
    ],
    popular: false
  },
  {
    title: "Pro IA",
    price: "Desde $XXX",
    features: [
      "Todo lo de Starter AI",
      "Chatbot integrado",
      "Asistente de voz",
      "Sistema de reservas avanzado",
      "Análisis de visitantes",
      "Actualizaciones ilimitadas"
    ],
    popular: true
  },
  {
    title: "Full Automatizado",
    price: "Desde $XXX",
    features: [
      "Todo lo de Pro IA",
      "Copywriting con IA",
      "Branding completo",
      "Analytics avanzados",
      "Integración con CRM",
      "Soporte prioritario"
    ],
    popular: false
  }
];

const PlansSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="planes">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes IA</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu negocio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl shadow-md overflow-hidden relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Recomendado
                  </div>
                </div>
              )}
              
              <div className={`p-6 ${plan.popular ? 'bg-primary/5' : ''}`}>
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <div className="text-3xl font-bold mb-6">{plan.price}</div>
                
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={plan.popular ? "gradient-bg hover:opacity-90 transition-opacity w-full" : "w-full"}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => window.open("https://wa.me/573165875372?text=Me%20interesa%20el%20plan%20" + encodeURIComponent(plan.title), "_blank")}
                >
                  Solicitar información
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlansSection;
