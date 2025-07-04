import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncLoginUser } from "../../store/useractions";
import { toast } from "react-toastify";

const Adminlogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const loginSucceed = await dispatch(asyncLoginUser(data, true));
        if (loginSucceed) navigate("/");
    };

    return (
        <div className="login-wrapper">
            <div className="login-page">
                <h2>Admin Login</h2>
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

                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default Adminlogin;
