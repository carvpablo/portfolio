import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import financasProImg from '../assets/financaspro.png';
import barberFlowImg from '../assets/barberflow.png';
import asyncAggregatorImg from '../assets/async-aggregator.png';

const projects = [
  {
    image: financasProImg,
    title: 'FinancasPro',
    desc: 'Aplicação full-stack moderna e intuitiva projetada para ajudar no controle total de finanças pessoais, desde o planejamento orçamentário e acompanhamento de metas até a geração de relatórios e exportações em PDF e Excel.',
    tags: ['React', 'TypeScript', 'Node.js', 'Prisma', 'React Query'],
    github: 'https://github.com/carvpablo/FinancasPro',
    demo: 'https://financas-pro-rosy.vercel.app/',
  },
  {
    image: barberFlowImg,
    title: 'BarberFlow',
    desc: 'Um aplicativo completo (Full-Stack) para gerenciamento e agendamento online de serviços de barbearia. Desenvolvido com uma experiência de usuário moderna, fluida e responsiva.',
    tags: ['React', 'TypeScript', 'Node.js', 'Prisma', 'React Query'],
    github: 'https://github.com/carvpablo/barberflow',
    demo: 'https://projeto-barbearia-portfolio.vercel.app/',
  },
  {
    image: asyncAggregatorImg,
    title: 'Async Data Aggregator',
    desc: 'Serviço em nuvem assíncrono em Python para raspagem periódica de dados web, geração de embeddings (OpenAI/Ollama) e busca semântica em tempo real via FastAPI e PostgreSQL com pgvector.',
    tags: ['Python', 'FastAPI', 'SQLAlchemy', 'Docker'],
    github: 'https://github.com/carvpablo/agregador-python',
    demo: '#',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] as const } },
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}
    >
      <div className="container" ref={ref}>
        <div className="section-divider" />
        <span className="tag">// projetos</span>
        <h2 className="section-title">Projetos em Destaque</h2>
        <p className="section-subtitle">
          Uma seleção de projetos que demonstram minha experiência em diferentes áreas do desenvolvimento.
        </p>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="glass-card project-card"
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Project screenshot */}
              <div className="project-image-placeholder">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="project-screenshot"
                />
              </div>

              <div className="project-body">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-links">
                  <a href={project.github} className="project-link" id={`proj-github-${project.title}`} target="_blank" rel="noopener noreferrer">
                    <FiGithub /> GitHub
                  </a>
                  <a href={project.demo} className="project-link" id={`proj-demo-${project.title}`} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
