// import React, { useEffect, useState } from "react";
// import Layout from "../../components/layout";
// import Card from "../../components/card";
// import "./style.css";
// import { useDispatch, useSelector } from "react-redux";
// import { isLoggedInUser, signin } from "../../actions";
// import { Redirect } from "react-router-dom";
// /**
//  * @author
//  * @function LoginPage
//  **/

// const LoginPage = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const auth = useSelector((state) => state.auth);
//   // useEffect(() => {
//   //   if (!auth.authenticated) {
//   //     dispatch(isLoggedInUser());
//   //   }
//   // }, []);
//   const userLogin = (e) => {
//     e.preventDefault();
//     if (email == "") {
//       alert("Email is required");
//       return;
//     }
//     if (password == "") {
//       alert("Password is required");
//       return;
//     }

//     dispatch(signin({ email, password }));
//   };
//   if (auth.authenticated) {
//     return <Redirect to={"/"} />;
//   }
//   return (
//     <Layout>
//       <div className="loginContainer">
//         <Card>
//           <form onSubmit={userLogin}>
//             <input
//               name="email"
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//             />

//             <input
//               name="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//             />

//             <div>
//               <button>Login</button>
//             </div>
//           </form>
//         </Card>
//       </div>
//     </Layout>
//   );
// };

//export default LoginPage;
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Card from "../../components/card";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedInUser, signin } from "../../actions";
import { Redirect } from "react-router-dom";
import { Formik } from "formik";
import classes from "./style.less";

const Basic = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  if (auth.authenticated) {
    return <Redirect to={"/"} />;
  }
  return (
    <Layout>
      <div className="loginContainer">
        {/* <h1>Anywhere in your app!</h1> */}
        <Card>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log("hnqaaaaaaaaaaa");
              dispatch(
                signin({ email: values.email, password: values.password })
              );
              // setTimeout(() => {
              //   // alert(JSON.stringify(values, null, 2));
              //   setSubmitting(false);
              // }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="inside">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <p>{errors.email && touched.email && errors.email}</p>
                </div>
                <div className="inside">
                  <label>password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <p>
                    {errors.password && touched.password && errors.password}
                  </p>
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </Card>
      </div>
    </Layout>
  );
};

export default Basic;
