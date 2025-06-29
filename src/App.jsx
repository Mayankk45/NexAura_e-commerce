import { useEffect } from "react";
import Mainroutes from "./Mainroutes";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import { asyncGetProduct } from "./store/productactions";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
    let dispatch = useDispatch();
    let prd = useSelector((state) => state.productReducer.product);
    console.log(prd);
    useEffect(() => {
        dispatch(asyncGetProduct());
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
