import React from 'react'
import '../footer/footer.css'
import { useNavigate } from 'react-router';

const Footer = () => {
const nav = useNavigate();
    const collectionLinks = [
        "Seating",
        "Dining",
        "Storage",
        "Beds",
        "Outdoor",
      ];
      
      const companyLinks = [
        "Our Story",
        "Artisans",
        "Sustainability",
        "Studio Visits",
        "Press",
      ];
      
      const helpLinks = [
        "Delivery",
        "Returns",
        "Care Guide",
        "Bespoke",
        "Contact",
      ];
      
      function FooterColumn({ title, links }) {
        return (
          <nav className="footer-column">
            <h3>{title}</h3>
      
            {links.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </nav>
        );
      }
      
        return (
          <footer className="site-footer">
            <div className="footer-inner">
      
              {/* Brand */}
              <div className="footer-brand">
                <a href="#" className="footer-logo"  onClick={()=>{nav("/")}}>
                MIGHTEX<span>.</span>
                </a>
      
                <p className="footer-description">
                  Heirloom furniture, crafted for the rooms you
                  <br />
                  love most.
                </p>
      
                <div className="footer-socials">
                  <a href="#">INSTAGRAM</a>
                  <a href="#">PINTEREST</a>
                  <a href="#">STORIES</a>
                </div>
              </div>
      
              {/* Collection */}
              <FooterColumn
                title="COLLECTION"
                links={collectionLinks}
              />
      
              {/* Company */}
              <FooterColumn
                title="COMPANY"
                links={companyLinks}
              />
      
              {/* Help */}
              <FooterColumn
                title="HELP"
                links={helpLinks}
              />
      
            </div>
      
            {/* Bottom */}
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Mightex. All rights reserved.</p>
      
              <div className="footer-legal">
                <a href="#">Privacy Policy</a>
                <span>|</span>
                <a href="#">Terms</a>
                <span>·</span>
                <a href="#">Cookies</a>
              </div>
            </div>
          </footer>
        );
      }


export default Footer
