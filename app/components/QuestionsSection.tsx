'use client'
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';

const QuestionsSection = () => {

    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

    const questions = [
        {
            question: 'FaturaMate nedir?',
            answer: 'FaturaMate, finanslarınızı, gelir ve gider takibini daha kolay ve hızlı bir şekilde yönetmenizi sağlayan bir uygulamadır.'
        },

        {
            question: 'FaturaMate nasıl kullanılır?',
            answer: 'FaturaMate, fiş veya faturalarınızın resimlerini yükleyerek veya fotoğrafını çekerek aynı zamanda elle gider ekleyerek, gelir ve giderlerinizi takip etmeyi kolaylaştırır.'
        },

        {
            question: 'Verilerim gerçekten güvende mi?',
            answer: 'FaturaMate, verilerinizi güvenli bir şekilde saklar ve her zaman güncel tutar. Verilerinize sadece siz erişebilirsiniz.'
        },

        {
            question: 'Aboneliğimi dilediğim zaman iptal edebilir miyim?',
            answer: 'Evet, aboneliğinizi dilediğiniz zaman iptal edebilirsiniz. İptal işlemini online olarak yapabilirsiniz.'
        }
    ]
  return (
    <section id='faq' className='py-12 sm:py-16'>
        <div className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 sm:px-10 lg:px-16'>
            <div className='flex flex-col items-center gap-3 text-center'>
                <h2 className='text-2xl font-bold text-black sm:text-3xl'>Sıkça Sorulan Sorular</h2>
                <p className='text-sm text-gray-500 sm:text-base'>
                    Sıkça sorulan sorularınızın yanıtlarını burada bulabilirsiniz.
                </p>
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 items-start'>
                {questions.map((question, index) => {
                    const isOpen = activeQuestion === index

                    return (
                        <div
                            key={index}
                            className='flex flex-col gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm self-start'
                        >
                            <button
                                type='button'
                                onClick={() => setActiveQuestion(isOpen ? null : index)}
                                className='flex items-center justify-between text-left'
                                aria-expanded={isOpen}
                            >
                                <h3 className='text-xs font-bold text-black sm:text-lg'>
                                    {question.question}
                                </h3>
                                <FaChevronDown
                                    className={`text-primary text-sm transition-transform duration-200 ${
                                        isOpen ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            {isOpen && (
                                <p className='text-xs text-gray-500 sm:text-sm'>
                                    {question.answer}
                                </p>
                            )}
                        </div>
                    )
                })}
            </div>

        </div>

    </section>
  )
}

export default QuestionsSection