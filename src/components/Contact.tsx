import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const socials = [
  {
    icon: <FiGithub />,
    label: 'GitHub',
    handle: '@carvpablo',
    href: 'https://github.com/carvpablo',
    id: 'contact-github',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    handle: 'Pablo Lemos',
    href: 'https://www.linkedin.com/in/pablo-lemos-731828428',
    id: 'contact-linkedin',
  },
  {
    icon: <FiMail />,
    label: 'E-mail',
    handle: 'pablolemos.dev@gmail.com',
    href: 'mailto:pablolemos.dev@gmail.com',
    id: 'contact-email',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const } },
};

const EMAILJS_SERVICE_ID  = 'service_co86qin';
const EMAILJS_TEMPLATE_ID = 'template_exsmulp';
const EMAILJS_PUBLIC_KEY  = 'guWUY4e0urzET_dhs';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      setError('Erro ao enviar. Tente novamente ou use o e-mail direto.');
      console.error('EmailJS error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="container" ref={ref}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="section-divider" />
          <span className="tag">// contato</span>
          <h2 className="section-title">Vamos Trabalhar Juntos?</h2>
          <p className="section-subtitle">
            Estou aberto a oportunidades, freelas e colaborações. Manda uma mensagem!
          </p>
        </motion.div>

        <motion.div
          className="contact-grid"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.1 }}
        >
          {/* Info side */}
          <div className="contact-info">
            <h3>Entre em contato</h3>
            <p>
              Seja para um projeto freelance, uma oportunidade de emprego ou apenas para
              trocar uma ideia sobre tecnologia — estou sempre disposto a conversar!
            </p>

            <div className="contact-socials">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  id={s.id}
                >
                  <span className="contact-social-icon">{s.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                      {s.label}
                    </div>
                    <div style={{ fontSize: '0.8rem', marginTop: '1px' }}>{s.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
            <div className="form-group">
              <label htmlFor="contact-name">Seu nome</label>
              <input
                id="contact-name"
                type="text"
                placeholder="João Silva"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email-input">Seu e-mail</label>
              <input
                id="contact-email-input"
                type="email"
                placeholder="joao@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Mensagem</label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Olá Pablo, tenho um projeto interessante..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>

            {error && (
              <p style={{ color: '#f87171', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                ⚠️ {error}
              </p>
            )}
            <motion.button
              type="submit"
              className="btn btn-primary form-submit"
              id="contact-submit"
              disabled={loading}
              whileHover={!loading ? { scale: 1.03 } : {}}
              whileTap={!loading ? { scale: 0.97 } : {}}
              style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
            >
              {sent ? '✅ Mensagem enviada!' : loading ? '⏳ Enviando...' : <><FiSend /> Enviar Mensagem</>}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
