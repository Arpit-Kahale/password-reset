import { useState } from "react";
import { useParams } from "react-router-dom";
import { resetPassword } from "../services/authService";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await resetPassword(token, password);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className="main-bg d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-lg auth-card">
        <h3 className="text-center mb-3">Reset Password</h3>

        {message && (
          <div className="alert alert-info text-center">{message}</div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Enter new password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="btn btn-success w-100 fw-bold">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;