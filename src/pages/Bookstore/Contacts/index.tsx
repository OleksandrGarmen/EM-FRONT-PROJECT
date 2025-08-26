import './style.css'
import LayoutPage from '../../../layout/layoutPage'
import SubmitButton from '../../../components/Common/Buttons/SubmitButton'
const Contacts = () => {
    return (
        <LayoutPage>
          <div className="contacts-container">
                <h1 className="contacts-title">Контакти</h1>
                <div className="contact-info">
                    <p><strong>Адреса:</strong> Вулиця Свято-Макаріївська, 44, Черкаси</p>
                    <p><strong>Телефон:</strong> +38(044)123-45-67</p>
                    <p><strong>Email:</strong> <a href="/">test@example.com</a></p>
                </div>
                <div className="working-hours">
                    <p><strong>Графік роботи:</strong></p>
                        <p>Пн–Пт: 08:00–18:00</p>
                        <p>Сб: 10:00–16:00</p>
                        <p>Нд: вихідний</p>
                </div>
                <div className="map-container">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.7774178370577!2d32.07205291596175!3d49.444437979348454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14e3e67c230f5%3A0x831d3b3bfa0b4a65!2z0KHRgtGA0L7QtdC90LjRhtC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNDQsINCh0L7QvdC-0YDQvtCz0LIsINCe0LrQu9Cw0YHRgtGMLCAyMDgwMA!5e0!3m2!1suk!2sua!4v1692714776982!5m2!1suk!2sua"
                    width="100%"
                    height="580"></iframe>
                </div>
            </div>    
        </LayoutPage>
    )
}

export default Contacts
