import { SearchIcon, TrendingDown } from "lucide-react";
import React from "react";
import { FaCreditCard, FaFileExcel, FaRobot } from "react-icons/fa";

type FeatureItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: {
    card: string;
    icon: string;
    title: string;
  };
};

const features: FeatureItem[] = [
  {
    title: "Yapay Zeka Desteği",
    description:
      "Akıllı fiş tarama ve yapay zeka desteği ile, finansal tavsiyeler alabilirsiniz.",
    icon: <FaRobot className="text-2xl" />,
    accent: {
      card: "from-emerald-50 via-white to-white",
      icon: "bg-emerald-100 text-emerald-600",
      title: "group-hover/feature:text-emerald-600",
    },
  },
  {
    title: "Borç Takipçisi",
    description:
      "Borç alacak/verecek takibi ile, borçlarınızı daha kolay takip edebilirsiniz. Borçlarınızın ödeme tarihlerini ve miktarını takip edebilirsiniz.",
    icon: <TrendingDown className="text-2xl" />,
    accent: {
      card: "from-blue-50 via-white to-white",
      icon: "bg-blue-100 text-blue-600",
      title: "group-hover/feature:text-blue-600",
    },
  },
  {
    title: "Gelir ve Gider Grafikleri",
    description:
      "Gelir ve giderlerinizi grafiklerle görselleştirerek, finansal durumunuzu daha iyi anlayabilirsiniz.",
    icon: <SearchIcon className="text-2xl" />,
    accent: {
      card: "from-indigo-50 via-white to-white",
      icon: "bg-indigo-100 text-indigo-600",
      title: "group-hover/feature:text-indigo-600",
    },
  },
  {
    title: "Rapor Çıkartma",
    description: "Giderlerinizi PDF, EXCEL ve CSV formatında rapor çıkartabilirsiniz.",
    icon: <FaFileExcel className="text-2xl" />,
    accent: {
      card: "from-amber-50 via-white to-white",
      icon: "bg-amber-100 text-amber-600",
      title: "group-hover/feature:text-amber-600",
    },
  },
  {
    title: "Hesap Kartı Ekleme",
    description:
      "Hesap kartlarınızı ekleyerek, hesap durumunuzu, gelir ve giderlerinize göre kolayca takip edebilirsiniz.",
    icon: <FaCreditCard className="text-2xl" />,
    accent: {
      card: "from-rose-50 via-white to-white",
      icon: "bg-rose-100 text-rose-600",
      title: "group-hover/feature:text-rose-600",
    },
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="bg-blue-300/20 py-12 sm:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center gap-3 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-black sm:text-3xl">
            Finansal Yönetim&apos;in Geleceğini Deneyimleyin
          </h2>
          <p className="text-sm text-gray-500 sm:text-base">
            Yapay zeka destekli uygulamamızın, finansal kaderiniz üzerinde tam
            kontrol sağlamınız için hassasiyet ile tasarlanmıştır.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 group">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group/feature flex h-full flex-col items-start justify-between gap-4 rounded-2xl border border-white/60 bg-linear-to-br p-8 shadow-sm transition-all duration-300 ${
                feature.accent.card
              } group-hover:opacity-60 hover:-translate-y-1 hover:shadow-lg hover:opacity-100`}
            >
              <div className={`rounded-xl p-2 ${feature.accent.icon}`}>
                {feature.icon}
              </div>
              <h3
                className={`text-md font-bold text-black transition-colors ${feature.accent.title}`}
              >
                {feature.title}
              </h3>
              <p className="text-xs text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
