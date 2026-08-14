import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          © {year} <span>Pablo Lemos</span>. Feito com <FiHeart style={{ display: 'inline', color: 'var(--purple-400)', verticalAlign: 'middle' }} /> em React & TypeScript.
        </p>

        <ul className="footer-links">
          {[
            { label: 'Sobre', to: 'about' },
            { label: 'Skills', to: 'skills' },
            { label: 'Projetos', to: 'projects' },
            { label: 'Contato', to: 'contact' },
          ].map((item) => (
            <li key={item.to}>
              <Link to={item.to} smooth duration={600} offset={-70}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <a
            href="https://github.com/carvpablo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', fontSize: '1.1rem', transition: 'var(--transition-fast)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--purple-400)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            id="footer-github"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pablo-lemos-731828428/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', fontSize: '1.1rem', transition: 'var(--transition-fast)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan-400)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            id="footer-linkedin"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
