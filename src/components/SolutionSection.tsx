import React from "react";
import { Target, MessageCircle, BookCheck, UserCheck } from "lucide-react";

export const SolutionSection = () => {
  // Array de pontos do método focado em benefícios
  const methodPoints = [
    {
      icon: Target,
      title: "Foco em Situações Reais",
      description:
        "Aprenda o inglês que você realmente vai usar, desde uma reunião de trabalho até pedir um café em Nova York.",
    },
    {
      icon: MessageCircle,
      title: "Conversação Desde o Dia 1",
      description:
        "Perca o medo de falar praticando desde a primeira aula, ganhando confiança a cada frase.",
    },
    {
      icon: BookCheck,
      title: "Conteúdo para Brasileiros",
      description:
        "Supere as dificuldades mais comuns de brasileiros com um método pensado para você e seu jeito de aprender.",
    },
    {
      icon: UserCheck,
      title: "Suporte Direto e Pessoal",
      description:
        "Tire suas dúvidas diretamente com o professor Guilherme e nunca mais se sinta sozinho no aprendizado.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-landing-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-landing-text mb-6">
            A ponte para a sua fluência se chama{" "}
            <span className="text-landing-primary">Método Santiago</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Depois de anos ensinando e observando as dificuldades específicas
            dos brasileiros, desenvolvi um método que foca no que importa:{" "}
            <strong>falar inglês com confiança na vida real</strong>. Sem
            enrolação, apenas aprendizado prático que funciona.
          </p>
        </div>

        {/* Layout responsivo: 1 coluna no mobile, 2 em telas maiores */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {methodPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="bg-landing-accent text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-landing-text">
                      {point.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-landing-primary text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Por que este método funciona onde outros falham?
            </h3>
            <p className="text-blue-100 leading-relaxed">
              Porque ele foi criado para você. O Método Santiago ataca as
              principais dificuldades que nós, brasileiros, enfrentamos ao
              aprender inglês. Deixamos a gramática excessiva de lado para
              priorizar a comunicação real, a escuta ativa e, principalmente, a
              sua confiança para se expressar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
