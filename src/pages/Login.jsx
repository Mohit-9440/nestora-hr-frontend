import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { loginUser } from "../services/api";
import { toast } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const res = await loginUser(values);
      localStorage.setItem("user", JSON.stringify(res.data));

      if (res.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/employee");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg">
          NestoraHR
        </h1>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string().email("Invalid email").required("Required"),
            password: Yup.string().required("Required"),
          })}
          onSubmit={handleLogin}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/60"
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-sm">{errors.email}</div>
                )}
              </div>

              <div>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/60"
                />
                {errors.password && touched.password && (
                  <div className="text-red-500 text-sm">{errors.password}</div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-indigo-100 transition duration-300"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;