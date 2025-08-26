import './style.css'
import SubmitButton from '../../../Common/Buttons/SubmitButton'
import { Navigate } from "react-router";
import SubscribeForm from '../../../Common/Inputs/SubscribeForm';
import HeaderLogo from '../FooterLogo'
import HeaderMenu from '../FooterMenu'
import SearchInput from '../../../Common/Inputs/Search';
import { FilteredHeader } from '../../../../utils/FiltredHeaderMenu';
import { FooterFixture } from '../../../../fixture/FooterFixture';

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

      </div>

      <div className="footer-bottom">
        <p>© 2022 Brand, Inc. • <a href="/privacy">Privacy</a> • <a href="/terms">Terms</a> • <a href="/sitemap">Sitemap</a></p>
        <div className="social-icons">
          <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
          <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
          <a href="#"><img src="/icons/youtube.svg" alt="YouTube" /></a>
        </div>
      </div>
    </footer>
  );
};
export default Footer 
