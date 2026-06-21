"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import ScrollReveal from './components/ScrollReveal';

const sections = [
  { id: 'about', title: 'Design services' },
  { id: 'work', title: 'Work' },
  { id: 'contact', title: 'Contact' },
];

const workItems = [
  { title: 'COMMERCIAL PROJECTS', image: '/img/commMain.png', href: '/work/commercial' },
  { title: 'LEARNING PROJECTS', image: '/img/learnMain.jpg', href: '/work/learning' },
];

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="header-inner">
          <div className="brand">Vlada Morozoova</div>
          <nav className="nav-links" aria-label="Main navigation">
            {sections.map((section) => (
              <Link key={section.id} href={`#${section.id}`}>
                {section.title}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">JUNIOR DIGITAL DESIGNER</p>
          <h1 className="hero-title">
            <span className="title-accent">V</span>
            <span className="title-main">LADA</span>
            <span className="title-surname">
              <span className="title-main">MOROZ</span>
              <span className="title-accent title-accent-ov">OV</span>
              <span className="title-main">A</span>
            </span>
          </h1>
          <p className="hero-subtitle">
            Hello! I’m a Juniour Digital Designer focused on visual storytelling and
            creating clear, engaging digital experiences. I work across social media, web,
            presentations, and visual concepts, turning ideas into functional and
            visually strong design. I care about details, structure, and visual clarity, and I
            enjoy experimenting while improving my skills with real projects. I’m looking
            for opportunities where I can grow as a designer, contribute fresh ideas, and
            build meaningful work in a creative team.          </p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">
              View work
            </a>
            <a href="#contact" className="button button-secondary">
              Contact me
            </a>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <ScrollReveal>
          <div className="about-header">
            <p className="section-label">Services</p>
            <h2>Design services crafted for growth and clarity</h2>
          </div>
        </ScrollReveal>
        <div className="services-list">
          <div className="service-row">
            <div className="service-title">UX/UI Design</div>
            <div className="service-description">User-centered interfaces designed to improve usability, engagement, and overall user experience.</div>
          </div>
          <div className="service-row">
            <div className="service-title">Web Design</div>
            <div className="service-description">Custom website design tailored to your goals, audience, and brand personality.</div>
          </div>
          <div className="service-row">
            <div className="service-title">Brand Identity</div>
            <div className="service-description">Visual systems that help brands communicate clearly and stand out with confidence.</div>
          </div>
          <div className="service-row">
            <div className="service-title">Presentation Design</div>
            <div className="service-description">Professional presentations that transform complex information into compelling visual stories.</div>
          </div>
          <div className="service-row service-row-last">
            <div className="service-title">Graphic Design</div>
            <div className="service-description">Marketing materials, social media assets, promotional graphics, and digital content.</div>
          </div>
        </div>
      </section>

      <section className="numbers-section">
        <div>
          <ScrollReveal>
            <div className="numbers-header">
              <p className="section-label">Numbers</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="numbers-inner">
              <div className="numbers-left">
                <div className="number-big">98%</div>
                <p className="number-label">happy clients</p>
              </div>
              <div className="numbers-right">
                <div className="number-item">
                  <div className="number-value">2+</div>
                  <div className="number-text">years of experience</div>
                </div>
                <div className="number-item">
                  <div className="number-value">30+</div>
                  <div className="number-text">creative projects</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h2 className="experience-title">Experience</h2>
          </ScrollReveal>
        </div>
      </section>

      <section className="section work-section" id="work">
        <ScrollReveal>
          <div className="work-grid">
            {workItems.map((item) => (
              <Link key={item.title} className="work-card" href={item.href}>
                <span className="work-title">{item.title}</span>
                <img className="work-image" src={item.image} alt={item.title} />
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="brand">Vlada Morozoova</div>
            <p className="footer-tagline">Junior Digital Designer</p>
          </div>
          <div className="footer-contact">
            <p className="section-label">Get in touch</p>
            <a className="footer-email" href="mailto:morozova.vlada2407@gmail.com">morozova.vlada2407@gmail.com</a>
          </div>
        </div>
        <p className="footer-copyright">© {new Date().getFullYear()} Vlada Morozoova. All rights reserved.</p>
      </footer>
    </main>
  );
}
