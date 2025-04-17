import React from 'react';
import Header from './components/Header';
import './styles/App.css';

function App() {
    return (
        <div>
            <Header />
            <section id="welcome">
                <h2>Welcome</h2>
                <p>
                    Lynn Dugger Direct Health Management partners with physicians, surgeons, and physician groups to integrate cutting-edge ancillary services that enhance patient care and practice profitability. Based in Frisco, TX, we provide access to the latest advancements in BMA technology, spine hardware, regenerative medicine, pharmacy solutions, and innovative pain therapies.
                </p>
            </section>
            <section id="about">
                <h2>About Lynn Dugger Direct Health Management</h2>
                <p>
                    Lynn Dugger Direct Health Management serves as a dedicated healthcare brokerage, specializing in connecting medical professionals with high-value surgical hardware and ancillary lines. Our comprehensive portfolio includes innovative BMA kits covered by insurance and Medicare, advanced amniotic and stem cell products, specialized pharmacy offerings, and non-invasive pain relief solutions like Percpercutaneous cranial neurostimulation therapy.
                </p>
            </section>
            <section id="products">
                <h2>Products & Services</h2>
                <p>Details about products and services go here.</p>
            </section>
            <section id="recommendations">
                <h2>Recommendations</h2>
                <p>Testimonials and recommendations go here.</p>
            </section>
            <section id="owner">
                <h2>Owner Profile</h2>
                <p>Details about Lynn Dugger go here.</p>
            </section>
            <section id="contact">
                <h2>Contact Us</h2>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Message:
                        <textarea name="message"></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    );
}

export default App;
