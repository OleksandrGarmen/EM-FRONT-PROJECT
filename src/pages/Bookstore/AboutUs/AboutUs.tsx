import './style.css'
import LayoutPage from '../../../layout/layoutPage'

const AboutUs = () => {
    return (
        <LayoutPage>
            <div className="about-us-container">
                <h1 className="hero-title">Ласкаво просимо до Book Heaven</h1>
                <p className="hero-subtitle">Місце, де кожна книга знаходить свого читача</p>
                <section className="section">
                    <h2>Наша історія</h2>
                    <p>
                        Магазин відкрився у 2010 році з маленької крамнички, де ми хотіли зібрати
                        найцікавіші книги для наших читачів. З того часу ми стали затишним місцем
                        для всіх, хто любить читати.
                    </p>
                </section>
                <section className="section">
                    <h2>Наші цінності</h2>
                    <p>
                        Ми цінуємо знання, підтримку локальних авторів та любов до книги. Для нас
                        важливо, щоб кожен гість відчував себе частиною книжкової родини.
                    </p>
                </section>
                <section className="section">
                    <h2>Чим ми особливі</h2>
                    <ul>
                        <li>Рідкісні та авторські видання</li>
                        <li>Консультації від експертів та рекомендації</li>
                        <li>Читальні та заходи для дорослих і дітей</li>
                        <li>Онлайн-замовлення з доставкою по всій Україні</li>
                    </ul>
                </section>
                <section className="section">
                    <h2>Завітайте до нас</h2>
                    <p>
                        Відкрийте нові світи разом із Book Heaven. Підпишіться на нашу розсилку, щоб
                        першими дізнаватися про нові надходження та події.
                    </p>
                </section>
            </div>
        </LayoutPage>
    )
}

export default AboutUs
