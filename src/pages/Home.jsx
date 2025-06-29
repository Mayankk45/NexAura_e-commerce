import BannerCarousel from "./BannerCarousel";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();

    const productClicked = () => {
        navigate("/product_explore");
    };

    return (
        <div className="home">
            <div className="home_view_1">
                <h1 className="home__heading">Explore Items</h1>
                <p className="home__subheading">Top picks just for you</p>

                <BannerCarousel />
            </div>

            <section className="our-services">
                <div className="container">
                    <h2 className="title">Our Services</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="icon">🚚</div>
                            <h3 className="heading">Fast Delivery</h3>
                            <p className="text">
                                Get your orders delivered within 2-3 days with
                                real-time tracking.
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="icon">📞</div>
                            <h3 className="heading">24/7 Support</h3>
                            <p className="text">
                                Our customer support is available around the
                                clock for assistance.
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="icon">💳</div>
                            <h3 className="heading">Secure Payment</h3>
                            <p className="text">
                                We provide 100% secure payment gateways with
                                multiple options.
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="icon">🔁</div>
                            <h3 className="heading">Easy Returns</h3>
                            <p className="text">
                                Hassle-free 7-day return policy on all products.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featured-categories-split">
                <div className="container">
                    <h2 className="section-title">Featured Categories</h2>
                    <div className="split-grid">
                        <div className="column">
                            <div className="category-card">
                                <img
                                    src="/assets/feature_headphone.jpg"
                                    alt="Headphones"
                                />
                                <h3 onClick={productClicked}>
                                    Headphones <span>explore more</span>
                                </h3>
                            </div>
                            <div className="category-card">
                                <img
                                    src="/assets/feature_earbud.jpg"
                                    alt="Earbuds"
                                />
                                <h3 onClick={productClicked}>
                                    Earbuds<span>explore more</span>
                                </h3>
                            </div>
                        </div>
                        <div className="column">
                            <div className="category-card">
                                <img
                                    src="/assets/feature_watch.jpg"
                                    alt="Smartwatch"
                                />
                                <h3 onClick={productClicked}>
                                    Smart Watches<span>explore more</span>
                                </h3>
                            </div>
                            <div className="category-card">
                                <img
                                    src="/assets/feature_speaker.jpg"
                                    alt="Speakers"
                                />
                                <h3 onClick={productClicked}>
                                    Speakers<span>explore more</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-choose-us">
                <div className="container">
                    <h2 className="section-title">Why Choose Us</h2>
                    <div className="features-grid">
                        <div className="feature-box">
                            <i className="feature-icon">💯</i>
                            <h3>Top Quality Products</h3>
                            <p>
                                We source only premium-grade electronics with
                                quality checks.
                            </p>
                        </div>
                        <div className="feature-box">
                            <i className="feature-icon">⚡</i>
                            <h3>Lightning Fast Delivery</h3>
                            <p>
                                Get your order delivered within 2–4 working
                                days.
                            </p>
                        </div>
                        <div className="feature-box">
                            <i className="feature-icon">⭐</i>
                            <h3>Trusted by Thousands</h3>
                            <p>
                                With 5,000+ happy customers, your satisfaction
                                is our priority.
                            </p>
                        </div>
                        <div className="feature-box">
                            <i className="feature-icon">🛡️</i>
                            <h3>Secure & Safe</h3>
                            <p>
                                We use top-tier encryption and safety practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="site-footer">
                <div className="footer-container">
                    <div className="footer-column brand">
                        <h2>SoundHub</h2>
                        <p>
                            Your one-stop shop for headphones, earbuds,
                            speakers, and smartwatches. Quality sound, fast
                            delivery.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/product_explore">Products</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Support</h4>
                        <ul>
                            <li>
                                <Link to="/faq">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/returns">Returns</Link>
                            </li>
                            <li>
                                <Link to="/shipping">Shipping Info</Link>
                            </li>
                            <li>
                                <Link to="/privacy">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <Link to="#">
                                <i className="fab fa-facebook-f">🔵</i>
                            </Link>
                            <Link to="#">
                                <i className="fab fa-instagram">🟣</i>
                            </Link>
                            <Link to="#">
                                <i className="fab fa-twitter">🔷</i>
                            </Link>
                            <Link to="#">
                                <i className="fab fa-youtube">🔴</i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 SoundHub. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
