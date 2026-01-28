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
      card: "from-emerald-50 via-white to-white dark:from-emerald-900/40 dark:via-slate-900 dark:to-slate-950",
      icon: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300",
      title:
        "group-hover/feature:text-emerald-600 dark:group-hover/feature:text-emerald-300",
    },
  },
  {
    title: "Borç Takipçisi",
    description:
      "Borç alacak/verecek takibi ile, borçlarınızı daha kolay takip edebilirsiniz. Borçlarınızın ödeme tarihlerini ve miktarını takip edebilirsiniz.",
    icon: <TrendingDown className="text-2xl" />,
    accent: {
      card: "from-blue-50 via-white to-white dark:from-sky-900/40 dark:via-slate-900 dark:to-slate-950",
      icon: "bg-blue-100 text-blue-600 dark:bg-sky-900/40 dark:text-sky-300",
      title:
        "group-hover/feature:text-blue-600 dark:group-hover/feature:text-sky-300",
    },
  },
  {
    title: "Gelir ve Gider Grafikleri",
    description:
      "Gelir ve giderlerinizi grafiklerle görselleştirerek, finansal durumunuzu daha iyi anlayabilirsiniz.",
    icon: <SearchIcon className="text-2xl" />,
    accent: {
      card: "from-indigo-50 via-white to-white dark:from-indigo-900/40 dark:via-slate-900 dark:to-slate-950",
      icon: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300",
      title:
        "group-hover/feature:text-indigo-600 dark:group-hover/feature:text-indigo-300",
    },
  },
  {
    title: "Rapor Çıkartma",
    description:
      "Giderlerinizi PDF, EXCEL ve CSV formatında rapor çıkartabilirsiniz.",
    icon: <FaFileExcel className="text-2xl" />,
    accent: {
      card: "from-amber-50 via-white to-white dark:from-amber-900/40 dark:via-slate-900 dark:to-slate-950",
      icon: "bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-300",
      title:
        "group-hover/feature:text-amber-600 dark:group-hover/feature:text-amber-300",
    },
  },
  {
    title: "Hesap Kartı Ekleme",
    description:
      "Hesap kartlarınızı ekleyerek, hesap durumunuzu, gelir ve giderlerinize göre kolayca takip edebilirsiniz.",
    icon: <FaCreditCard className="text-2xl" />,
    accent: {
      card: "from-rose-50 via-white to-white dark:from-rose-900/40 dark:via-slate-900 dark:to-slate-950",
      icon: "bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-300",
      title:
        "group-hover/feature:text-rose-600 dark:group-hover/feature:text-rose-300",
    },
  },
];

const FeatureSection = () => {
  return (
    <section
      id="features"
      className="bg-blue-300/20 py-12 sm:py-16 dark:bg-slate-900/60"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center gap-3 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Finansal Yönetim&apos;in Geleceğini Deneyimleyin
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Yapay zeka destekli uygulamamızın, finansal kaderiniz üzerinde tam
            kontrol sağlamınız için hassasiyet ile tasarlanmıştır.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 group">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group/feature flex h-full flex-col items-start justify-between gap-4 rounded-2xl bg-linear-to-br p-8 shadow-sm transition-all duration-300 ${
                feature.accent.card
              } group-hover:opacity-60 hover:-translate-y-1 hover:shadow-lg hover:opacity-100`}
            >
              <div className={`rounded-xl p-2 ${feature.accent.icon}`}>
                {feature.icon}
              </div>
              <h3
                className={`text-md font-bold text-foreground transition-colors ${feature.accent.title}`}
              >
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
