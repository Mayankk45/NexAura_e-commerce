import { Link } from "react-router";

const ServicePage = () => {
    return (
        <section className="service-page">
            <div className="container">
                <h1 className="page-title">Our Services</h1>
                <p className="page-intro">
                    We don't just sell gadgets — we deliver value, support, and
                    convenience that make your experience unforgettable.
                </p>

                <div className="service-grid">
                    <div className="service-card">
                        <h3>📦 Fast Delivery</h3>
                        <p>
                            Nationwide delivery in 2–4 days. Real-time tracking
                            and secure handling.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>🔄 Hassle-Free Returns</h3>
                        <p>
                            Easy 7-day return policy. We'll pick it up from your
                            door if you're not satisfied.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>🔐 Secure Payments</h3>
                        <p>
                            100% safe payment gateways including UPI,
                            Credit/Debit, and Net Banking.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>💬 24/7 Support</h3>
                        <p>
                            Our friendly team is always here for order help,
                            questions, or product guidance.
                        </p>
                    </div>
                </div>

                <div className="cta-button">
                    <Link to="/product_explore">Start Shopping</Link>
                </div>
            </div>
        </section>
    );
};

export default ServicePage;
