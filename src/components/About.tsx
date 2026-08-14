import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import pabloImg from '../assets/pablo.jpg';
import {
  FiCode,
  FiCpu,
  FiBookOpen,
  FiMapPin,
  FiMail,
} from 'react-icons/fi';

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const } },
};

const badges = [
  { icon: <FiCode />, label: 'Full-Stack Developer' },
  { icon: <FiCpu />, label: 'AI Enthusiast' },
  { icon: <FiBookOpen />, label: 'Ciências da Computação' },
  { icon: <FiMapPin />, label: 'Brasil' },
  { icon: <FiMail />, label: 'Disponível para projetos' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
      <div className="container" ref={ref}>
        <div className="about-grid">
          {/* Image */}
          <motion.div
            className="about-image-wrapper"
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <img
              src={pabloImg}
              alt="Pablo Lemos"
              className="about-avatar"
              style={{ objectPosition: 'center 35%' }}
            />
            <div className="about-image-decoration" />
          </motion.div>

          {/* Text */}
          <motion.div
            className="about-text"
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="section-divider" />
            <span className="tag">// sobre mim</span>
            <h2 className="section-title">Quem sou eu?</h2>

            <p>
              Olá! Sou <strong>Pablo Lemos</strong>, desenvolvedor Full-Stack formado em{' '}
              <strong>Ciências da Computação</strong>. Tenho paixão por transformar ideias
              complexas em produtos digitais elegantes e funcionais.
            </p>

            <p>
              No front-end, trabalho com <strong>React, TypeScript e Next.js</strong> para
              criar interfaces modernas, responsivas e de alta performance. No back-end, utilizo
              <strong> Python</strong> para construir APIs robustas e escaláveis.
            </p>

            <p>
              Também tenho grande interesse em <strong>ferramentas de IA</strong>, explorando
              como a inteligência artificial pode potencializar produtos e automatizar
              processos. Estou sempre em busca de aprendizado e novos desafios.
            </p>

            <div className="about-badges">
              {badges.map((badge) => (
                <span className="badge" key={badge.label}>
                  {badge.icon} {badge.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
