import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Dra. Milena Machado
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Psicóloga Clínica
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Cuidando da sua saúde emocional com empatia e profissionalismo
            </p>
            <a
              href="#contato"
              className="btn-primary inline-block"
            >
              Agende sua Consulta
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <img
                src="https://img.freepik.com/free-photo/young-woman-psychologist-sitting-chair-taking-notes-therapy-session_1098-18860.jpg"
                alt="Dra. Milena Machado"
                className="rounded-full shadow-xl object-cover w-full h-full"
                onError={(e) => {
                  e.target.src = 'https://img.freepik.com/free-photo/young-woman-psychologist-sitting-chair-taking-notes-therapy-session_1098-18860.jpg';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 