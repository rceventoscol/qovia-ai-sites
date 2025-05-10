
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Asistentes IA de voz",
    description: "Automatiza el agendamiento de citas a través de WhatsApp y llamadas telefónicas."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Formularios inteligentes",
    description: "Captura datos relevantes y convierte visitantes en clientes con facilidad."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Reducción de costos",
    description: "Elimina tareas repetitivas y automatiza procesos para ahorrar tiempo y recursos."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Mayor eficiencia",
    description: "Más ventas y mejor servicio al cliente con menos trabajo administrativo."
  },
];

const AIBusinessSection: React.FC = () => {
  return (
    <section className="py-20" id="ia-negocio">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              IA para tu negocio local
            </h2>
            <div className="text-2xl mb-8 text-gray-700 font-light">
              ¿Y si tu web pudiera <span className="gradient-text font-semibold">responder, agendar y vender</span> por ti?
            </div>
            
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="mr-4 text-primary">{benefit.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Button 
              className="gradient-bg hover:opacity-90 transition-opacity"
              onClick={() => window.open("https://wa.me/573165875372", "_blank")}
            >
              Quiero implementar IA en mi negocio
            </Button>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="w-full h-[500px] rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center relative">
              <div className="absolute inset-0 grid-pattern opacity-10"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-4 gradient-bg text-white flex justify-between items-center">
                    <div className="font-medium">Asistente IA de QOVIA</div>
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                        AI
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 text-sm">
                        ¡Hola! Soy el asistente virtual de Salón Belleza Total. ¿En qué puedo ayudarte hoy?
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                      className="flex items-start space-x-3 justify-end"
                    >
                      <div className="bg-blue-50 rounded-lg p-3 text-sm">
                        Quiero agendar un corte de cabello para mañana
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        C
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                        AI
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 text-sm">
                        ¡Perfecto! Tenemos disponibilidad para mañana. ¿Qué horario prefieres? Tenemos disponibles: 10:00 AM, 2:00 PM y 4:30 PM.
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.0 }}
                      className="flex items-start space-x-3 justify-end"
                    >
                      <div className="bg-blue-50 rounded-lg p-3 text-sm">
                        A las 2:00 PM estaría bien
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        C
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.5 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                        AI
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 text-sm">
                        <p className="mb-2">¡Excelente! He reservado tu cita para mañana a las 2:00 PM para un corte de cabello.</p>
                        <div className="bg-white p-3 rounded border border-gray-200 mt-2">
                          <div className="font-medium">Cita confirmada</div>
                          <div className="text-gray-500 text-xs">Salón Belleza Total</div>
                          <div className="text-gray-700 mt-1">Corte de cabello</div>
                          <div className="text-gray-700">Mañana - 2:00 PM</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <div className="w-full max-w-md mt-4 flex items-center justify-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.7274 14.5775C18.5785 14.9339 18.5837 15.336 18.7423 15.688C18.901 16.0399 19.1996 16.3082 19.5715 16.431L19.5825 16.435C19.9472 16.5547 20.2597 16.7893 20.4641 17.1031C20.6684 17.417 20.7511 17.7907 20.6989 18.1569C20.6466 18.5231 20.4626 18.8612 20.1794 19.1118C19.8961 19.3624 19.5311 19.5101 19.1504 19.528L19.1194 19.53C18.751 19.544 18.3978 19.6923 18.1268 19.9467C17.8558 20.2011 17.6854 20.5445 17.6464 20.9129C17.6075 21.2814 17.7028 21.6519 17.9158 21.9585C18.1288 22.265 18.4449 22.485 18.8034 22.579H18.8154C19.1848 22.6711 19.5123 22.8865 19.746 23.1829C19.9798 23.4794 20.1061 23.8402 20.107 24.212C20.1079 24.5838 19.9833 24.9451 19.7512 25.2426C19.519 25.5401 19.1926 25.757 18.8234 25.85L18.8124 25.853C18.4477 25.9727 18.1352 26.2072 17.9309 26.5211C17.7266 26.835 17.6438 27.2086 17.696 27.5749C17.7483 27.9411 17.9323 28.2791 18.2156 28.5297C18.4988 28.7803 18.8638 28.9281 19.2445 28.946L19.2755 28.948C19.6439 28.9621 19.9971 29.1105 20.2682 29.3649C20.5392 29.6193 20.7096 29.9627 20.7486 30.3311C20.7875 30.6996 20.6922 31.0701 20.4792 31.3766C20.2662 31.6831 19.9501 31.9032 19.5915 31.997H19.5795C19.2101 32.0891 18.8826 32.3045 18.6488 32.6009C18.415 32.8974 18.2888 33.2582 18.2879 33.63C18.287 34.0018 18.4116 34.3631 18.6437 34.6606C18.8759 34.9581 19.2023 35.175 19.5715 35.268L19.5825 35.271C19.9472 35.3907 20.2597 35.6253 20.4641 35.9392C20.6684 36.253 20.7511 36.6267 20.6989 36.9929C20.6466 37.3591 20.4626 37.6972 20.1794 37.9478C19.8961 38.1984 19.5311 38.3461 19.1504 38.364L19.1194 38.366C18.751 38.38 18.3978 38.5283 18.1268 38.7827C17.8558 39.0371 17.6854 39.3805 17.6464 39.749C17.6075 40.1174 17.7028 40.4879 17.9158 40.7944C18.1288 41.1009 18.4449 41.321 18.8034 41.415H18.8154" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.20711 16H5.41421C5.149 16 5 15.851 5 15.5858V12.7929" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12.7929 5H15.5858C15.851 5 16 5.14899 16 5.41421V8.20711" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="w-12 h-12 rounded-full gradient-bg shadow-md flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12.5 4.368C12.345 4.33931 12.1732 4.31775 12 4.31775C11.8268 4.31775 11.655 4.33931 11.5 4.368" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.36816 11.5C4.33948 11.655 4.31792 11.8268 4.31792 12C4.31792 12.1732 4.33948 12.345 4.36816 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.5 19.632C11.655 19.6607 11.8268 19.6822 12 19.6822C12.1732 19.6822 12.345 19.6607 12.5 19.632" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19.6328 12.5C19.6615 12.345 19.683 12.1732 19.683 12C19.683 11.8268 19.6615 11.655 19.6328 11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.5 5.56814L7 5.06814" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.56787 7.5L5.06787 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.56787 16.5L5.06787 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.5 18.4321L7 18.9321" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16.5 18.4321L17 18.9321" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.4312 16.5L18.9312 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.4312 7.5L18.9312 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16.5 5.56814L17 5.06814" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.002 21.041C17.524 21.041 22.002 16.563 22.002 11.041C22.002 5.51901 17.524 1.04101 12.002 1.04101C6.47901 1.04101 2.00201 5.51901 2.00201 11.041C2.00201 12.571 2.33001 14.034 2.93001 15.356L2.00201 19.041L5.83001 18.125C7.16001 18.704 9.00201 19.041 10.002 19.041" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.002 15.041C17.002 15.327 16.937 15.605 16.819 15.864C16.701 16.122 16.532 16.356 16.323 16.545C16.043 16.815 15.733 17.003 15.392 17.111C15.052 17.219 14.692 17.274 14.312 17.274H11.492C9.85201 17.274 8.44201 16.885 7.25201 16.108C6.06201 15.33 5.10201 14.273 4.37201 12.936C3.64201 11.599 3.27201 10.119 3.27201 8.49699C3.27201 7.44499 3.45201 6.45099 3.81201 5.51599C4.17201 4.58199 4.70201 3.74299 5.39201 3.00299C6.08201 2.26299 6.87201 1.67099 7.76201 1.22699C8.65201 0.783988 9.63201 0.561988 10.702 0.561988C11.962 0.561988 13.102 0.851988 14.122 1.43099C15.142 2.01099 15.962 2.81099 16.582 3.83099C17.202 4.85099 17.512 6.03099 17.512 7.37099C17.512 8.51099 17.272 9.52199 16.792 10.402C16.312 11.282 15.692 11.962 14.932 12.442C14.172 12.922 13.342 13.162 12.442 13.162C11.852 13.162 11.312 13.032 10.822 12.772C10.332 12.512 9.98201 12.152 9.78201 11.692C9.55201 12.022 9.29201 12.312 9.00201 12.562C8.71201 12.812 8.35201 12.937 7.92201 12.937C7.33201 12.937 6.84201 12.722 6.45201 12.292C6.06201 11.862 5.87201 11.312 5.87201 10.642C5.87201 10.072 6.05201 9.51199 6.41201 8.96199C6.77201 8.41199 7.25201 7.97199 7.85201 7.64199C8.45201 7.31199 9.10201 7.14699 9.80201 7.14699C10.462 7.14699 11.042 7.30199 11.542 7.61199C12.042 7.92199 12.422 8.32199 12.682 8.81199L13.282 7.46199H14.932L13.532 10.952C13.412 11.252 13.352 11.507 13.352 11.717C13.352 11.957 13.412 12.137 13.532 12.257C13.652 12.377 13.812 12.437 14.012 12.437C14.292 12.437 14.572 12.327 14.852 12.107C15.132 11.887 15.362 11.571 15.542 11.161C15.722 10.751 15.812 10.261 15.812 9.69199C15.812 8.69199 15.592 7.83199 15.152 7.11199C14.712 6.39199 14.092 5.84199 13.292 5.46199C12.492 5.08199 11.582 4.89199 10.572 4.89199C9.52201 4.89199 8.57201 5.11699 7.72201 5.56699C6.87201 6.01699 6.20201 6.65699 5.72201 7.48699C5.24201 8.31699 5.00201 9.27199 5.00201 10.352C5.00201 11.542 5.26201 12.572 5.78201 13.442C6.30201 14.312 7.03201 14.977 7.97201 15.437C8.91201 15.897 10.002 16.127 11.242 16.127H14.402C14.622 16.127 14.822 16.207 15.002 16.367C15.182 16.527 15.282 16.707 15.302 16.907" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIBusinessSection;
