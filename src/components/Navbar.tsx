import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Sobre', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projetos', to: 'projects' },
  { label: 'Contato', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container navbar-inner">
        <Link to="hero" smooth duration={600} className="navbar-logo" id="nav-logo">
          &lt;PL /&gt;
        </Link>

        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={600}
                offset={-70}
                id={`nav-${link.to}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="contact" smooth duration={600} offset={-70}>
              <button className="btn btn-primary navbar-cta" id="nav-cta">
                Fale Comigo
              </button>
            </Link>
          </li>
        </ul>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          id="hamburger-btn"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(8,11,20,0.97)',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              overflow: 'hidden',
            }}
          >
            <ul style={{ listStyle: 'none', padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-70}
                    onClick={() => setMenuOpen(false)}
                    style={{ color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '1rem' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
