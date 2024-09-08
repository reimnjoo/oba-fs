import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginType } from "../types/_types";

export default function LoginForm() {

    const { login } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<LoginType>();

    //test commit

    const onSubmit: SubmitHandler<LoginType> = (data) => {
        login(data);
        navigate("/dashboard");
        console.log(data);
    };

    return (
        <form id="login-form" className="" onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="Your email address"
                {...register("email")}
            />
            <input
                type="password"
                placeholder="Password"
                {...register("password")}
            />
            <button type="submit">Login</button>
        </form>
    );
}