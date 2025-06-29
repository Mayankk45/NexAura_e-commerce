const ContactPage = () => {
    return (
        <section className="contact-page">
            <div className="container">
                <h1 className="page-title">Contact Us</h1>
                <p className="page-intro">
                    Got a question, feedback, or need help? We'd love to hear
                    from you.
                </p>

                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            rows="6"
                            placeholder="Type your message..."
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactPage;
