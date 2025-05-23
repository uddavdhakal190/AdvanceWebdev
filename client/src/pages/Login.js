import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axios";
import Spinner from "../components/Spinner";
import Footer from "../components/Layout/Footer";
import "../styles/Loginpage.css";

const Login = () => {
  const img =
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.post("/api/v1/users/login", values);
      setLoading(false);
      message.success("login success");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="login-page">
        {loading && <Spinner />}
        <div className="row container">
          <h1 className="text-center mb-4">Expense Management System</h1>
          <div className="col-md-6 d-none d-md-block">
            <img src={img} alt="login-img" width={"100%"} height="100%" style={{ borderRadius: '10px', objectFit: 'cover' }} />
          </div>
          <div className="col-md-4 login-form">
            <Form layout="vertical" onFinish={submitHandler}>
              <h1>Login Form</h1>

              <Form.Item label="Email" name="email">
                <Input type="email" required />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input type="password" required />
              </Form.Item>
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                <Link to="/register">
                  Not a user ? Click Here to register !
                </Link>
                <button className="btn w-100 w-md-auto">Login</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;