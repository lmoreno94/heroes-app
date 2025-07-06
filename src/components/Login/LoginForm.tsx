import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function LoginForm() {
	const { login } = useAuth();
    const navigate = useNavigate();

	const handleLogin = () => {
		const fakeUser = {
			id: "1",
			name: "Juan Pérez",
			email: "juan@example.com",
		};
		login(fakeUser);
        navigate("/home");
	};
	return (
		<div className="container mt-5">
			<h1>Login</h1>
			<hr />
			<button className="btn btn-primary" onClick={handleLogin}>
				Login
			</button>
		</div>
	);
}

export default LoginForm;
