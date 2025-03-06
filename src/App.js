import React, { useEffect, useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faJava, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ReactCountryFlag from 'react-country-flag';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const calculateDuration = (startDate: string) => {
    const start = new Date(startDate);
    const now = new Date();
    const diff = now.getTime() - start.getTime();
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    return `${years} years, ${months} months, and ${days} days`;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    window.location.href = `mailto:rarestudor.dev@gmail.com?subject=Message from ${name}&body=${message} (Email: ${email})`;
  };

  return (
    <div>
      {/* Navigation */}
      <nav className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#home" className="logo">Rares</a>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#languages">Languages</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="menu-icon"></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <h1>Hello, I'm Rares</h1>
          <h2>A Future Full Stack Developer</h2>
          <p>Student at HoGent studying Applied Computer Science with a passion for creating elegant, responsive, and modern web applications.</p>
          <div className="hero-buttons">
            <a href="https://www.linkedin.com/in/rares-eduard-tudor-6885952aa/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FontAwesomeIcon icon={faLinkedin} size="1x" /> LinkedIn
            </a>
            <a href="https://github.com/tudor-rares" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FontAwesomeIcon icon={faGithub} size="1x" /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>
          <p>Hey, I’m Rares Eduard Tudor, a passionate full-stack developer currently studying at HOGENT. I have a strong foundation in web development, specializing in React, Node.js, Next.js, and TypeScript. I love creating efficient, scalable applications, whether it’s a personal project or something more complex like a shopfloor application dashboard.</p>
          <p>My focus is on modern, maintainable code and clean UI/UX, with experience in both front-end and back-end development. I’m always exploring new technologies and refining my skills to stay ahead.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div className="skill">
              <FontAwesomeIcon icon={faHtml5} size="3x" />
              <p>HTML</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faCss3Alt} size="3x" />
              <p>CSS</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faJs} size="3x" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faReact} size="3x" />
              <p>React</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faNodeJs} size="3x" />
              <p>Node.js</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faJava} size="3x" />
              <p>Java</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2>My Projects</h2>
          <div className="projects-grid">
            <div className="project-card" onClick={() => window.open('https://github.com/HOGENT-frontendweb/frontendweb-2425-RaresEduard-Tudor', '_blank')}>
              <img src="path/to/quirky-spots-image.jpg" alt="Quirky Spots" />
              <h3>Quirky Spots</h3>
              <p>A map-based web app where users can add, review, and rate locations, featuring a custom map solution and React Three Fiber.</p>
              <div className="tech-stack">
                <span>React</span>
                <span>Three.js</span>
                <span>Node.js</span>
              </div>
            </div>
            <div className="project-card" onClick={() => window.open('https://github.com/HoGentProjectenII', '_blank')}>
              <img src="path/to/shopfloor-dashboard-image.jpg" alt="Shopfloor Dashboard" />
              <h3>Shopfloor Dashboard</h3>
              <p>A real-time data dashboard for shopfloor applications, integrating MariaDB and React.</p>
              <div className="tech-stack">
                <span>React</span>
                <span>MariaDB</span>
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Internship in Cesenatico, Italy</h3>
            <p><strong>Date:</strong> March 2023</p>
            <p>While my internship may not have directly aligned with my field of informatics, I embraced the chance to explore a different aspect of professional life. Sometimes, unexpected experiences can lead to surprising personal growth and a broader perspective. Regardless of the specific tasks I undertook, I relished the chance to learn, adapt, and collaborate with new colleagues, building valuable skills beyond my primary area of expertise.</p>
            <p><strong>Duration:</strong> 2 weeks</p>
          </div>
          <div className="experience-item">
            <h3>Part-time Student at McDonald's</h3>
            <p><strong>Date:</strong> November 2023 - Present</p>
            <p>Working part-time as a student at McDonald's, gaining valuable experience in customer service, teamwork, and time management.</p>
            <p><strong>Duration:</strong> {calculateDuration('2023-11-01')}</p>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="section">
        <div className="container">
          <h2>Languages</h2>
          <div className="languages-grid">
            <div className="language-card">
              <ReactCountryFlag countryCode="US" svg style={{ width: '3em', height: '3em' }} />
              <h3>English</h3>
              <p>Fluent</p>
            </div>
            <div className="language-card">
              <ReactCountryFlag countryCode="RO" svg style={{ width: '3em', height: '3em' }} />
              <h3>Romanian</h3>
              <p>Mother Language</p>
            </div>
            <div className="language-card">
              <ReactCountryFlag countryCode="NL" svg style={{ width: '3em', height: '3em' }} />
              <h3>Dutch</h3>
              <p>Fluent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2>Get In Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Rares. All rights reserved.</p>
          <p>Made with React</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
