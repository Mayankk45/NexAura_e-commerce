import { useEffect } from "react";
import Mainroutes from "./Mainroutes";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import { asyncGetProduct } from "./store/productactions";
import { useDispatch } from "react-redux";
import { asyncGetCart } from "./store/cartactions";
import { asyncGetUser } from "./store/useractions";

const App = () => {
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncGetProduct());
        dispatch(asyncGetCart());
        dispatch(asyncGetUser());
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
