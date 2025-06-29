import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const Adminlogin = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Login Data:", data);
        // You can trigger your login API here
    };

    return (
        <div className="login-wrapper">
            <div className="login-page">
                <h2>Admin Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name", { required: "Please enter name" })}
                        type="text"
                        placeholder="Enter name"
                    />
                    {errors.name && (
                        <p className="error">{errors.name.message}</p>
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
