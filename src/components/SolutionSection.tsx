
import React from 'react';

export const SolutionSection = () => {
  const methodPoints = [
    "Aulas focadas em situações da vida real",
    "Prática de conversação desde o primeiro dia",
    "Conteúdo pensado para brasileiros, atacando as maiores dificuldades",
    "Suporte direto com o professor Guilherme"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-landing-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-landing-text mb-6">
            A ponte para a sua fluência se chama <span className="text-landing-primary">Método Santiago</span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Depois de anos ensinando inglês e observando as dificuldades específicas dos brasileiros, 
            desenvolvi um método único que foca no que realmente importa: <strong>falar inglês com confiança na vida real</strong>. 
            Sem enrolação, sem teoria desnecessária, apenas aprendizagem prática que funciona.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {methodPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-landing-accent text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <p className="text-gray-700 font-medium">{point}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-landing-primary text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Por que funciona?</h3>
            <p className="text-blue-100 leading-relaxed">
              O Método Santiago foi desenvolvido especificamente para brasileiros, atacando as principais 
              dificuldades que enfrentamos ao aprender inglês. Ao invés de focar apenas na gramática, 
              priorizamos a comunicação real e a confiança para falar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
