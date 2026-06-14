'use client';

import { useEffect, useRef } from 'react';
import './page.css';

export default function Home() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle('scrolled', window.scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Reveal animation
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      reveal.disconnect();
    };
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xdavpovo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        const form = e.currentTarget;
        form.style.display = 'none';
        const successMsg = form.parentElement?.querySelector('[data-fs-success]');
        if (successMsg) (successMsg as HTMLElement).style.display = 'block';
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <>
      <nav id="navbar" ref={navRef}>
        <div className="container nav-content">
          <a href="#" className="logo">TECNOSOLO BH</a>
          <a href="#interesse" className="btn-lux" style={{ padding: '0.8rem 1.8rem', fontSize: '0.65rem' }}>
            Interesse
          </a>
        </div>
      </nav>

      {/* HERO Section */}
      <section className="hero">
        <div className="container">
          <div className="reveal">
            <span className="hero-meta">Economia Circular Urbana</span>
            <h1 className="hero-title">O solo de BH clama por uma nova <em>ciência</em>.</h1>
            <p style={{ maxWidth: '550px', marginBottom: '3.5rem', fontWeight: '300' }}>
              Recuperamos resíduos urbanos para regenerar a vida local.
            </p>
            <a href="#fluxo" className="btn-lux">
              Explore a Jornada
            </a>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="problem">
        <div className="container">
          <span className="hero-meta" style={{ color: 'var(--accent)' }}>Contexto</span>
          <h2 className="reveal serif" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Belo Horizonte pede <em>vitalidade</em>.
          </h2>
          <div className="grid-problem">
            <div className="problem-card reveal">
              <h3>Impacto</h3>
              <p style={{ opacity: '0.6' }}>
                Resíduos orgânicos em aterros geram metano, impactando diretamente o ecossistema mineiro.
              </p>
            </div>
            <div className="problem-card reveal">
              <h3>Necessidade</h3>
              <p style={{ opacity: '0.6' }}>
                Agricultores locais dependem de fertilizantes sintéticos caros e empobrecidos de microbiologia.
              </p>
            </div>
            <div className="problem-card reveal">
              <h3>Cura</h3>
              <p style={{ opacity: '0.6' }}>
                Nossa biotecnologia fecha o ciclo da vida, transformando desperdício em riqueza fértil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS GALLERY */}
      <section id="fluxo" className="solution">
        <div className="container">
          {/* Step 01 */}
          <div className="step reveal">
            <div className="step-img-wrap">
              <img
                src="https://i.ibb.co/C3D1thmq/couleur-compost-3663514.jpg"
                alt="Origem orgânica"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="step-text">
              <span className="step-number">01</span>
              <h2>
                Matéria em <em>Potencial</em>
              </h2>
              <p>
                Capturamos o potencial nutricional urbano nos geradores estratégicos da capital, garantindo a rastreabilidade total da biomassa.
              </p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="step reveal">
            <div className="step-img-wrap">
              <img
                src="https://i.ibb.co/Zz6chCzV/katya-ershova-greenhouse-6226263.jpg"
                alt="Processo controlado TecnoSolo"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="step-text">
              <span className="step-number">02</span>
              <h2>
                Aceleração <em>Vital</em>
              </h2>
              <p>
                Otimização biológica via microrganismos aceleradores. Convertemos massa crua em fertilidade mineral de alto rendimento.
              </p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="step reveal">
            <div className="step-img-wrap">
              <img
                src="https://i.ibb.co/sJwG4WP3/pexels-potatoes-1866415.jpg"
                alt="Resultados em colheitas locais"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="step-text">
              <span className="step-number">03</span>
              <h2>
                Fartura <em>Regenerada</em>
              </h2>
              <p>
                O resultado volta para as mesas de Belo Horizonte. Solo nutrido entrega colheitas mais densas e resilientes ao cinturão verde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALIDATION FORM Section */}
      <section id="interesse" className="interest-form-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="hero-meta" style={{ color: 'var(--accent)' }}>
              Pesquisa de Campo UFMG
            </span>
            <h2 className="reveal serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)' }}>
              Você acredita nesta <em>inovação</em>?
            </h2>
          </div>

          <div className="form-wrapper reveal">
            <div data-fs-success style={{ display: 'none' }}>
              <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                <h3 className="serif" style={{ color: 'var(--accent)', fontSize: '3rem', marginBottom: '1.5rem' }}>
                  Recebido.
                </h3>
                <p style={{ opacity: '0.8', fontWeight: '300' }}>
                  Obrigado por apoiar a validação desta proposta acadêmica. Retornaremos em breve com novidades.
                </p>
              </div>
            </div>

            <form id="marketForm" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Nome ou Razão Social</label>
                <input
                  type="text"
                  name="nome"
                  className="form-control"
                  placeholder="..."
                  required
                />
              </div>

              <div className="form-group">
                <label>E-mail Corporativo/Pessoal</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="..."
                  required
                />
              </div>

              <div className="form-group">
                <label>Qual sua percepção de interesse?</label>
                <div className="radio-grid">
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="res_yes"
                      name="interesse"
                      value="Sim"
                      required
                    />
                    <label htmlFor="res_yes" className="radio-label-btn">
                      Tenho Interesse
                    </label>
                  </div>
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="res_no"
                      name="interesse"
                      value="Não"
                    />
                    <label htmlFor="res_no" className="radio-label-btn">
                      Sem Interesse
                    </label>
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                <button type="submit" className="btn-lux">
                  Registrar Escolha
                </button>
              </div>
            </form>

            <div className="ufmg-notice">
              Esta sondagem compõe o estudo de mercado acadêmico desenvolvido para fins de validação técnica junto à <strong>UFMG</strong>. Os dados coletados são confidenciais e protegidos.
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team" style={{ paddingBottom: '150px' }}>
        <div className="container reveal">
          <span className="hero-meta" style={{ marginBottom: '3.5rem', display: 'block', textAlign: 'center' }}>
            Mentes Responsáveis
          </span>
          <div style={{ textAlign: 'center', fontSize: '0.9rem', letterSpacing: '2px' }}>
            <div style={{ marginBottom: '0.5rem' }}>Ana Beatriz Almeida</div>
            <div style={{ marginBottom: '0.5rem' }}>Carlos Marinho</div>
            <div style={{ marginBottom: '0.5rem' }}>Eduarda Braga</div>
            <div style={{ marginBottom: '0.5rem' }}>Jéssica Pereira</div>
            <div>Jéssica Parreiras</div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <a href="#" className="footer-logo serif">
            TECNOSOLO
          </a>
          <p style={{ opacity: '0.4', fontSize: '0.7rem', letterSpacing: '6px' }}>
            REGENERATIVO &bull; BH &bull; 2026
          </p>
        </div>
      </footer>
    </>
  );
}
