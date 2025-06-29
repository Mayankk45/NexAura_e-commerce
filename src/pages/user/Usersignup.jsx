import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { asyncRegisterUser } from "../../store/useractions";

const Usersignup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        let id = nanoid();
        data.id = id;
        dispatch(asyncRegisterUser(data));
        navigate("/user-login");
    };

    return (
        <div className="signup-wrapper">
            <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Register User</h2>
                <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="Enter name"
                />
                {errors.name && <p className="error">{errors.name.message}</p>}

                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "Invalid email address",
                        },
                    })}
                    type="email"
                    placeholder="Enter email"
                />
                {errors.email && (
                    <p className="error">{errors.email.message}</p>
                )}

                <input
                    {...register("password", {
                        required: "Password is required",
                    })}
                    type="password"
                    placeholder="Enter password"
                />
                {errors.password && (
                    <p className="error">{errors.password.message}</p>
                )}

                <input type="submit" value="Signup" />
                <p>
                    OR
                    <span onClick={() => navigate("/user-login")}>Login</span>
                </p>
            </form>
        </div>
    );
};

export default Usersignup;
