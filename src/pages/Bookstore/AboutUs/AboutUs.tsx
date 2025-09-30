import './style.css'
import LayoutPage from '../../../layout/layoutPage'

const AboutUs = () => {
    return (
        <LayoutPage>
            <div className="about-us-container">
                <h1 className="hero-title">Welcome to Book Heaven</h1>
                <section className="section">
                    <h2>Our history</h2>
                    <p>
                        The store opened in 2010 as a small shop where we wanted to collect the most interesting books for our readers. Since then, we have become a cozy place for everyone who loves to read.
                    </p>
                </section>
                <section className="section">
                    <h2>Our values</h2>
                    <p>
                        We value knowledge, support for local authors, and a love of books. It is important to us that every guest feels like part of the book family. We are open to new ideas and suggestions. We are always ready to listen to your wishes and needs.
                    </p>
                </section>
                <section className="section">
                    <h2>What makes us special</h2>
                    <ul>
                        <li>Rare and limited editions</li>
                        <li>Expert advice and recommendations</li>
                        <li>Reading rooms and events for adults and children</li>
                        <li>Online orders with delivery throughout Ukraine</li>
                    </ul>
                </section>
                <section className="section">
                    <h2>Come visit us</h2>
                    <p>
                        Discover new worlds with Book Heaven. Subscribe to our newsletter to be the first to know about new arrivals and events.
                    </p>
                </section>
            </div>
        </LayoutPage>
    )
}

export default AboutUs
