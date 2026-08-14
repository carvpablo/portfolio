import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiPython,
  SiNodedotjs,
  SiGit,
} from 'react-icons/si';
import { FiCpu } from 'react-icons/fi';

const skills = [
  {
    name: 'React',
    icon: <SiReact />,
    color: '#61dafb',
    bgColor: 'rgba(97, 218, 251, 0.1)',
    desc: 'Criação de interfaces modernas com hooks, context e componentes reutilizáveis.',
    level: 90,
    levelLabel: 'Avançado',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: '#3178c6',
    bgColor: 'rgba(49, 120, 198, 0.1)',
    desc: 'Tipagem estática para código mais seguro, escalável e fácil de manter.',
    level: 85,
    levelLabel: 'Avançado',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    color: '#fff',
    bgColor: 'rgba(255, 255, 255, 0.07)',
    desc: 'SSR, SSG, App Router e rotas de API para aplicações full-stack otimizadas.',
    level: 82,
    levelLabel: 'Avançado',
  },
  {
    name: 'Python',
    icon: <SiPython />,
    color: '#ffd43b',
    bgColor: 'rgba(255, 212, 59, 0.1)',
    desc: 'Backend com FastAPI/Django, automações, scripts e integração com modelos de IA.',
    level: 80,
    levelLabel: 'Avançado',
  },
  {
    name: 'Ferramentas de IA',
    icon: <FiCpu />,
    color: '#a78bfa',
    bgColor: 'rgba(167, 139, 250, 0.1)',
    desc: 'OpenAI API, LangChain, prompting, embeddings e integração de LLMs em produtos.',
    level: 75,
    levelLabel: 'Intermediário+',
  },
  {
    name: 'Node.js & APIs',
    icon: <SiNodedotjs />,
    color: '#68a063',
    bgColor: 'rgba(104, 160, 99, 0.1)',
    desc: 'APIs RESTful e GraphQL, autenticação JWT, middlewares e integração com bancos.',
    level: 78,
    levelLabel: 'Avançado',
  },
  {
    name: 'Git & DevOps',
    icon: <SiGit />,
    color: '#f14e32',
    bgColor: 'rgba(241, 78, 50, 0.1)',
    desc: 'Versionamento, GitHub Actions, CI/CD, Docker e deploy em cloud.',
    level: 72,
    levelLabel: 'Intermediário+',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } },
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills">
      <div className="container" ref={ref}>
        <div className="section-divider" />
        <span className="tag">// habilidades</span>
        <h2 className="section-title">Tecnologias & Skills</h2>
        <p className="section-subtitle">
          As principais ferramentas e linguagens que uso para construir produtos de ponta a ponta.
        </p>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="glass-card skill-card"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="skill-icon-wrapper"
                style={{ background: skill.bgColor, color: skill.color }}
              >
                {skill.icon}
              </div>

              <div className="skill-name">{skill.name}</div>
              <div className="skill-desc">{skill.desc}</div>

              <div className="skill-level">
                <span>{skill.levelLabel}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="skill-bar-track">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: skill.level / 100 } : { scaleX: 0 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
