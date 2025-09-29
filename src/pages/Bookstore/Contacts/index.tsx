import './style.css';
import LayoutPage from '../../../layout/layoutPage';
import SubmitButton from '../../../components/Common/Buttons/SubmitButton';

const Contacts = () => {
    return (
        <LayoutPage>
                <div className="contact-container">
                    <div className="contact-info-section">
                        <h1 className="contacts-title">Контакти</h1>

                        <div className="contact-info">
                            <p><strong>Адреса:</strong> Вулиця Свято-Макаріївська, 44, Черкаси</p>
                            <p><strong>Телефон:</strong> <a href="tel:+380441234567">+38 (044) 123-45-67</a></p>
                            <p><strong>Email:</strong> <a href="mailto:test@example.com">test@example.com</a></p>
                        </div>

                        <div className="working-hours">
                            <p><strong>Графік роботи:</strong></p>
                            <p>Пн–Пт: 08:00–18:00</p>
                            <p>Сб: 10:00–16:00</p>
                            <p>Нд: вихідний</p>
                        </div>

                        <form className="contact-form">
                            <input type="text" placeholder="Ваше ім'я" />
                            <input type="email" placeholder="Ваш email" />
                            <textarea placeholder="Ваше повідомлення"></textarea>
                            <SubmitButton text="Відправити" />
                        </form>
                    </div>
                    <div className="map-section">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.5796612762076!2d32.056987515892245!3d49.43167337934845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14d29cfb1c58f%3A0x7dcbd702c97e0d55!2z0LLRg9C70LjRhtGPINCc0L7QsdC-0YDQsNGF0LAsIDQ0LCDQp9C10YDQutCw0Y8sINCl0LDRgNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAxODA0MA!5e0!3m2!1suk!2sua!4v1692714776982!5m2!1suk!2sua"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    </div>

                </div>
        </LayoutPage>
    );
};

export default Contacts;
