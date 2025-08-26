import './style.css'
import SubmitButton from '../../../Common/Buttons/SubmitButton'
import { Navigate } from "react-router";
<<<<<<< HEAD
import FooterLogo from '../FooterLogo'
import FooterMenu from '../FooterMenu'
=======
import SubscribeForm from '../../../Common/Inputs/SubscribeForm';
import HeaderLogo from '../FooterLogo'
import HeaderMenu from '../FooterMenu'
>>>>>>> 8e5e20d2e2ed3b112f0c054e52b8d89b39b57b50
import SearchInput from '../../../Common/Inputs/Search';
import { FilteredHeader } from '../../../../utils/FiltredHeaderMenu';
import { FooterFixture } from '../../../../fixture/FooterFixture';
import type { FooterData } from '../../../../types/FooterType';
import { Twitter, Facebook, Linkedin, Youtube } from "lucide-react";


const Footer = () => {
    const isAuthenticated = !!localStorage.getItem('isAuthenticated')

    const SingIn = () => {
        return <Navigate to="/login" replace />
    }
    const JoinUs = () => {
        return <Navigate to="/register" replace />
    }

    return (
<<<<<<< HEAD
 <footer className="footer">
          <div className="subscribe-box">
            <p className="subscribe-title">Subscribe our new offers !</p>
            <div className="subscribe-form">
              <input type="email" placeholder="Input your email" />
              <button>Subscribe</button>
            </div>
          </div>
=======
       <footer className="footer">
      <div className="subscribe-box">
        <p className="subscribe-title">Subscribe our new offers !</p>
        <SubscribeForm />
      </div>
>>>>>>> 8e5e20d2e2ed3b112f0c054e52b8d89b39b57b50

          <div className="footer-main">
            <FooterLogo/>
            <FooterMenu/>
          </div>

          <div className="footer-bottom">
            <p>© 2022 Brand, Inc. • <a href="/privacy">Privacy</a> • <a href="/terms">Terms</a> • <a href="/sitemap">Sitemap</a></p>
            <div className="social-icons">
          <a href="#" aria-label="Twitter">
          <Twitter size={24} />
      </a>
      <a href="#" aria-label="Facebook">
        <Facebook size={24} />
      </a>
      <a href="#" aria-label="LinkedIn">
        <Linkedin size={24} />
      </a>
      <a href="#" aria-label="YouTube">
        <Youtube size={24} />
      </a>
            </div>
          </div>
       </footer>
  );
};
export default Footer 
