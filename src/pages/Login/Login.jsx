import { Link } from "react-router-dom";
import img from "../../assets/icon/correct.png";
import { useEffect, useRef, useState } from "react";

import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisable] = useState(true)
    
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if(validateCaptcha(user_captcha_value)){
        setDisable(false);
    }
    else{
        setDisable

    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-4xl font-bold">Login now!</h1>
            <form onSubmit={handelLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
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
                  ref={captchaRef}
                  name="captcha"
                  placeholder="type the text above"
                  className="input input-bordered"
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs mt-3"
                >Validate</button>
              </div>
              <div className="form-control mt-6">
                <input disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p>
              New to car Doctor{" "}
              <Link className="text-orange-300 " to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
