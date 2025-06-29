import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoginUser } from "../../store/useractions";

const Userlogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        data.isAdmin = false;
        let loginSucced = await dispatch(asyncLoginUser(data));
        if (loginSucced) navigate("/");
    };

    return (
        <div className="login-wrapper">
            <div className="login-page">
                <h2>User Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("email", {
                            required: "Please enter email",
                        })}
                        type="email"
                        placeholder="Enter email"
                    />
                    {errors.email && (
                        <p className="error">{errors.email.message}</p>
                    )}

                    <input
                        {...register("password", {
                            required: "Please enter password",
                        })}
                        type="password"
                        placeholder="Enter password"
                    />
                    {errors.password && (
                        <p className="error">{errors.password.message}</p>
                    )}

                    <input type="submit" />
                    <p>
                        OR
                        <span onClick={() => navigate("/user-signup")}>
                            Sign-up
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Userlogin;
