"use client";

import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const ContactUsSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Gönderiliyor...");
    emailjs
      .sendForm("service_34llu3p", "template_qy77e8e", form.current!, {
        publicKey: "JTXbQP0_eHMAcoZJY",
        limitRate: {
          throttle: 2,
        },
      })
      .then(
        (result) => {
          if (result.status === 200) {
            setStatus("Mesajınız gönderildi.");
            e.currentTarget.reset();
          }
        },
        () => {
          setStatus("Bir hata oluştu, lütfen tekrar deneyiniz.");
        },
      );
  };
  return (
    <section
      id="contact"
      className="bg-white rounded-xl shadow-md py-12 sm:py-16"
    >
      <div className="mx-auto flex w-full max-w-7xl  flex-col gap-8 px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-bold text-black sm:text-3xl">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-sm text-gray-500 sm:text-base">
            Her türlü soru, öneri ve destek talebiniz için buradayız.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-5 rounded-xl border border-gray-100 bg-white p-5 shadow-md sm:p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <h6 className="text-sm font-bold text-black font-sans">
                    Ad Soyad
                  </h6>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Ad Soyad"
                    className="w-full rounded-md border border-gray-300 p-2 text-sm text-gray-500 hover:border-primary/50 focus:border-primary/50 transition-all duration-300 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h6 className="text-sm font-bold text-black font-sans">
                    E-posta
                  </h6>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="E-posta"
                    className="w-full rounded-md border border-gray-300 p-2 text-sm text-gray-500 hover:border-primary/50 focus:border-primary/50 transition-all duration-300 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="text-sm font-bold text-black font-sans">Konu</h6>
                <input
                  required
                  type="text"
                  name="subject"
                  placeholder="Nasıl Yardımcı Olabiliriz?"
                  className="w-full rounded-md border border-gray-300 p-2 text-sm text-gray-500 hover:border-primary/50 focus:border-primary/50 transition-all duration-300 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="text-sm font-bold text-black font-sans">
                  Mesajınız
                </h6>
                <textarea
                  required
                  name="message"
                  placeholder="Mesajınız"
                  className="h-32 w-full resize-none rounded-md border border-gray-300 p-2 text-sm text-gray-500 hover:border-primary/50 focus:border-primary/50 transition-all duration-300 focus:outline-none sm:h-40"
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-md bg-primary px-4 py-2 text-white transition-all duration-300 hover:bg-primary/90 cursor-pointer"
              >
                Mesaj Gönder
              </Button>
              {status && (
                <p className="text-sm text-green-600 mt-2 text-center">
                  {status}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-md bg-primary/10 p-2">
                  <FaMailBulk className="text-sm text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h6 className="text-sm font-bold text-black font-sans">
                    E-posta Adresimiz
                  </h6>
                  <p className="text-sm text-gray-500">destek@faturamate.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-md bg-primary/10 p-2">
                  <FaMapLocation className="text-sm text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h6 className="text-sm font-bold text-black font-sans">
                    Adresimiz
                  </h6>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-md bg-primary/10 p-2">
                  <FaPhone className="text-sm text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h6 className="text-sm font-bold text-black font-sans">
                    Telefon Numaramız
                  </h6>
                  <p className="text-sm text-gray-500">+90 555 555 55 55</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;
