import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useState } from "react";

const ContactPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        setErrors((prev) => ({ ...prev, [id]: "" }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const user = localStorage.getItem("user");
        if (!user) {
            toast.warning("Login to access the resource");
            return;
        }
        if (!validate()) return;

        toast.success("Message Sent ✅");
        navigate("/");
    };

    return (
        <section className="contact-page">
            <div className="container">
                <h1 className="page-title">Contact Us</h1>
                <p className="page-intro">
                    Got a question, feedback, or need help? We'd love to hear
                    from you.
                </p>

                <form className="contact-form" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <p className="error">{errors.email}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            rows="6"
                            placeholder="Type your message..."
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && (
                            <p className="error">{errors.message}</p>
                        )}
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
