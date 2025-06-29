import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Products = () => {
    const [headPhones, setHeadPhones] = useState([]);
    const [earbuds, setEarbuds] = useState([]);
    const [smartwatch, setSmartwatch] = useState([]);
    const [speakers, setSpeakers] = useState([]);

    const navigate = useNavigate();

    let products = useSelector((state) => state.productReducer.product);

    useEffect(() => {
        if (products && products.length > 0) {
            setHeadPhones(products.filter((p) => p.category === "headphone"));
            setEarbuds(products.filter((p) => p.category === "earbuds"));
            setSmartwatch(products.filter((p) => p.category === "smartwatch"));
            setSpeakers(products.filter((p) => p.category === "speaker"));
        }
    }, [products]);

    const productClick = (id) => {
        navigate(`/product_details/${id}`);
    };

    let renderHeadphones = headPhones.map((item, idx) => (
        <div className="card" key={idx}>
            <div className="card_img">
                <img src={item.image} alt={item.title} />
            </div>

            <p className="title">{item.title}</p>
            <div className="details">
                <p>{item.brand}</p>
                <p>{item.model}</p>
                <p>{item.color}</p>
            </div>
            <p className="price">
                <span>₹ </span>
                {item.price}
            </p>
            <div className="card_bottom">
                <button>add to cart</button>
                <button onClick={() => productClick(item.id)}>
                    view details
                </button>
            </div>
        </div>
    ));

    let renderEarbuds = earbuds.map((item, idx) => (
        <div className="card" key={idx}>
            <div className="card_img">
                <img src={item.image} alt={item.title} />
            </div>

            <p className="title">{item.title}</p>
            <div className="details">
                <p>{item.brand}</p>
                <p>{item.model}</p>
                <p>{item.color}</p>
            </div>
            <p className="price">
                <span>₹ </span>
                {item.price}
            </p>
            <div className="card_bottom">
                <button>add to cart</button>
                <button onClick={() => productClick(item.id)}>
                    view details
                </button>
            </div>
        </div>
    ));

    let renderSpeaker = speakers.map((item, idx) => (
        <div className="card" key={idx}>
            <div className="card_img">
                <img src={item.image} alt={item.title} />
            </div>

            <p className="title">{item.title}</p>
            <div className="details">
                <p>{item.brand}</p>
                <p>{item.model}</p>
                <p>{item.color}</p>
            </div>
            <p className="price">
                <span>₹ </span>
                {item.price}
            </p>

            <button>add to cart</button>
            <button onClick={() => productClick(item.id)}>view details</button>
        </div>
    ));

    let renderSmartwatch = smartwatch.map((item, idx) => (
        <div className="card" key={idx}>
            <div className="card_img">
                <img src={item.image} alt={item.title} />
            </div>

            <p className="title">{item.title}</p>
            <div className="details">
                <p>{item.brand}</p>
                <p>{item.model}</p>
                <p>{item.color}</p>
            </div>
            <p className="price">
                <span>₹ </span>
                {item.price}
            </p>
            <div className="card_bottom">
                <button>add to cart</button>
                <button onClick={() => productClick(item.id)}>
                    view details
                </button>
            </div>
        </div>
    ));

    return (
        <div className="products">
            <div className="headphones">
                <h2>HEADPHONES</h2>
                <div className="card_container">
                    {renderHeadphones.length > 0 ? (
                        renderHeadphones
                    ) : (
                        <span className="no-stock">No Stock Available !!!</span>
                    )}
                </div>
            </div>
            <div className="earbuds">
                <h2>EARBUDS</h2>
                <div className="card_container">
                    {renderEarbuds.length > 0 ? (
                        renderEarbuds
                    ) : (
                        <span className="no-stock">No Stock Available !!!</span>
                    )}
                </div>
            </div>
            <div className="smartwatch">
                <h2>SMARTWATCH</h2>
                <div className="card_container">
                    {renderSmartwatch.length > 0 ? (
                        renderSmartwatch
                    ) : (
                        <span className="no-stock">No Stock Available !!!</span>
                    )}
                </div>
            </div>
            <div className="speaker">
                <h2>SPEAKER</h2>
                <div className="card_container">
                    {renderSpeaker.length > 0 ? (
                        renderSpeaker
                    ) : (
                        <span className="no-stock">No Stock Available !!!</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
