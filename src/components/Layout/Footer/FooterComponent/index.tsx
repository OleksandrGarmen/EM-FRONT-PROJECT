import './style.css'
import { Navigate, useLocation } from "react-router";
import FooterLogo from '../FooterLogo'
import FooterMenu from '../FooterMenu'
import { X, Facebook, Linkedin, Youtube } from "lucide-react";
import SubscribeForm from '../../../Common/Inputs/SubscribeForm';
import SignupBanner from '../../../Common/SignupBanner/SignupBanner';

const Footer = () => {
    const isAuthenticated = !!localStorage.getItem('isAuthenticated')
    const location = useLocation()

    const SingIn = () => {
        return <Navigate to="/login" replace />
    }
    const JoinUs = () => {
        return <Navigate to="/register" replace />
    }

    return (
      <>
        <footer className="footer">
          {location.pathname.startsWith('/books') && !isAuthenticated && <SignupBanner />}
          <div className="footer-container">
            <div className="subscribe-box">
              <p className="subscribe-title">Subscribe our new offers !</p>
              <SubscribeForm />
            </div>

            <div className="footer-main">
              <FooterLogo/>
              <FooterMenu/>
            </div>

            <div className="footer-bottom">
              <div>
                <p>© 2022 Brand, Inc. • <a href="/privacy" className='link'>Privacy</a> • <a href="/terms" className='link'>Terms</a> • <a href="/sitemap" className='link'>Sitemap</a></p>
              </div>
              <div className="social-icons">
                <a href="#" aria-label="Twitter" className='link'>
                    <X size={24} />
                </a>
                <a href="#" aria-label="Facebook" className='link'>
                  <Facebook size={24} />
                </a>
                <a href="#" aria-label="LinkedIn" className='link'>
                  <Linkedin size={24} />
                </a>
                <a href="#" aria-label="YouTube" className='link'>
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
  );
};
export default Footer 
