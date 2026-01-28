import { Button } from "@/components/ui/button";
import React from "react";

const GetStartedSection = () => {
  return (
    <section
      id="get-started"
      className="bg-primary rounded-xl shadow-md dark:bg-primary-dark"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center text-primary-foreground py-16 px-8 sm:px-16 lg:px-32 rounded-xl text-center gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Kontrolü ele almaya hazır mısınız?
        </h1>
        <p className="text-primary-foreground/80 text-sm max-w-2xl">
          Finanslarını FaturaMate ile yöneten binlerce kullanıcıya katılın.
          Gelir ve Gider takibini daha kolay ve hızlı bir şekilde yönetin.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button className="bg-background text-primary shadow-md hover:bg-background transition-transform duration-300 hover:scale-105 cursor-pointer">
            Şimdi Başlayın
          </Button>
          <Button className="bg-transparent text-primary-foreground border border-primary/40 shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer">
            Uygulamayı İndirin
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
