import { useEffect } from "react";
import Mainroutes from "./Mainroutes";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import { asyncGetProduct } from "./store/productactions";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetCart } from "./store/cartactions";

const App = () => {
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncGetProduct());
        dispatch(asyncGetCart());
    }, []);

    return (
        <div>
            <Navbar />
            <Mainroutes />
            <ToastContainer position="top-center" autoClose={2000} />
        </div>
    );
};

export default App;
