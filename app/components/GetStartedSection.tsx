import { Button } from "@/components/ui/button";
import React from "react";

const GetStartedSection = () => {
  return (
    <section id="get-started" className="bg-primary rounded-xl shadow-md">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center text-white py-16 px-32 rounded-xl text-center gap-4">
        <h1 className="text-4xl font-bold">
          Kontrolü ele almaya hazır mısınız?
        </h1>
        <p className="text-gray-200 text-sm">
          Finanslarını FaturaMate ile yöneten binlerce kullanıcıya katılın.
          Gelir ve Gider takibini daha kolay ve hızlı bir şekilde yönetin.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-white text-primary shadow-md hover:bg-white transition-transform duration-300 hover:scale-105 cursor-pointer">
            Şimdi Başlayın
          </Button>
          <Button className="bg-transparent text-white border border-primary/50 shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer">
            Uygulamayı İndirin
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
