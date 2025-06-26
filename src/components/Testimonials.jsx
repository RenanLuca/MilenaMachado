import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

export const Testimonials = () => {
  const testimonials = [
    {
      text: 'A terapia com a Dra. Milena tem sido transformadora. Sua abordagem acolhedora e profissional me ajudou a superar momentos difíceis e encontrar mais equilíbrio na vida.',
      role: 'Paciente há 1 ano',
    },
    {
      text: 'Encontrei na Dra. Milena uma profissional extremamente competente e empática. As sessões online são tão efetivas quanto as presenciais, e a flexibilidade faz toda diferença.',
      role: 'Paciente há 8 meses',
    },
    {
      text: 'O acompanhamento psicológico mudou completamente minha perspectiva sobre diversos aspectos da minha vida. Sou muito grata pelo suporte e direcionamento recebidos.',
      role: 'Paciente há 2 anos',
    },
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Depoimentos</h2>
          <p className="section-subtitle">
            O que dizem as pessoas que já passaram por transformações em suas vidas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg relative"
            >
              <FaQuoteLeft className="text-primary/20 text-4xl absolute top-6 left-6" />
              <div className="relative z-10 pl-8 pt-8">
                <p className="text-gray-700 mb-6 italic">
                  {testimonial.text}
                </p>
                <p className="text-primary font-medium">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 