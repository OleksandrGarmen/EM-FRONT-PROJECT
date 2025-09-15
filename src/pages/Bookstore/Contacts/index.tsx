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
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2056.0742953779394!2d32.0571158!3d49.4316609!3m2!1i1024!2i768!4f17!3m3!1m2!1s0x0%3A0x0!2zNDnCsDI1JzIyLjciTiAzMsKwMDMnMzQuNyJF!5e0!3m2!1suk!2sua!4v1692714776982!5m2!1suk!2sua"
                        ></iframe>
                    </div>
                </div>
        </LayoutPage>
    );
};

export default Contacts;
