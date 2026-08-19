import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

const TITLES = [
  'Desenvolvedor Full-Stack',
  'React & TypeScript Dev',
  'Entusiasta de IA',
  'Next.js Developer',
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
      } else {
        timeout = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, titleIndex]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const } },
  };

  return (
    <section className="hero" id="hero">
      {/* Background orbs */}
      <div
        className="orb orb-purple"
        style={{ width: 500, height: 500, top: '-10%', left: '-10%' }}
      />
      <div
        className="orb orb-cyan"
        style={{ width: 400, height: 400, bottom: '0%', right: '-5%' }}
      />

      {/* Animated grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-greeting" variants={itemVariants}>
            Olá, mundo! Eu sou
          </motion.span>

          <motion.h1 className="hero-name" variants={itemVariants}>
            Pablo Lemos
          </motion.h1>

          <motion.div className="hero-title" variants={itemVariants}>
            <span className="gradient-text">{displayed}</span>
            <span className="cursor" />
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            Desenvolvedor Full-Stack apaixonado por criar experiências digitais únicas.
            Especializado em <strong>React, TypeScript e Next.js</strong> no front-end,
            <strong> Python e IA</strong> no back-end. Formado em{' '}
            <strong>Ciências da Computação</strong>.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <Link to="projects" smooth duration={700} offset={-70}>
              <button className="btn btn-primary" id="hero-view-projects">
                Ver Projetos <FiArrowRight />
              </button>
            </Link>
            <a
              className="btn btn-outline"
              href="/Pablo_Lemos_Curriculo.pdf"
              download="Pablo_Lemos_Curriculo.pdf"
              id="hero-download-cv"
            >
              <FiDownload /> Baixar CV
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            {[
              { number: '5+', label: 'Tecnologias' },
              { number: '7+', label: 'Projetos' },
            ].map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <span className="hero-stat-number">{stat.number}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-arrow" />
      </div>
    </section>
  );
};

export default Hero;
