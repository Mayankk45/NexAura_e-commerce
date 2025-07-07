import { Link } from "react-router";

const AboutPage = () => {
    return (
        <section className="about-page">
            <div className="container">
                <h1 className="page-title">About NexAura</h1>

                <div className="about-content">
                    <p>
                        <strong>SoundHub</strong> is your trusted destination
                        for high-quality headphones, earbuds, smartwatches, and
                        speakers. We’re passionate about delivering premium
                        audio experiences and cutting-edge wearable tech that
                        fits your lifestyle and budget.
                    </p>

                    <p>
                        Our journey began with a vision to bring the best tech
                        gadgets to every doorstep in India — fast, secure, and
                        affordable. With a customer-first mindset, SoundHub
                        focuses on quality, trust, and lightning-fast service.
                    </p>

                    <p>
                        Whether you’re a music enthusiast, a fitness lover, or
                        just someone looking to upgrade your tech, we’re here
                        for you.
                    </p>

                    <div className="cta-button">
                        <Link to="/product_explore">Explore Our Products</Link>
                    </div>
                </div>

                <div className="stats-grid">
                    <div className="stat-box">
                        <h3>5K+</h3>
                        <p>Happy Customers</p>
                    </div>
                    <div className="stat-box">
                        <h3>500+</h3>
                        <p>Products Delivered</p>
                    </div>
                    <div className="stat-box">
                        <h3>4.9★</h3>
                        <p>Customer Rating</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
