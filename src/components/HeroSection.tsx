import React from "react";
import fotoGuilherme from "../assets/foto-guilherme.jpg";
import { Button } from "./ui/button";

export const HeroSection = () => {
  const handleCTAClick = () => {
    document
      .getElementById("offer-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // Ajuste o padding para telas menores
    <section className="relative bg-gradient-to-br from-landing-bg to-blue-50 py-16 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Mude para uma coluna por padrão e duas em telas grandes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Ajuste o tamanho da fonte para mobile */}
            <h1 className="text-3xl md:text-5xl font-bold text-landing-text leading-tight mb-6">
              Destrave seu potencial.{" "}
              <span className="text-landing-primary">Fale inglês</span> com a
              confiança que você nunca teve.
            </h1>

            {/* Ajuste o tamanho da fonte do parágrafo */}
            <p className="text-md md:text-xl text-gray-600 mb-8 leading-relaxed">
              O método prático e definitivo do professor Guilherme Santiago para
              você dominar o idioma e conquistar o mundo.
            </p>

            <Button
              onClick={handleCTAClick}
              // Ajuste o tamanho do botão para mobile
              className="w-full md:w-auto bg-landing-accent hover:bg-green-600 text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              QUERO SER FLUENTE AGORA
            </Button>

            {/* Centralize os itens de garantia no mobile */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <span className="text-green-500">✓</span>
                <span>Compra 100% Segura</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-green-500">✓</span>
                <span>7 Dias de Garantia</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-landing-primary to-blue-600 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <img
                    src={fotoGuilherme}
                    alt="Foto de Guilherme Santiago"
                    className="w-70 h-70 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-lg text-gray-800">
                    Guilherme Santiago
                  </h3>
                  <p className="text-gray-600">Professor de Inglês</p>
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-landing-accent text-white p-3 rounded-full shadow-lg">
              <span className="text-sm font-semibold">+5000 alunos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
