import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/dashboard/image-5.jpg";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [/*  disabled, */ setDisable] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

  const handelLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: 'User Login Successfully',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        } 
      });
      navigate(from, {replace: true});
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable;
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <div className="hero min-h-screen  bg-red-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2 mr-12">
            <img src={img} alt=""/>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body bg-red-800">
              <h1 className="text-4xl font-bold">Login now!</h1>
              <form onSubmit={handelLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt text-white link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    onBlur={handleValidateCaptcha}
                    
                    name="captcha"
                    placeholder="type the text above"
                    className="input input-bordered"
                  />

                  {/* make button disabled  for capcha*/}
                  <button className="btn btn-outline text-white btn-xs mt-2"> Validate</button>
                </div>
                <div className="form-control mt-6">
                  <input
                    disabled={false} // disabled 
                    className="text-white bg-gradient-to-r from-cyan-400 via-cyan-900 to-cyan-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p>
               
                <small className="text-white">
                  New Here?
                  <Link to="/signup" className="text-sky-500 m-2 ">
                    Create an Account
                  </Link>
                </small>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
