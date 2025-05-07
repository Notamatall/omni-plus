import { useState } from "react";

export const All = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const onMenuClick = () => {
    setIsMenuActive((prev) => !prev);
  };
  const onMenuItemClick = () => {
    setIsMenuActive(false);
  };
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <img src="/logo" alt="OMNI+ Logo" />
              <div className="logo-text">
                OMNI<span>+</span>
              </div>
            </div>

            <div className="menu-toggle" id="menu-toggle" onClick={onMenuClick}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ul
              className={`nav-links ${isMenuActive ? "active" : ""}`}
              id="nav-links"
            >
              <li onClick={onMenuItemClick}>
                <a href="#problem" className="nav-link">
                  Land Degradation
                </a>
              </li>
              <li onClick={onMenuItemClick}>
                <a href="#technology" className="nav-link">
                  Technology
                </a>
              </li>
              <li onClick={onMenuItemClick}>
                <a href="#uniqueness" className="nav-link">
                  Uniqueness
                </a>
              </li>
              <li onClick={onMenuItemClick}>
                <a href="#applications" className="nav-link">
                  Applications
                </a>
              </li>
              <li onClick={onMenuItemClick}>
                <a href="#competitive" className="nav-link">
                  Competitive
                </a>
              </li>
              <li onClick={onMenuItemClick}>
                <a href="#ksa" className="nav-link">
                  KSA
                </a>
              </li>
              <li onClick={onMenuItemClick}>
                <a href="#cooperation" className="nav-link">
                  Cooperation
                </a>
              </li>
            </ul>

            <a href="#contact" className="btn">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-text fadeIn">
              <h1 className="hero-title">
                INNOVATIVE BIOACTIVE PREPARATION <span>OMNI+</span>
              </h1>
              <p className="hero-subtitle">
                based on peat extract under the influence of cold plasma
              </p>
              <a href="#problem" className="btn">
                Learn More
              </a>
            </div>

            <div className="hero-image fadeIn delay-200">
              <img src="/api/placeholder/500/400" alt="OMNI+ Product" />
            </div>
          </div>
        </div>
      </section>

      <section id="problem">
        <div className="container">
          <div className="section-title">
            <h2>Land Degradation</h2>
            <p className="section-subtitle">
              The global challenge that requires innovative solutions
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card fadeIn">
              <div className="stat-header">
                <div className="stat-icon">🌍</div>
                <h3 className="stat-title">Worldwide</h3>
              </div>
              <div className="stat-number">40%</div>
              <p className="stat-desc">
                Nowadays, globally up to 40 per cent of the world's land is
                degraded, which means its biological or economic productivity
                has been reduced.
              </p>
              <p className="stat-source">Source: UN News</p>
            </div>

            <div className="stat-card fadeIn delay-200">
              <div className="stat-header">
                <div className="stat-icon">🏜️</div>
                <h3 className="stat-title">GULF Region</h3>
              </div>
              <div className="stat-number">9.5%</div>
              <p className="stat-desc">
                Degraded land increased from 0.7% in 2015 to 9.5% in 2019.
              </p>
              <p className="stat-source">Source: ESG Mena</p>
            </div>

            <div className="stat-card fadeIn delay-300">
              <div className="stat-header">
                <div className="stat-icon">🌵</div>
                <h3 className="stat-title">KSA</h3>
              </div>
              <div className="stat-number">70%</div>
              <p className="stat-desc">
                It's estimated that around 70% of the rangelands in Saudi Arabia
                are degraded either severely or averagely.
              </p>
              <p className="stat-source">Source: WOCAT</p>
            </div>
          </div>
        </div>
      </section>

      <section id="technology">
        <div className="container">
          <div className="section-title">
            <h2>Essence of Technology</h2>
            <p className="section-subtitle">
              How OMNI+ works to revitalize soil and promote plant growth
            </p>
          </div>

          <div className="tech-container fadeIn">
            <div className="tech-intro">
              <h3>
                OMNI+ is an organic, safe and highly effective preparation for
                plant growth stimulation
              </h3>
            </div>

            <div className="tech-grid">
              <div className="tech-item fadeIn delay-100">
                <div className="tech-icon">🧪</div>
                <div className="tech-content">
                  <h4>Extraction Process</h4>
                  <p>
                    Extraction of fulvic and humic acids from peat into
                    activated water.
                  </p>
                </div>
              </div>

              <div className="tech-item fadeIn delay-200">
                <div className="tech-icon">❄️</div>
                <div className="tech-content">
                  <h4>Cold Plasma Technology</h4>
                  <p>
                    The process takes place in a cold plasma stream without
                    heating above 60°C.
                  </p>
                </div>
              </div>

              <div className="tech-item fadeIn delay-300">
                <div className="tech-icon">🔬</div>
                <div className="tech-content">
                  <h4>Stable Concentrate</h4>
                  <p>
                    Creation of a stable concentrate of bioactive substances.
                  </p>
                </div>
              </div>

              <div className="tech-item fadeIn delay-400">
                <div className="tech-icon">HA</div>
                <div className="tech-content">
                  <h4>Complete Preservation</h4>
                  <p>
                    Preservation of the whole complex of humic and fulvic acids.
                  </p>
                </div>
              </div>

              <div className="tech-item fadeIn delay-500">
                <div className="tech-icon">NH₂</div>
                <div className="tech-content">
                  <h4>Nutrient Preservation</h4>
                  <p>
                    Preservation of amino acids, trace elements and protein
                    compounds.
                  </p>
                </div>
              </div>
            </div>

            <div className="tech-images">
              <div className="tech-image fadeIn delay-300">
                <img
                  src="plasmaSystem.png"
                  alt="First generation cold plasma system"
                />
                <div className="tech-caption">
                  First and second generation cold plasma systems
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="uniqueness">
        <div className="container">
          <div className="section-title">
            <h2>Scientific Uniqueness</h2>
            <p className="section-subtitle">
              What makes OMNI+ different from other solutions
            </p>
          </div>

          <div className="unique-content">
            <div className="unique-text fadeIn">
              <ul className="unique-list">
                <li className="unique-item">
                  Cold plasma structures water and enhances extraction of fulvic
                  and humic acids from peat;
                </li>
                <li className="unique-item">
                  Increased bioavailability of OMNI+ active ingredients to
                  plants;
                </li>
                <li className="unique-item">
                  Stimulates growth of nitrogen-fixing bacteria in depleted
                  soils;
                </li>
                <li className="unique-item">
                  Fixes dew moisture in the upper soil layer;
                </li>
                <li className="unique-item">
                  Adjustable composition and activity for different plant
                  species.
                </li>
              </ul>
            </div>

            <div className="unique-images fadeIn delay-200">
              <div className="unique-image-grid">
                <div className="unique-image">
                  <img src="/api/placeholder/400/300" alt="Microscopic view" />
                </div>
                <div className="unique-image">
                  <img src="/api/placeholder/400/300" alt="Plowed field" />
                </div>
                <div
                  className="unique-image"
                  style={{ gridColumn: "1 / span 2" }}
                >
                  <img
                    src="/api/placeholder/800/300"
                    alt="Plant growth comparison"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="applications">
        <div className="container">
          <div className="section-title">
            <h2>Application Areas</h2>
            <p className="section-subtitle">
              Where OMNI+ can be used to make a difference
            </p>
          </div>

          <div className="app-cards">
            <div className="app-card fadeIn">
              <div className="app-icon">🌾</div>
              <h3 className="app-title">Agriculture</h3>
              <p>Soil remediation, plant growth stimulation</p>
            </div>

            <div className="app-card fadeIn delay-200">
              <div className="app-icon">🧬</div>
              <h3 className="app-title">Biomedicine</h3>
              <p>Antioxidant and anti-inflammatory effects</p>
            </div>

            <div className="app-card fadeIn delay-300">
              <div className="app-icon">🌍</div>
              <h3 className="app-title">Ecology</h3>
              <p>Recultivation, reduction of environmental toxicity</p>
            </div>
          </div>

          <div className="results-box fadeIn delay-400">
            <div className="results-image">
              <img
                src="/api/placeholder/800/400"
                alt="Wheat growth comparison"
              />
            </div>
            <p className="results-caption">
              Wheat planted in OMNI+-treated building sand produced sprouts
              similar in size to the sprouts in the rich peat soil.
            </p>
            <p className="results-highlight">
              Crops grown with OMNI+ are 100% organic and chemical-free
            </p>
          </div>
        </div>
      </section>

      <section id="competitive">
        <div className="container">
          <div className="section-title">
            <h2>Competitive Analysis</h2>
            <p className="section-subtitle">
              How OMNI+ compares to other solutions on the market
            </p>
          </div>

          <div className="comp-table-wrapper fadeIn">
            <table className="comp-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>OMNI+</th>
                  <th>VALAGRO</th>
                  <th>BIOLCHIM</th>
                  <th>KOPPERT</th>
                  <th>UPL</th>
                  <th>AGRICEN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Origin</td>
                  <td className="comp-highlight">Totally organic</td>
                  <td>Organic certified and conventional products</td>
                  <td>Organic and organomineral fertilizers</td>
                  <td>
                    Only some products are organic. Biological solutions for
                    different practices
                  </td>
                  <td>
                    Only some products organic. A mix of organic and
                    conventional products
                  </td>
                  <td>Organic. Products suitable for organic farming</td>
                </tr>
                <tr>
                  <td>Production Technology</td>
                  <td className="comp-highlight">
                    Cold plasma, no heating 60°C
                  </td>
                  <td>
                    Proprietary GeaPower technology for extraction of active
                    ingredients
                  </td>
                  <td>Organic extraction</td>
                  <td>Biological inoculants</td>
                  <td>Integration with agrochemicals</td>
                  <td>Microbial processes</td>
                </tr>
                <tr>
                  <td>Composition</td>
                  <td className="comp-highlight">
                    Humic and fulvic acids, amino acids, microelements
                  </td>
                  <td>Algae extracts, amino acids</td>
                  <td>Humic substances, algal extracts</td>
                  <td>Microorganisms</td>
                  <td>Various biostimulants</td>
                  <td>Microbiological products</td>
                </tr>
                <tr>
                  <td>Plant Stress Resistance</td>
                  <td className="comp-highlight">
                    Helps plants better tolerate drought, hot conditions, soil
                    salinity and even transplant stress
                  </td>
                  <td>Increases plant resistance to abiotic stresses</td>
                  <td>Increases plant tolerance to cold and heat stresses</td>
                  <td>Increases plant tolerance to drought and salinity</td>
                  <td>Increases plant resistance to drought and salinity</td>
                  <td>Increases plant resistance to abiotic stresses</td>
                </tr>
                <tr>
                  <td>Effectiveness</td>
                  <td className="comp-highlight">
                    Effective in desert regions, promotes moisture retention
                  </td>
                  <td>
                    Less effective in severe drought conditions without
                    supplementary irrigation
                  </td>
                  <td>Dependence on soil and climate specifics</td>
                  <td>Dependence on extreme environmental conditions</td>
                  <td>Dependence on desert conditions</td>
                  <td>Dependence on soil and climate specifics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="ksa">
        <div className="container">
          <div className="section-title">
            <h2>Significance for KSA</h2>
            <p className="section-subtitle">
              How OMNI+ aligns with Saudi Arabia's goals and needs
            </p>
          </div>

          <div className="ksa-grid">
            <div className="ksa-card fadeIn">
              <div className="ksa-header">
                <div className="ksa-icon">🏆</div>
                <h3 className="ksa-title">Compliance with Saudi Vision 2030</h3>
              </div>
              <p>
                Support Vision 2030's goal to double agricultural production by
                2030 and reduce food losses by 50%.
              </p>
            </div>

            <div className="ksa-card fadeIn delay-200">
              <div className="ksa-header">
                <div className="ksa-icon">🏭</div>
                <h3 className="ksa-title">
                  Potential for localization of production
                </h3>
              </div>
              <p>
                Opportunity to establish manufacturing facilities in KSA,
                contributing to local industry and job creation.
              </p>
            </div>

            <div className="ksa-card fadeIn delay-300">
              <div className="ksa-header">
                <div className="ksa-icon">🔬</div>
                <h3 className="ksa-title">
                  Scientific and technological partnerships
                </h3>
              </div>
              <ul className="ksa-list">
                <li className="ksa-item">
                  Partnership with universities and research centers in KSA for
                  joint research on sustainable agriculture.
                </li>
                <li className="ksa-item">
                  Participation in national agri-technology and sustainable
                  agriculture initiatives supported by the KSA government.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cooperation">
        <div className="container">
          <div className="section-title">
            <h2>Cooperation Offer</h2>
            <p className="section-subtitle">
              How we can work together for mutual benefit
            </p>
          </div>

          <div className="coop-content">
            <div className="coop-text fadeIn">
              <ul className="coop-list">
                <li className="coop-item">
                  <div className="coop-check">✓</div>
                  <p>
                    Collaborative research to maximize OMNI+ properties in Saudi
                    Arabia;
                  </p>
                </li>
                <li className="coop-item">
                  <div className="coop-check">✓</div>
                  <p>Licensing and technology transfer;</p>
                </li>
                <li className="coop-item">
                  <div className="coop-check">✓</div>
                  <p>Pilot projects in KSA.</p>
                </li>
              </ul>

              <a href="#contact" className="btn">
                Get in Touch
              </a>
            </div>

            <div className="coop-image fadeIn delay-200">
              <img src="handImage.png" alt="Cooperation visual" />
            </div>
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <div className="container">
          <h2 className="cta-title fadeIn">LET'S GROW TOGETHER!</h2>
          <p className="cta-subtitle fadeIn delay-100">
            From Degraded Lands to Thriving Ecosystems
          </p>
          <a href="#contact" className="btn btn-white fadeIn delay-200">
            Contact Us
          </a>
        </div>
      </div>

      <footer id="contact">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <img src="/api/placeholder/50/50" alt="OMNI+ Logo" />
                <div className="footer-logo-text">
                  OMNI<span>+</span>
                </div>
              </div>
              <p className="footer-about">
                Innovative bioactive preparation based on peat extract under the
                influence of cold plasma.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  f
                </a>
                <a href="#" className="social-link">
                  in
                </a>
                <a href="#" className="social-link">
                  t
                </a>
              </div>
            </div>

            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="#problem">Land Degradation</a>
                </li>
                <li>
                  <a href="#technology">Technology</a>
                </li>
                <li>
                  <a href="#uniqueness">Uniqueness</a>
                </li>
                <li>
                  <a href="#applications">Applications</a>
                </li>
                <li>
                  <a href="#competitive">Competitive Analysis</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="footer-heading">Contact Us</h4>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <p>info@omniplus.com</p>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <p>+123 456 7890</p>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <p>123 Green Innovation St, Saudi Arabia</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 OMNI+. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
