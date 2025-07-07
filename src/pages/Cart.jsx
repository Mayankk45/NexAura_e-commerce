import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { IoAdd, IoRemove } from "react-icons/io5";
import { asyncAddProduct, asyncGetCart } from "../store/cartactions";
import { asyncDeleteItemfromCart } from "../store/cartactions";
import { asyncDecreaseProduct } from "../store/cartactions";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cartReducer.cart);
    const cartProducts = cart[0]?.product || [];

    const handleIncreaseProduct = (product) => {
        dispatch(asyncAddProduct(product));
    };

    const handleDecreaseProduct = (product) => {
        dispatch(asyncDecreaseProduct(product));
    };

    const handleRemoveItem = (product) => {
        dispatch(asyncDeleteItemfromCart(product));
    };

    useEffect(() => {
        dispatch(asyncGetCart());
    }, []);

    return (
        <>
            <div className="cart-wrapper">
                <div className="cart-container">
                    <h2>Your Cart</h2>
                    {cartProducts.length > 0 ? (
                        <>
                            {cartProducts.map((product, index) => (
                                <div className="cart-item" key={index}>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="cart-image"
                                    />

                                    <div className="cart-details">
                                        <h3>{product.title}</h3>
                                        <div className="meta">
                                            <span className="label">
                                                Model:
                                            </span>{" "}
                                            {product.model}
                                        </div>
                                        <div className="meta">
                                            <span className="label">
                                                Color:
                                            </span>{" "}
                                            {product.color}
                                        </div>
                                        <div className="meta rupee">
                                            {" ₹ "}
                                            {product.price}
                                        </div>
                                    </div>

                                    <div className="cart-side">
                                        <small>Quantity</small>
                                        <div className="quantity-controls">
                                            <IoRemove
                                                onClick={() =>
                                                    handleDecreaseProduct(
                                                        product
                                                    )
                                                }
                                                className="icon"
                                            />
                                            <span>{product.quantity}</span>
                                            <IoAdd
                                                onClick={() =>
                                                    handleIncreaseProduct(
                                                        product
                                                    )
                                                }
                                                className="icon"
                                            />
                                        </div>
                                        <FaTrashAlt
                                            onClick={() =>
                                                handleRemoveItem(product)
                                            }
                                            className="trash-icon"
                                            title="Remove item"
                                        />
                                    </div>
                                </div>
                            ))}
                            <div
                                className="cart_checkout"
                                onClick={() => navigate("/checkout")}
                            >
                                Checkout
                            </div>
                        </>
                    ) : (
                        <p className="empty-text">No items in cart</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
