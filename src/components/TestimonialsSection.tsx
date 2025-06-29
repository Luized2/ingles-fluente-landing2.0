
import React from 'react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mariana L.",
      role: "Advogada",
      content: "Eu tinha pavor de falar em reuniões. O método do Guilherme me deu a técnica e a confiança que eu precisava. Hoje, lidero projetos com equipes internacionais.",
      rating: 5
    },
    {
      name: "Carlos R.",
      role: "Engenheiro",
      content: "Consegui uma promoção para a matriz da empresa nos EUA. Sem o curso do Guilherme, isso seria impossível. O método realmente funciona!",
      rating: 5
    },
    {
      name: "Amanda S.",
      role: "Médica",
      content: "Finalmente posso assistir séries sem legenda e conversar com colegas estrangeiros nos congressos. Minha vida profissional mudou completamente.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-landing-text mb-4">
            Veja quem já <span className="text-landing-accent">destravou o inglês</span> com o Professor Guilherme
          </h2>
          <p className="text-lg text-gray-600">
            Mais de 5.000 alunos já transformaram suas vidas
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-landing-text">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
