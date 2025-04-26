import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

function Login() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await loginUser(values);
      localStorage.setItem("user", JSON.stringify(res.data));
      toast.success("Login Successful!");
      if (res.data.role === "admin") navigate("/admin");
      else navigate("/employee");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg">NestoraHR</h1>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/60"
                />
                <ErrorMessage name="email" component="div" className="text-red-200 text-sm mt-1" />
              </div>

              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/60"
                />
                <ErrorMessage name="password" component="div" className="text-red-200 text-sm mt-1" />
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