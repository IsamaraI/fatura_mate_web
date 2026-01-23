import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaMailBulk, FaTwitter, FaWallet } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 shadow-sm">
      <div className="container max-w-8xl mx-auto px-2 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-primary p-2 shadow-sm">
                <FaWallet className="text-white text-md" />
              </div>
              <h1 className="text-lg font-bold text-black">FaturaMate</h1>
            </div>
            <p className="text-gray-500 text-sm">
              Modern bireyler için ve finansal olarak kendini geliştirmek
              isteyenler için akıllı finansal fatura yönetimi.
            </p>
            <div className="flex items-center gap-4">
              <div className="group rounded-full bg-gray-200 p-2 shadow-sm hover:bg-primary transition-all duration-300 cursor-pointer">
                <FaLinkedin className="text-gray-700 text-sm group-hover:text-white transition-all duration-300" />
              </div>
              <div className="group rounded-full bg-gray-200 p-2 shadow-sm hover:bg-primary transition-all duration-300 cursor-pointer">
                <FaInstagram className="text-gray-700 text-sm group-hover:text-white transition-all duration-300" />
              </div>
              <div className="group rounded-full bg-gray-200 p-2 shadow-sm hover:bg-primary transition-all duration-300 cursor-pointer">
                <FaTwitter className="text-gray-700 text-sm group-hover:text-white transition-all duration-300" />
              </div>
              <div className="group rounded-full bg-gray-200 p-2 shadow-sm hover:bg-primary transition-all duration-300 cursor-pointer">
                <FaMailBulk className="text-gray-700 text-sm group-hover:text-white transition-all duration-300" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">  
            <h2 className="text-lg font-bold text-black">Ürün</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-gray-500 text-sm hover:text-primary transition-all duration-300">
                <Link href="/">Özellikler</Link>
              </li>
              <li className="text-gray-500 text-sm hover:text-primary transition-all duration-300">
                <Link href="/">Fiyatlandırma</Link>
              </li>
              <li className="text-gray-500 text-sm hover:text-primary transition-all duration-300">
                <Link href="/">Yenilikler & Güncellemeler</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">  
            <h2 className="text-lg font-bold text-black">Kurumsal</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-gray-500 text-sm hover:text-primary transition-all duration-300">
                <Link href="/">Hakkımızda</Link>
              </li>
              <li className="text-gray-500 text-sm hover:text-primary transition-all duration-300">
                <Link href="/">İletişim</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">  
            <h2 className="text-lg font-bold text-black">Yasal</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-gray-500 text-sm hover:text-primary transition-all duration-300">
                <Link href="https://amusing-periodical-3bc.notion.site/FaturaMate-Gizlilik-Politikas-2e0217951faf80d9870bea4dc5dbfdec" target="_blank">Gizlilik Politikası</Link>
              </li>
              <li className="text-gray-500 text-sm hover:text-primary transition-all duration-300">
                <Link href="/">Kullanım Koşulları</Link>
              </li>
            </ul>
          </div>
        </div>
      
      </div>
      <div className="container max-w-8xl mx-auto px-2 py-4 border-t border-gray-200">
        <p className="text-gray-500 text-sm text-center">
          &copy; {new Date().getFullYear()} FaturaMate. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
