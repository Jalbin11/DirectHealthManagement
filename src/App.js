import React from 'react';
import Header from './components/Header';
import './styles/App.css';

function App() {
    return (
        <div>
            <Header />
            <section id="welcome">
                <h2>Welcome to Direct Health Management</h2>
                <section id="hero" className="hero">
                    <h1>Your Partner in Healthcare Solutions</h1>
                    <p>
                    Direct Health Management partners with physicians, surgeons, and physician groups to integrate cutting-edge ancillary services that enhance patient care and practice profitability. Based in Frisco, TX, we provide access to the latest advancements in BMA technology, spine hardware, regenerative medicine, pharmacy solutions, and innovative pain therapies.
                    </p>
                    <a href="#contact" className="button">Contact Us</a>
                </section>
            </section>
            <section id="about">
                <h2>Direct Health Management</h2>
                <p>
                    We are the most trusted Healthcare Broker of Surgery Hardware and Ancillary Lines. Products such as the newest BMA Kits that are being paid by insurance & Medicare now! Amnio, Hardware, DME, Pharmacy, Labs, Oral Tox, Genetics, Allergy Program that don't require weekly shots, RX Sinus Program, At Home EEG Studies, At Home Sleep Studies. Consult & manage MSO models, and direct-to-consumer models.
                </p>
            </section>
            <section id="products">
                <h2>Products & Services</h2>
                <p>
                    <strong>*New Products that Ortho's, Foot & Ankle, Pain & Spine Physicians are loving*</strong>
                </p>
                <ul>
                    <li>BMA Kits for Surgeons</li>
                    <li>Spine Hardware</li>
                    <li>The best Amnio/Stem Cell Products available</li>
                    <li>The latest Pharmacy Products</li>
                    <li>Fungal Pharmacy Products</li>
                    <li>Drug Relief - Percpercutaneous cranial neurostimulation therapy for pain</li>
                </ul>
            </section>
            {/* Our Ideal Customer Section */}
            <section id="our-customers">
                <h2>Our Customers</h2>
                <p>
                    Physicians, Surgeons, and Physician Groups looking for ancillary lines to complement their practice, which include:
                    Reach out to us & we will put you in touch with surgeons currently using the product to get your clinical questions answered and get their personal opinions on this game-changing product for your patients!
                </p>
                <h3>Referrals to</h3>
                <p>
                    Surgeon, Surgery, Surgical Center, Surgical, Physicians, Doctors, Doctor, Internist (Internal Medicine), Orthopedist, Podiatrist, Anesthesiologist, Medical, Medical Center, Medical & Health, Medical Procedure.
                </p>
            </section>
            <section id="recommendations">
                <h2>Recommendations Received</h2>
                <div className="card">
                    <h3>Jacob Philemon</h3>
                    <p><strong>Business:</strong> JP Healthy Back Ergonomic LLC</p>
                    <p><strong>Comment:</strong> "Hi Reputations and outstanding services"</p>
                </div>
                <div className="card">
                    <h3>Jaime Ortega</h3>
                    <p><strong>Business:</strong> IT Ally</p>
                    <p><strong>Comment:</strong> "Seem to know their stuff!"</p>
                </div>
                <div className="card">
                    <h3>John L Burrows</h3>
                    <p><strong>Business:</strong> Cbdnaturalproductinnovators</p>
                    <p><strong>Comment:</strong> "Very dedicated and caring staff."</p>
                </div>
                <div className="card">
                    <h3>John F Kinstler</h3>
                    <p><strong>Business:</strong> Kinstler</p>
                    <p><strong>Comment:</strong> "Lynn Dugger is a professional in the areas of Medical Ancillary Lines and Management Services..."</p>
                </div>
                <div className="card">
                    <h3>Terri Parker</h3>
                    <p><strong>Business:</strong> Optimal Solutions Counseling & Case Management, PLLC</p>
                    <p><strong>Comment:</strong> "Lynn is dedicated to providing quality care management!"</p>
                </div>
                <div className="card">
                    <h3>Antonio Stroman</h3>
                    <p><strong>Business:</strong> The Brass Effect, Inc.</p>
                    <p><strong>Comment:</strong> "Lynn has proven over the years her aptitude and dedication to this industry."</p>
                </div>
                <div className="card">
                    <h3>Joe Gallucci</h3>
                    <p><strong>Business:</strong> Advanced Skin Fitness Medical Spa & CoolSculpting Center</p>
                </div>
                <div className="card">
                    <h3>Ashley Newton</h3>
                    <p><strong>Business:</strong> DeltaMed, LLC</p>
                </div>
                <div className="card">
                    <h3>Sophie G</h3>
                    <p><strong>Business:</strong> Lakeside Dental Solutions</p>
                </div>
                <div className="card">
                    <h3>Surekha Machupalli</h3>
                    <p><strong>Business:</strong> North Dallas Womens Care PA</p>
                </div>
                <div className="card">
                    <h3>Steven Sanders</h3>
                    <p><strong>Business:</strong> Precision Orthopedics and Sports Medicine</p>
                </div>
                <div className="card">
                    <h3>Tom Rogers</h3>
                    <p><strong>Business:</strong> doTERRA Essential Oils</p>
                </div>
                <div className="card">
                    <h3>Suzanne Barker</h3>
                    <p><strong>Business:</strong> Suzanne Barker-Nutrition 4 Life</p>
                </div>
            </section>
            <section id="owner">
                <h2>Owner Profile</h2>
                <p>With more than 10 years working with private physicians, Lynn Dugger works directly with each client to ensure that Direct Health Management provides the organized and efficient delivery of the products your practice needs to deliver top of the line health care to your patients.</p>
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
