import './style.css'
import { Navigate } from "react-router";
import FooterLogo from '../FooterLogo'
import FooterMenu from '../FooterMenu'
import SubscribeForm from '../../../Common/Inputs/SubscribeForm';
import { FooterFixture } from '../../../../fixture/FooterFixture';
import type { FooterData } from '../../../../types/FooterType';
import { X, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
    const isAuthenticated = !!localStorage.getItem('isAuthenticated')

    const SingIn = () => <Navigate to="/login" replace />
    const JoinUs = () => <Navigate to="/register" replace />

    return (
        <footer className="footer">
            <div className="subscribe-box">
                <p className="subscribe-title">Subscribe our new offers !</p>
                <SubscribeForm />
            </div>

            <div className="footer-main">
                <FooterLogo />
                <FooterMenu />
            </div>

            <div className="footer-bottom">
                <p>
                    © 2022 Brand, Inc. • 
                    <a href="/privacy"> Privacy</a> • 
                    <a href="/terms"> Terms</a> • 
                    <a href="/sitemap"> Sitemap</a>
                </p>
                <div className="social-icons">
                    <a href="#" aria-label="Twitter"><X size={24} /></a>
                    <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
                    <a href="#" aria-label="LinkedIn"><Linkedin size={24} /></a>
                    <a href="#" aria-label="YouTube"><Youtube size={24} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
