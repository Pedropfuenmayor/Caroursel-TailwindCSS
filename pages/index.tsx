import type { NextPage } from "next";
import { User } from "../models/index";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import { useGetUsers, useMutate } from "../hooks/users";
import * as Yup from "yup";

const Home: NextPage = () => {
  const user = useGetUsers();
  const mutation = useMutate();
  return (
    <div className="mt-10">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md ">
        <div className="px-6 py-4">
          <h2 className="text-3xl font-bold text-center text-gray-700 ">
            Signup
          </h2>

          <h3 className="mt-1 text-xl font-medium text-center text-gray-600 ">
            Welcome Back
          </h3>

          <p className="mt-1 text-center text-gray-500 ">
            Login or create account
          </p>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .max(15, "Must be 15 characters or less")
                .min(7, "Must be grather than 7 characters")
                .required("Required"),
            })}
            onSubmit={(
              // interface FormikErrors<User>
              values: User,
              { setSubmitting, resetForm }: FormikHelpers<User>
            ) => {
              mutation.mutate(values);
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="w-full mt-4">
                  <Field
                    id="email"
                    name="email"
                    className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 ${
                      errors.email && touched.email ? "bg-red-100" : "bg-white "
                    } border rounded-md  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300`}
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                  />
                  {errors.email && touched.email && (
                    <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="w-full mt-4">
                  <Field
                    id="password"
                    name="password"
                    className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 ${
                      errors.password && touched.password ? "bg-red-100" : "bg-white "
                    } border rounded-md focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300`}
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                  />
                  {errors.password && touched.password && (
                    <p className="text-xs text-red-600 mt-1">{errors.password}</p>
                  )}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-500"
                  >
                    Forget Password?
                  </a>

                  <button
                    className="px-4 py-2 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
          <span className="text-sm text-gray-600 ">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Don't have an account?{" "}
          </span>

          <a
            href="#"
            className="mx-2 text-sm font-bold text-blue-500  hover:underline"
          >
            Register
          </a>
        </div>
      </div>
      <br />
      {user.isSuccess && (
        <>
          <ul>
            {user.data?.map(({ email }, i) => (
              <li key={i}>{email}</li>
            ))}
          </ul>
          {/* {user.isFetching && <div>Updating in background...</div>} */}
        </>
      )}
      {user.isLoading && "Loading"}
      {user.error instanceof Error && user.error.message}
    </div>
  );
};

export default Home;
