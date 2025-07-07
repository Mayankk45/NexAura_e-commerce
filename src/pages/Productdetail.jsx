import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { asyncDeleteProduct } from "../store/productactions";
import { toast } from "react-toastify";
import { asyncAddProduct } from "../store/cartactions";

const Productdetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();
    const user = useSelector((state) => state.userReducer.user);

    const products = useSelector((state) => state.productReducer.product);
    const product = products.find((product) => product.id === id);

    if (!product) {
        return;
    }

    const handleAddtoCard = async (product) => {
        let cartItem = {
            price: product.price,
            productId: product.id,
            title: product.title,
            image: product.image,
            model: product.model,
            color: product.color,
            quantity: 1,
        };

        let prdAdded = await dispatch(asyncAddProduct(cartItem));
        if (prdAdded) navigate("/cart");
    };

    const handleUpdateProduct = (id) => {
        navigate(`/admin/create-product/${id}`);
    };

    const handleDeleteProduct = (id) => {
        let deleted = dispatch(asyncDeleteProduct(id));
        if (deleted) {
            toast.success("product deleted");
            navigate("/product_explore");
        }
    };

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
                        <p>
                            <strong>Category:</strong> {product.category}
                        </p>
                        <p className="price">₹{product.price}</p>
                        <div className="productdetails_buttons">
                            <button onClick={() => handleAddtoCard(product)}>
                                Add to Cart
                            </button>
                            {user.isAdmin === true ? (
                                <>
                                    <button
                                        onClick={() =>
                                            handleUpdateProduct(product.id)
                                        }
                                        className="update_product"
                                    >
                                        Update Product
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDeleteProduct(product.id)
                                        }
                                        className="delete_product"
                                    >
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
