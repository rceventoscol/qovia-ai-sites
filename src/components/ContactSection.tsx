
import React from 'react';
import { Button } from "@/components/ui/button";

const ContactSection: React.FC = () => {
  return (
    <section className="py-20" id="contacto">
      <div className="container mx-auto px-4">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <div className="gradient-bg p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para dejar que tu web trabaje por ti?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Agenda una demo gratuita y conoce cómo QOVIA puede transformar tu negocio local con sitios web inteligentes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 transition-colors text-lg"
                onClick={() => window.open("https://wa.me/573165875372", "_blank")}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.002 21.041C17.524 21.041 22.002 16.563 22.002 11.041C22.002 5.51901 17.524 1.04101 12.002 1.04101C6.47901 1.04101 2.00201 5.51901 2.00201 11.041C2.00201 12.571 2.33001 14.034 2.93001 15.356L2.00201 19.041L5.83001 18.125C7.16001 18.704 9.00201 19.041 10.002 19.041" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.002 15.041C17.002 15.327 16.937 15.605 16.819 15.864C16.701 16.122 16.532 16.356 16.323 16.545C16.043 16.815 15.733 17.003 15.392 17.111C15.052 17.219 14.692 17.274 14.312 17.274H11.492C9.85201 17.274 8.44201 16.885 7.25201 16.108C6.06201 15.33 5.10201 14.273 4.37201 12.936C3.64201 11.599 3.27201 10.119 3.27201 8.49699C3.27201 7.44499 3.45201 6.45099 3.81201 5.51599C4.17201 4.58199 4.70201 3.74299 5.39201 3.00299C6.08201 2.26299 6.87201 1.67099 7.76201 1.22699C8.65201 0.783988 9.63201 0.561988 10.702 0.561988C11.962 0.561988 13.102 0.851988 14.122 1.43099C15.142 2.01099 15.962 2.81099 16.582 3.83099C17.202 4.85099 17.512 6.03099 17.512 7.37099C17.512 8.51099 17.272 9.52199 16.792 10.402C16.312 11.282 15.692 11.962 14.932 12.442C14.172 12.922 13.342 13.162 12.442 13.162C11.852 13.162 11.312 13.032 10.822 12.772C10.332 12.512 9.98201 12.152 9.78201 11.692C9.55201 12.022 9.29201 12.312 9.00201 12.562C8.71201 12.812 8.35201 12.937 7.92201 12.937C7.33201 12.937 6.84201 12.722 6.45201 12.292C6.06201 11.862 5.87201 11.312 5.87201 10.642C5.87201 10.072 6.05201 9.51199 6.41201 8.96199C6.77201 8.41199 7.25201 7.97199 7.85201 7.64199C8.45201 7.31199 9.10201 7.14699 9.80201 7.14699C10.462 7.14699 11.042 7.30199 11.542 7.61199C12.042 7.92199 12.422 8.32199 12.682 8.81199L13.282 7.46199H14.932L13.532 10.952C13.412 11.252 13.352 11.507 13.352 11.717C13.352 11.957 13.412 12.137 13.532 12.257C13.652 12.377 13.812 12.437 14.012 12.437C14.292 12.437 14.572 12.327 14.852 12.107C15.132 11.887 15.362 11.571 15.542 11.161C15.722 10.751 15.812 10.261 15.812 9.69199C15.812 8.69199 15.592 7.83199 15.152 7.11199C14.712 6.39199 14.092 5.84199 13.292 5.46199C12.492 5.08199 11.582 4.89199 10.572 4.89199C9.52201 4.89199 8.57201 5.11699 7.72201 5.56699C6.87201 6.01699 6.20201 6.65699 5.72201 7.48699C5.24201 8.31699 5.00201 9.27199 5.00201 10.352C5.00201 11.542 5.26201 12.572 5.78201 13.442C6.30201 14.312 7.03201 14.977 7.97201 15.437C8.91201 15.897 10.002 16.127 11.242 16.127H14.402C14.622 16.127 14.822 16.207 15.002 16.367C15.182 16.527 15.282 16.707 15.302 16.907" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                WhatsApp
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 transition-colors text-lg"
                onClick={() => window.open("https://www.instagram.com", "_blank")}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16 12.207 15.684 13.023 15.121 13.658C14.559 14.293 13.799 14.708 12.969 14.828C12.138 14.947 11.292 14.763 10.588 14.307C9.884 13.852 9.369 13.157 9.138 12.352C8.907 11.547 8.975 10.689 9.331 9.932C9.687 9.175 10.307 8.575 11.07 8.243C11.832 7.91 12.687 7.864 13.48 8.112C14.273 8.359 14.947 8.886 15.38 9.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Instagram
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 transition-colors text-lg"
                onClick={() => window.location.href = "mailto:info@qovia.com"}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
