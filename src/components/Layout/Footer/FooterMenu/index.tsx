import './style.css'

type MenuItem = {
  name: string
  link: string
}

const FooterMenu: React.FC<{ items?: MenuItem[] }> = ({ items }) => {
  return (
    <nav className="footer-menu">
      <ul>
        {items?.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}

        {!items && (
          <>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/contact">Contact us</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/careers">Careers</a></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default FooterMenu;
