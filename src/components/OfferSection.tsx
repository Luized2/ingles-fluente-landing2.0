import React from "react";
import { Button } from "./ui/button";
import { Check, Star, Shield, CreditCard, Clock } from "lucide-react";

export const OfferSection = () => {
  const courseIncludes = [
    "Acesso Vitalício ao Curso Completo",
    "Módulos do Básico ao Avançado",
    "Aulas de Conversação em Grupo",
    "Material de Apoio em PDF e Áudio",
    "Comunidade Exclusiva de Alunos",
    "Suporte Direto com o Professor",
    "Certificado de Conclusão",
    "Garantia de 30 dias",
  ];

  const handlePurchase = () => {
    // Scroll para o anchor de pagamento ou integração
    const paymentSection = document.getElementById("payment-anchor");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Integração com plataforma de pagamento
      alert("Redirecionando para pagamento...");
    }
  };

  return (
    <section
      id="offer-section"
      className="py-16 bg-gradient-to-br from-landing-primary to-blue-800 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sua jornada para a fluência{" "}
            <span className="text-landing-accent">começa agora</span>
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Tudo que você precisa para dominar o inglês de uma vez por todas
          </p>
        </div>

        {/* Grid responsivo: 1 coluna no mobile, 2 em desktops */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Lista de Conteúdo do Curso */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
              O que você vai receber:
            </h3>

            <div className="space-y-4">
              {courseIncludes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm"
                >
                  <div className="bg-landing-accent w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-base md:text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black p-6 rounded-lg mt-8">
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-6 h-6" />
                <span className="font-bold text-xl">BÔNUS EXCLUSIVO:</span>
              </div>
              <p className="font-semibold text-lg">
                Módulo de Inglês para Entrevistas de Emprego
              </p>
              <p className="text-sm mt-2 opacity-80">
                Prepare-se para conquistar as melhores oportunidades
                internacionais
              </p>
            </div>
          </div>

          {/* Seção de Preços e CTA */}
          <div className="bg-white text-landing-text p-6 md:p-8 rounded-2xl shadow-2xl">
            <div id="payment-anchor" className="text-center mb-8">
              <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                OFERTA LIMITADA
              </div>

              <div className="mb-4">
                <p className="text-gray-500 text-lg line-through mb-2">
                  De R$ 1.597,00
                </p>
                <div className="text-4xl md:text-5xl font-bold text-landing-primary mb-2">
                  12x de <span className="text-landing-accent">R$ 97,14</span>
                </div>
                <p className="text-lg md:text-xl text-gray-600 mb-4">
                  ou R$ 997,00 à vista
                </p>
                <p className="text-sm text-red-600 font-semibold">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Restam apenas 48 horas para esta oferta!
                </p>
              </div>
            </div>

            <Button
              onClick={handlePurchase}
              className="w-full bg-landing-accent hover:bg-green-600 text-white font-bold text-lg md:text-xl py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-6"
            >
              🚀 GARANTIR MINHA VAGA AGORA
            </Button>

            <div className="space-y-3 text-center text-sm text-gray-600 mb-6">
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Compra 100% Segura e Protegida</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>30 Dias de Garantia Incondicional</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CreditCard className="w-4 h-4 text-green-500" />
                <span>Parcelamento sem juros no cartão</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-xs text-gray-500 mb-2">
                ⚡ Acesso imediato após a confirmação do pagamento
              </p>
              <p className="text-xs text-gray-500">
                💬 Suporte 24/7 para todas as suas dúvidas
              </p>
            </div>
          </div>
        </div>

        {/* CTA Final Adicional */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Não deixe para amanhã o que pode mudar sua vida hoje!
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              Milhares de alunos já transformaram suas vidas com o Inglês
              Definitivo. Chegou a sua vez de fazer parte dessa comunidade de
              sucesso.
            </p>
            <Button
              onClick={handlePurchase}
              className="bg-landing-accent hover:bg-green-600 text-white font-bold text-lg px-8 py-3 rounded-lg"
            >
              SIM, EU QUERO FALAR INGLÊS!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
