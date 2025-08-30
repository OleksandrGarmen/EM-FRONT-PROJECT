import './style.css'
import SubmitButton from '../../../Common/Buttons/SubmitButton'
import { Navigate } from "react-router";
import FooterLogo from '../FooterLogo'
import FooterMenu from '../FooterMenu'
import SearchInput from '../../../Common/Inputs/Search';
import { FilteredHeader } from '../../../../utils/FiltredHeaderMenu';
import { FooterFixture } from '../../../../fixture/FooterFixture';
import type { FooterData } from '../../../../types/FooterType';
import { X, Facebook, Linkedin, Youtube } from "lucide-react";
import SubscribeForm from '../../../Common/Inputs/SubscribeForm';

const Footer = () => {
    const isAuthenticated = !!localStorage.getItem('isAuthenticated')

    const SingIn = () => {
        return <Navigate to="/login" replace />
    }
    const JoinUs = () => {
        return <Navigate to="/register" replace />
    }

    return (
      <footer className="footer">
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
      </footer>
  );
};
export default Footer 
