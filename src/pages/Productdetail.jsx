import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Productdetail = () => {
    const { id } = useParams();
    const user = useSelector((state) => state.userReducer.user);
    console.log(user);

    const products = useSelector((state) => state.productReducer.product);
    const product = products.find((product) => product.id === id);

    if (!product) {
        return;
    }

    return (
        <div className="product-detail">
            <div className="container">
                <div className="product-wrapper">
                    <div className="product-img">
                        <img src={product.image} alt={product.title} />
                    </div>

                    <div className="product-info">
                        <h2>{product.title}</h2>
                        <p className="description">{product.description}</p>
                        <p>
                            <strong>Brand:</strong> {product.brand}
                        </p>
                        <p>
                            <strong>Model:</strong> {product.model}
                        </p>
                        <p>
                            <strong>Color:</strong> {product.color}
                        </p>
                        <p className="price">₹{product.price}</p>
                        <div className="productdetails_buttons">
                            <button>Add to Cart</button>
                            {user ? (
                                <>
                                    <button className="update_product">
                                        Update Product
                                    </button>
                                    <button className="delete_product">
                                        Delete Product
                                    </button>
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productdetail;
