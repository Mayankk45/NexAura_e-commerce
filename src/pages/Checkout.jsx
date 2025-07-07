import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Checkout = () => {
    const navigate = useNavigate();
    const [totalProduct, setTotalProduct] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const cart = useSelector((state) => state.cartReducer.cart);
    const cartProducts = cart[0]?.product || [];

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            toast.warning("Login to access the resource");
            navigate("/user-login");
        }
    }, []);

    useEffect(() => {
        if (cartProducts.length > 0) {
            const price = cartProducts.reduce(
                (acc, item) => acc + item.quantity * item.price,
                0
            );
            const total = cartProducts.reduce(
                (acc, item) => acc + item.quantity,
                0
            );

            setTotalPrice(price);
            setTotalProduct(total);
        }
    }, [cartProducts]);

    const handlePlaceOrder = () => {
        toast.success("Order placed, thank you for using NexAura");
        navigate("/");
    };

    return (
        <div className="checkout-wrapper">
            <div className="checkout-container">
                <h2>Checkout</h2>
                <div className="summary-box">
                    <p>
                        Total Items: <span>{totalProduct}</span>
                    </p>
                    <p>
                        Total Price: <span>₹{totalPrice}</span>
                    </p>
                </div>

                <div className="checkout-list">
                    {cartProducts.map((item, idx) => (
                        <div className="checkout-item" key={idx}>
                            <img src={item.image} alt={item.title} />
                            <div className="checkout-details">
                                <h3>{item.title}</h3>
                                <p>
                                    Model: <span>{item.model}</span>
                                </p>
                                <p>
                                    Color: <span>{item.color}</span>
                                </p>
                                <p>Price: ₹{item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => navigate("/cart")}
                    className="place-order-btn"
                >
                    Go to cart
                </button>
                <button onClick={handlePlaceOrder} className="place-order-btn">
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default Checkout;
