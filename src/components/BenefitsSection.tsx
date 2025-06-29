import React from "react";
import { TrendingUp, Plane, BookOpen, Users } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Carreira sem Fronteiras",
      description:
        "Acesse as melhores vagas, promoções e oportunidades em empresas globais.",
    },
    {
      icon: Plane,
      title: "Viagens Inesquecíveis",
      description:
        "Viaje com liberdade e independência, vivendo uma imersão cultural completa.",
    },
    {
      icon: BookOpen,
      title: "Acesso ao Conhecimento",
      description:
        "Consuma livros, filmes, artigos e cursos em sua língua original, sem barreiras.",
    },
    {
      icon: Users,
      title: "Conexões Globais",
      description:
        "Conecte-se com pessoas do mundo todo e expanda sua visão de mundo.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-landing-text mb-12">
          O que você vai conquistar ao dominar o inglês:
        </h2>

        {/* Grid responsivo: 1 coluna no mobile, 2 em tablets e 4 em desktops */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-landing-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-landing-primary" />
                </div>
                <h3 className="text-xl font-semibold text-landing-text mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
