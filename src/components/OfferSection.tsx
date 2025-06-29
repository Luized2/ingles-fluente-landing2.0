import React, { useState, useEffect } from "react";
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
  ];

  // --- LÓGICA DO CONTADOR REGRESSIVO ---
  const calculateTimeLeft = () => {
    // A data final da oferta (ajuste conforme necessário)
    const difference = +new Date("2025-07-04T23:59:59") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft as {
      dias: number;
      horas: number;
      minutos: number;
      segundos: number;
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Limpa o timer quando o componente é desmontado
    return () => clearTimeout(timer);
  });
  // --- FIM DA LÓGICA DO CONTADOR ---

  const handlePurchase = () => {
    // Ação de compra
    alert("Redirecionando para pagamento seguro...");
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
            Tudo que você precisa para dominar o inglês de uma vez por todas,
            com um método que funciona.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Lista de Conteúdo do Curso */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
              Ao se inscrever hoje, você recebe:
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

            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black p-6 rounded-lg mt-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-6 h-6" />
                <span className="font-bold text-xl">BÔNUS EXCLUSIVO HOJE:</span>
              </div>
              <p className="font-semibold text-lg">
                Módulo de Inglês para Entrevistas de Emprego
              </p>
              <p className="text-sm mt-2 opacity-80">
                Prepare-se para conquistar as melhores vagas internacionais e se
                destacar na sua carreira.
              </p>
            </div>
          </div>

          {/* Seção de Preços e CTA */}
          <div className="bg-white text-landing-text p-6 md:p-8 rounded-2xl shadow-2xl sticky top-8">
            <div id="payment-anchor" className="text-center mb-8">
              <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block animate-pulse">
                OFERTA POR TEMPO LIMITADO
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

                {/* Contador Regressivo */}
                <div className="text-sm text-red-600 font-semibold p-2 bg-red-50 rounded-md">
                  <Clock className="w-4 h-4 inline mr-1" />A oferta termina em:
                  <span className="font-mono ml-1">
                    {String(timeLeft.dias).padStart(2, "0")}d{" "}
                    {String(timeLeft.horas).padStart(2, "0")}h{" "}
                    {String(timeLeft.minutos).padStart(2, "0")}m{" "}
                    {String(timeLeft.segundos).padStart(2, "0")}s
                  </span>
                </div>
              </div>
            </div>

            <Button
              onClick={handlePurchase}
              className="w-full bg-landing-accent hover:bg-green-600 text-white font-bold text-lg md:text-xl py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-6"
            >
              🚀 QUERO MINHA VAGA AGORA!
            </Button>

            <div className="space-y-3 text-center text-sm text-gray-600 mb-6">
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Compra 100% Segura e Protegida</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CreditCard className="w-4 h-4 text-green-500" />
                <span>Parcelamento em até 12x sem juros</span>
              </div>
            </div>

            {/* Selo de Garantia */}
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg text-left">
              <img
                src="/Selogarantia.png"
                alt="Selo de Garantia de 30 Dias"
                className="w-16 h-16 flex-shrink-0 object-contain"
              />
              <div>
                <h4 className="font-bold">Garantia Incondicional de 30 Dias</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Seu risco é zero. Se por qualquer motivo você não gostar do
                  curso, devolvemos 100% do seu dinheiro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
