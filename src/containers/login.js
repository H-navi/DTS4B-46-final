import { signInWithEmailAndPassword } from 'firebase/auth';
import * as React from 'react';
import { Fragment } from 'react';
import HeaderLogin from '../components/login/headerLogin';
import { Link, useNavigate } from 'react-router-dom';

import useUserStore, { selectErrorLogin, selectOnLogin, selectUserReady } from '../store/user';

const Login = () => {
    const navigate = useNavigate();
    const onLogin = useUserStore(selectOnLogin);
    const userReady = useUserStore(selectUserReady);
    const errorLogin = useUserStore(selectErrorLogin);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        await onLogin(email, password);

        if (userReady) {
            navigate("/");
        }
    };

    return (
        <Fragment>
            <div style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`, backgroundSize: 'cover', height: '100vh' }}>
                <HeaderLogin />
                <div className="binduz-er-contact-us-area">
                    <div className=" container">
                        <div className="row">
                            <div className=" col-lg-12">
                                <div className="binduz-er-contact-us-box">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="binduz-er-contact-title">
                                                    <h4 className="binduz-er-title">Login</h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-end">
                                                <div className="binduz-er-contact-title">
                                                    <a href={'/register'} key={'register'}>
                                                        <h4 className="binduz-er-title text-danger">Need an Account?</h4>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className=" col-lg-12">
                                                <div className="binduz-er-input-box">
                                                    <input type="email" name="email" placeholder="Enter Email" />
                                                    <i className="fal fa-user"></i>
                                                </div>
                                            </div>
                                            <div className=" col-lg-12">
                                                <div className="binduz-er-input-box">
                                                    <input type="password" name="password" placeholder="Enter Password" />
                                                    <i className="fal fa-envelope"></i>
                                                </div>
                                            </div>
                                            <span className='bg-danger'>{errorLogin}</span>
                                        </div>
                                        <button type='submit' className="binduz-er-main-btn">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>

    );
}

export default Login;
