import Image from "next/image";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-28 py-14 sm:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div className="flex w-full flex-col gap-6 text-center lg:w-1/2 lg:text-left">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary animate-pulse lg:mx-0">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Yapay Zeka Destekli Finans Takibi v1.0
          </div>
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Paranızı
            <span className="block text-primary">Yapay Zeka</span>
            ile Yönetin
          </h1>
          <p className="text-sm text-muted-foreground sm:text-base">
            FaturaMate, harcamalarınızı izlemek, borçlarınızı yönetmek ve
            varlıklarınızı otomatik olarak büyütmek için gelişmiş yapay zeka
            kullanarak finansal hayatınızı basitleştirir. Profesyonel düzeyde
            fintech araçlarını avucunuzun içinde deneyimleyin.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-secondary px-4 py-3 shadow-sm transition-all duration-300 hover:bg-primary/20 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                <span className="text-xs font-semibold">
                  <FaApple size={16} />
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] text-muted-foreground">
                  İndirin
                </span>
                <span className="text-sm font-semibold text-foreground">
                  App Store
                </span>
              </div>
            </button>
            <button
              type="button"
              className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-secondary px-4 py-3 shadow-sm transition-all duration-300 hover:bg-primary/20 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                <span className="text-xs font-semibold">
                  <FaGooglePlay size={16} />
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] text-muted-foreground">
                  İndirin
                </span>
                <span className="text-sm font-semibold text-foreground">
                  Google Play
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="flex w-full items-center justify-center lg:w-1/2 py-10">
          {/* Telefon Dış Çerçevesi */}
          <div className="relative w-full max-w-[300px] aspect-[9/19.5] rounded-[3rem] border-12 border-gray-900 bg-gray-900 shadow-2xl ring-1 ring-white/10">
            {/* Çentik (Opsiyonel - Daha gerçekçi durması için) */}
            <div className="absolute top-0 left-1/2 z-10 h-6 w-1/3 -translate-x-1/2 rounded-b-2xl bg-gray-900"></div>

            {/* Ekran İçeriği */}
            <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-black">
              <Image
                src="/faturamate_dashboard.jpeg"
                alt="FaturaMate mobil gösterge paneli"
                fill // Next.js'in görseli kapsayıcıya doldurmasını sağlar
                className="object-cover" // ÖNEMLİ: Görseli esnetmeden boşlukları doldurur
                sizes="(max-width: 768px) 100vw, 300px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
