"use client";
import { useEffect, useState } from 'react';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      imgSrc: 'carousel_person1.png',
      text: '"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."',
      name: 'NAME',
      designation: 'CEO',
    },
    {
      imgSrc: 'carousel_person1.png',
      text: '"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."',
      name: 'Jane Smith',
      designation: 'CEO',
    },
    {
      imgSrc: 'carousel_person1.png',
      text: '"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."',
      name: 'Alice Johnson',
      designation: 'CEO',
    },
    {
      imgSrc: 'carousel_person1.png',
      text: '"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."',
      name: 'Bob Brown',
      designation: 'CEO',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="cv-button">
          <a href="Resume_dipti.pdf" className="download-btn" download>Download CV</a>
        </div>
      </nav>

      <section id="home" className="home-section">
        <div className="home-text">
          <h4 className="small-heading">Hi I am</h4>
          <h3 className="name-heading">Muhammad Umair</h3>
          <h1 className='main-heading-1'>UI & UX</h1>
          <h1 className='main-heading-2'>Designer</h1>
          <p className="Nav bar text-21">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
          <button className="hire-me-button">Hire Me</button>
        </div>
        <div className="home-image">
          <img src="Group 2.png" alt="Group 2" />
        </div>
      </section>

      <section id="about" className="about-section">
        <img src="Group 7.png" alt="About Image" className="about-image" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
          <img src="skill_scroll.png" alt="Skills" className="skills-image" />
        </div>
      </section>

      <section id="services" className="services-section">
        <div className='services-text'>
          <h1>Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus</p>
          <p>netus in. Aliquet donec morbi convallis pretium</p>
        </div>
        <div className="services-cards">
          <div className="service-card">
            <img src="service1.png" alt="Service 1" />
            <h3>UI/UX</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
          </div>
          <div className="service-card">
            <img src="service2.png" alt="Service 2" />
            <h3>Web Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
          </div>
          <div className="service-card">
            <img src="service3.png" alt="Service 3" />
            <h3>App Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
          </div>
          <div className="service-card">
            <img src="service4.png" alt="Service 4" />
            <h3>Graphic Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h1>My Projects</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus</p>
        <p>lectus. Phasellus consequat urna tellus</p>
        <div className="filter-buttons">
          {['All', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design'].map(filter => (
            <button
              key={filter}
              className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className='project-images'>
          <img src='web design1.png' alt="Web Design 1" />
          <img src='web design2.png' alt="Web Design 2" />
          <img src='web design3.png' alt="Web Design 3" />
        </div>
      </section>
      
      <section id="testimonials" className="testimonials-section">
        <h1 className="testimonials-heading">Testimonials</h1>
        <p className="testimonials-intro">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus</p>
        <p className="testimonials-intro">netus in. Aliquet donec morbi convallis pretium</p>

        <div className="carousel-container">
          <div className="carousel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}>
                <img src={slide.imgSrc} alt={`Slide ${index + 1}`} className="testimonial-image" />
                <div className="testimonial-content">
                  <p className="testimonial-text">{slide.text}</p>
                  <p className="testimonial-name">{slide.name}</p>
                  <p className="testimonial-designation">{slide.designation}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h1>Let&apos;s Design Together</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus</p>
        <p>netus in. Aliquet donec morbi convallis pretium</p>
        
        <div className="contact-form">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button className="contact-button">Contact Me</button>
        </div>
      </section>

      <section id="footer" className="footer-section">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <ul className="foot-links">
            <li><p>Home</p></li>
            <li><p>About Me</p></li>
            <li><p>Services</p></li>
            <li><p>Projects</p></li>
            <li><p>Testimonials</p></li>
            <li><p>Contact</p></li>
          </ul>
          <img src='footer_social_media.png' className='footer-social'></img>
        </div>

        <div className="footer-bottom">
          <p>© 2023 Mumair All Rights Reserved, Inc.</p>
        </div>
      </section>


    </div>
  );
}

