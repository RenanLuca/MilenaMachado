import React from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaUsers, FaUser } from 'react-icons/fa';

export const Services = () => {
  const services = [
    {
      icon: <FaUser className="w-8 h-8" />,
      title: 'Terapia Individual',
      description: 'Atendimento personalizado para adultos, focado em suas necessidades específicas.',
      features: [
        'Ansiedade e Depressão',
        'Autoestima e Autoconhecimento',
        'Gestão de Estresse',
        'Relacionamentos',
      ],
    },
    {
      icon: <FaVideo className="w-8 h-8" />,
      title: 'Atendimento Online',
      description: 'Sessões de terapia através de videoconferência, com a mesma qualidade do atendimento presencial.',
      features: [
        'Flexibilidade de Horários',
        'Conforto do seu Espaço',
        'Plataforma Segura',
        'Atendimento Nacional',
      ],
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: 'Terapia para Adolescentes',
      description: 'Acompanhamento especializado para jovens em fase de desenvolvimento.',
      features: [
        'Desenvolvimento Emocional',
        'Orientação Vocacional',
        'Questões Familiares',
        'Habilidades Sociais',
      ],
    },
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Serviços</h2>
          <p className="section-subtitle">
            Conheça as modalidades de atendimento disponíveis para cuidar da sua saúde mental
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary mb-6 inline-block">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 