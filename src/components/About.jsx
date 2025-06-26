import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaHeart, FaUserMd } from 'react-icons/fa';

export const About = () => {
  const features = [
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: 'Formação',
      description: 'Graduada em Psicologia com especialização em Terapia Cognitivo-Comportamental',
    },
    {
      icon: <FaUserMd className="w-6 h-6" />,
      title: 'Experiência',
      description: 'Mais de 5 anos de experiência em atendimento clínico',
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: 'Abordagem',
      description: 'Atendimento humanizado e personalizado para cada paciente',
    },
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">
            Dedicada a ajudar pessoas a encontrarem equilíbrio emocional e bem-estar através
            de um acompanhamento psicológico profissional e acolhedor.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-primary mb-4 inline-block">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Minha missão é proporcionar um espaço seguro e acolhedor para que você possa
            explorar suas questões emocionais, desenvolver autoconhecimento e encontrar
            caminhos para uma vida mais equilibrada e satisfatória.
          </p>
        </motion.div>
      </div>
    </section>
  );
}; 