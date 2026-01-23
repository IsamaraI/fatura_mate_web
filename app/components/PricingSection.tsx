import React from "react";
import { FaCheckCircle } from "react-icons/fa";

type Plan = {
  name: string;
  description: string;
  price: React.ReactNode;
  features: string[];
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Ücretsiz",
    description: "Yeni başlayanlar için temel özellikler",
    price: (
      <span className="text-2xl font-bold">
        ₺0 <span className="text-sm font-light text-gray-500">/ay</span>
      </span>
    ),
    features: [
      "Günlük ücretsiz 2 fiş tarama",
      "Gelir ve gider takibi",
      "Borç alacak/verecek takibi",
      "Sınırlı grafik özelliği",
    ],
  },
  {
    name: "Plus Planı",
    description: "Finansını ciddiye alanlar için ekstra özellikler",
    price: (
      <span className="text-2xl font-bold">
        ₺49,99 <span className="text-sm font-light text-gray-500">/ay</span>
      </span>
    ),
    features: [
      "Günlük ücretsiz 10 fiş tarama",
      "Gelir ve gider takibi",
      "Borç alacak/verecek takibi",
      "Ekstra grafik özelliği",
      "Günlük 3 rapor çıkartma (PDF, EXCEL ve CSV formatında)",
      "Öncelikli destek hattı",
    ],
  },
  {
    name: "Pro Planı",
    description:
      "Finansını ciddiye alanlar için ekstra özellikler ve Yapay Zeka Desteği ile sınırsız özellikler",
    price: (
      <div className="flex flex-col gap-2">
        <span className="text-lg font-semibold text-gray-700">₺499,99 /ay</span>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
            Yıllık %17 tasarruf
          </span>
          <span className="text-sm text-gray-400 line-through">₺5.999,99</span>
          <span className="text-xl font-bold text-black">₺4.999,99</span>
          <span className="text-xs font-light text-gray-500">/yıl</span>
        </div>
      </div>
    ),
    features: [
      "Günlük sınırsız fiş tarama",
      "Gelir ve gider takibi",
      "Borç alacak/verecek takibi",
      "Sınırsız grafik özelliği",
      "Sınırsız rapor çıkartma (PDF, EXCEL ve CSV formatında)",
      "Sınırsız destek hattı",
      "FaturaMate Yapay Zeka Desteği",
    ],
    highlight: true,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-primary/20 py-12 sm:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-bold text-black sm:text-3xl">
            Fiyatlandırma
          </h2>
          <p className="text-sm text-gray-500 sm:text-base">
            Finansal hedeflerinize uygun planı seçin. İstediğiniz zaman iptal
            edebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col gap-4 rounded-xl border p-6 shadow-sm hover:bg-primary/10 hover:shadow-md transition-all duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? "border-primary/40 border-2 bg-white shadow-md"
                  : "border-gray-100 bg-white"
              }`}
            >
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-medium text-black sm:text-xl">
                  {plan.name}
                </h4>
                <div>{plan.price}</div>
                <h6 className="text-xs text-gray-500">{plan.description}</h6>
              </div>
              <div className="flex flex-col items-start gap-2">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <FaCheckCircle className="mt-0.5 shrink-0 text-xs text-primary sm:text-sm" />
                    <p className="text-xs text-gray-500">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
