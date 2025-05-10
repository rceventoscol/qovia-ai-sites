
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden relative" id="hero">
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tu página web con <span className="gradient-text">cerebro</span>.
              <br />
              Diseño + <span className="gradient-text">IA</span> para negocios locales.
            </h1>
            <p className="text-xl mb-8 text-gray-700 max-w-lg">
              En QOVIA transformamos tu sitio en una máquina de agendamiento, ventas y atención al cliente — sin que muevas un dedo.
            </p>
            <Button 
              size="lg" 
              className="gradient-bg hover:opacity-90 transition-opacity text-lg py-6"
              onClick={() => window.open("https://wa.me/573165875372", "_blank")}
            >
              Solicita tu demo ahora →
            </Button>
          </div>
          
          <div className="md:w-1/2 relative">
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full h-[500px] rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 shadow-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-qovia-blue to-qovia-purple flex items-center justify-center animate-pulse-slow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <circle cx="12" cy="12" r="4"></circle>
                      </svg>
                    </div>
                    <div className="text-xl font-medium text-gray-700">Sitio web interactivo</div>
                    <div className="mt-6 flex flex-col gap-3">
                      <div className="flex gap-2">
                        <div className="h-10 w-10 rounded-full bg-blue-200 animate-float"></div>
                        <div className="flex-1 h-10 bg-blue-100 rounded-lg"></div>
                      </div>
                      <div className="flex gap-2 ml-12">
                        <div className="h-10 w-10 rounded-full bg-purple-200 animate-float" style={{ animationDelay: '1s' }}></div>
                        <div className="flex-1 h-10 bg-purple-100 rounded-lg"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-10 w-10 rounded-full bg-blue-200 animate-float" style={{ animationDelay: '2s' }}></div>
                        <div className="flex-1 h-10 bg-blue-100 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6 flex space-x-3">
                  <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.002 21.041C17.524 21.041 22.002 16.563 22.002 11.041C22.002 5.51901 17.524 1.04101 12.002 1.04101C6.47901 1.04101 2.00201 5.51901 2.00201 11.041C2.00201 12.571 2.33001 14.034 2.93001 15.356L2.00201 19.041L5.83001 18.125C7.16001 18.704 9.00201 19.041 10.002 19.041" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.002 15.041C17.002 15.327 16.937 15.605 16.819 15.864C16.701 16.122 16.532 16.356 16.323 16.545C16.043 16.815 15.733 17.003 15.392 17.111C15.052 17.219 14.692 17.274 14.312 17.274H11.492C9.85201 17.274 8.44201 16.885 7.25201 16.108C6.06201 15.33 5.10201 14.273 4.37201 12.936C3.64201 11.599 3.27201 10.119 3.27201 8.49699C3.27201 7.44499 3.45201 6.45099 3.81201 5.51599C4.17201 4.58199 4.70201 3.74299 5.39201 3.00299C6.08201 2.26299 6.87201 1.67099 7.76201 1.22699C8.65201 0.783988 9.63201 0.561988 10.702 0.561988C11.962 0.561988 13.102 0.851988 14.122 1.43099C15.142 2.01099 15.962 2.81099 16.582 3.83099C17.202 4.85099 17.512 6.03099 17.512 7.37099C17.512 8.51099 17.272 9.52199 16.792 10.402C16.312 11.282 15.692 11.962 14.932 12.442C14.172 12.922 13.342 13.162 12.442 13.162C11.852 13.162 11.312 13.032 10.822 12.772C10.332 12.512 9.98201 12.152 9.78201 11.692C9.55201 12.022 9.29201 12.312 9.00201 12.562C8.71201 12.812 8.35201 12.937 7.92201 12.937C7.33201 12.937 6.84201 12.722 6.45201 12.292C6.06201 11.862 5.87201 11.312 5.87201 10.642C5.87201 10.072 6.05201 9.51199 6.41201 8.96199C6.77201 8.41199 7.25201 7.97199 7.85201 7.64199C8.45201 7.31199 9.10201 7.14699 9.80201 7.14699C10.462 7.14699 11.042 7.30199 11.542 7.61199C12.042 7.92199 12.422 8.32199 12.682 8.81199L13.282 7.46199H14.932L13.532 10.952C13.412 11.252 13.352 11.507 13.352 11.717C13.352 11.957 13.412 12.137 13.532 12.257C13.652 12.377 13.812 12.437 14.012 12.437C14.292 12.437 14.572 12.327 14.852 12.107C15.132 11.887 15.362 11.571 15.542 11.161C15.722 10.751 15.812 10.261 15.812 9.69199C15.812 8.69199 15.592 7.83199 15.152 7.11199C14.712 6.39199 14.092 5.84199 13.292 5.46199C12.492 5.08199 11.582 4.89199 10.572 4.89199C9.52201 4.89199 8.57201 5.11699 7.72201 5.56699C6.87201 6.01699 6.20201 6.65699 5.72201 7.48699C5.24201 8.31699 5.00201 9.27199 5.00201 10.352C5.00201 11.542 5.26201 12.572 5.78201 13.442C6.30201 14.312 7.03201 14.977 7.97201 15.437C8.91201 15.897 10.002 16.127 11.242 16.127H14.402C14.622 16.127 14.822 16.207 15.002 16.367C15.182 16.527 15.282 16.707 15.302 16.907" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 2V6" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 2V6" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 10H21" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 14H8.01" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 14H12.01" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 14H16.01" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 18H8.01" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 18H12.01" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 18H16.01" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="w-12 h-12 rounded-full gradient-bg shadow-md flex items-center justify-center animate-pulse-slow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 18V6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.63599 21.1996C4.60799 20.8596 4.06799 19.6196 4.40999 18.5896C4.57499 18.0596 4.91799 17.6996 5.33799 17.4696C6.00799 17.1196 6.80999 17.2096 7.39799 17.6996L12.75 21.9996C13.45 18.5096 15.66 13.7396 20.11 11.9996" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20.11 5.99965C15.66 4.25965 13.45 0 12.75 0L7.39799 4.29965C6.80999 4.78965 6.00799 4.87965 5.33799 4.52965C4.40099 3.99965 4.06999 2.80965 4.60999 1.87965C4.86799 1.44965 5.25599 1.16965 5.67799 1.02965" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -left-20 -bottom-10 w-48 h-48 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
