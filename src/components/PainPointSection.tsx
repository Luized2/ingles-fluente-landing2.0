import React from "react";
import { Briefcase, Speech, Globe, GraduationCap } from "lucide-react";

export const PainPointSection = () => {
  const painPoints = [
    {
      icon: Briefcase,
      question: "Já perdeu uma oportunidade de carreira por não saber inglês?",
    },
    {
      icon: Speech,
      question:
        "Sente vergonha ou medo na hora de falar e acaba não dizendo nada?",
    },
    {
      icon: Globe,
      question:
        "Sonha em viajar o mundo sem depender de tradutores e se conectando de verdade com as pessoas?",
    },
    {
      icon: GraduationCap,
      question:
        "Sente que seus estudos não avançam e que os métodos tradicionais não funcionam para você?",
    },
  ];

  return (
    <section className="py-16 bg-white">
      {" "}
      {/* Padding ajustado */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          {" "}
          {/* Margem ajustada */}
          <h2 className="text-3xl md:text-4xl font-bold text-landing-text mb-4">
            Você se sente <span className="text-red-500">travado</span> pelo
            inglês?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Se você se identificou com alguma dessas situações, não se preocupe.
            Você não está sozinho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-red-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <point.icon className="w-8 h-8 text-red-500" />
              </div>
              <p className="text-center text-gray-700 font-medium leading-relaxed">
                {point.question}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
