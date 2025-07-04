import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Authwrapper = (props) => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.userReducer.user);
    useEffect(() => {
        if (!user) navigate("/user-login");
    }, []);

    return <>{user && props.children}</>;
};

export default Authwrapper;
