import { useState } from "react";
import { forgotPassword } from "../services/authService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await forgotPassword(email);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className="main-bg d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-lg auth-card">
        <h3 className="text-center mb-3">Forgot Password</h3>

        {message && (
          <div className="alert alert-info text-center">{message}</div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button className="btn btn-primary w-100 fw-bold">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;