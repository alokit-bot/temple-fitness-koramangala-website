import React, { useState } from 'react';
import { Phone, MapPin, Clock, Star, Menu, X, Dumbbell, Users, Trophy, Zap, Instagram, Facebook, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const services = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'State-of-the-art equipment for all your strength training needs',
      features: ['Free weights', 'Resistance machines', 'Power racks']
    },
    {
      icon: Zap,
      title: 'Cardio Zone',
      description: 'Premium cardio equipment to boost your endurance',
      features: ['Treadmills', 'Ellipticals', 'Rowing machines']
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Energizing group fitness classes led by certified trainers',
      features: ['Yoga', 'Zumba', 'CrossFit']
    },
    {
      icon: Trophy,
      title: 'Personal Training',
      description: 'One-on-one sessions with expert trainers',
      features: ['Custom plans', 'Nutrition guidance', 'Progress tracking']
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Best gym in Koramangala! The trainers are incredibly knowledgeable and the equipment is top-notch. Lost 15kg in 6 months!'
    },
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'Amazing atmosphere and very clean. The staff is friendly and always ready to help. Highly recommend for anyone serious about fitness.'
    },
    {
      name: 'Amit Patel',
      rating: 5,
      text: 'Been a member for 2 years. Great community, excellent trainers, and convenient location. Worth every rupee!'
    }
  ];

  const pricingPlans = [
    { duration: '1 Month', price: '₹2,999', popular: false },
    { duration: '3 Months', price: '₹7,999', popular: true },
    { duration: '6 Months', price: '₹14,999', popular: false },
    { duration: '12 Months', price: '₹24,999', popular: false }
  ];

  return (
    <div className="temple-fitness-site">
      {/* Header */}
      <header className="site-header">
        <div className="header-container">
          <div className="logo-section">
            <Dumbbell className="logo-icon" size={32} />
            <span className="logo-text">TEMPLE FITNESS GYM</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link">Reviews</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mobile-nav">
            <button onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
            <button onClick={() => scrollToSection('services')} className="mobile-nav-link">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="mobile-nav-link">Gallery</button>
            <button onClick={() => scrollToSection('testimonials')} className="mobile-nav-link">Reviews</button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym atmosphere" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="rating-badge">
            <Star size={20} fill="#d9fb06" color="#d9fb06" />
            <span className="rating-text">4.9</span>
            <span className="rating-count">(240+ reviews)</span>
          </div>
          <h1 className="hero-title">FORGE YOUR LEGACY</h1>
          <p className="hero-subtitle">Transform your body, elevate your mind, achieve greatness at Koramangala's premier fitness destination</p>
          <div className="hero-cta-group">
            <a href="tel:+919972879932" className="btn-primary">
              <Phone size={20} />
              <span>Call Now</span>
            </a>
            <button onClick={() => scrollToSection('services')} className="btn-secondary">View Plans</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <div className="about-content-grid">
            <div className="about-text">
              <span className="section-label">ABOUT US</span>
              <h2 className="section-heading">YOUR FITNESS TEMPLE</h2>
              <div className="about-description">
                <p>
                  Located in the heart of Koramangala, Temple Fitness Gym is more than just a gym—it's a community dedicated to transformation. With state-of-the-art equipment, expert trainers, and a motivating atmosphere, we've helped hundreds achieve their fitness goals.
                </p>
                <p>
                  Whether you're a beginner starting your fitness journey or an athlete pushing your limits, we provide the tools, knowledge, and support you need to succeed. Our 4.9-star rating on Google Maps reflects our commitment to excellence.
                </p>
              </div>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Active Members</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Expert Trainers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5000+</div>
                  <div className="stat-label">Transformations</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
                alt="Temple Fitness interior"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-label">WHAT WE OFFER</span>
            <h2 className="section-heading">OUR SERVICES</h2>
          </div>
          <div className="services-grid">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="service-card">
                  <div className="service-icon">
                    <IconComponent size={40} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          {/* Pricing */}
          <div className="pricing-section">
            <h3 className="pricing-heading">MEMBERSHIP PLANS</h3>
            <div className="pricing-grid">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && <div className="popular-badge">MOST POPULAR</div>}
                  <div className="pricing-duration">{plan.duration}</div>
                  <div className="pricing-price">{plan.price}</div>
                  <a href="tel:+919972879932" className="pricing-cta">Get Started</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-label">GALLERY</span>
            <h2 className="section-heading">OUR FACILITY</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" alt="Cardio zone" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075&auto=format&fit=crop" alt="Weight training area" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=2070&auto=format&fit=crop" alt="Group class" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop" alt="Training session" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop" alt="Functional training" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" alt="Gym equipment" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-label">TESTIMONIALS</span>
            <h2 className="section-heading">MEMBER SUCCESS STORIES</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#d9fb06" color="#d9fb06" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">— {testimonial.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-label">GET IN TOUCH</span>
            <h2 className="section-heading">VISIT US TODAY</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-details">
                  <h4 className="contact-label">Call Us</h4>
                  <a href="tel:+919972879932" className="contact-value">+91 99728 79932</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-details">
                  <h4 className="contact-label">Location</h4>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Temple+Fitness+Gym+No+10+2nd+Floor+60+Feet+Road+5th+Cross+Rd+KHB+Colony+6th+Block+Koramangala+Bengaluru+Karnataka+560095" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    No 10, 2nd Floor, 60 Feet Road, 5th Cross Rd, KHB Colony, 6th Block, Koramangala, Bengaluru, Karnataka 560095
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div className="contact-details">
                  <h4 className="contact-label">Hours</h4>
                  <p className="contact-value">Open Daily<br />Mon-Sun: 5:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6934442556827!2d77.6261!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA2LjciTiA3N8KwMzcnMzQu!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Temple Fitness Gym Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">
                <Dumbbell size={32} />
                <span>TEMPLE FITNESS GYM</span>
              </div>
              <p className="footer-description">
                Koramangala's premier fitness destination. Transform your body, elevate your mind.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="mailto:info@templefitness.com" className="social-link" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
                <li><button onClick={() => scrollToSection('services')}>Services</button></li>
                <li><button onClick={() => scrollToSection('gallery')}>Gallery</button></li>
                <li><button onClick={() => scrollToSection('testimonials')}>Reviews</button></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-links">
                <li><a href="tel:+919972879932">+91 99728 79932</a></li>
                <li>KHB Colony, 6th Block</li>
                <li>Koramangala, Bengaluru</li>
                <li>Karnataka 560095</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Temple Fitness Gym. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;