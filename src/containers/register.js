import { signInWithEmailAndPassword } from 'firebase/auth';
import * as React from 'react';
import { Fragment } from 'react';
import HeaderLogin from '../components/login/headerLogin';
import { Link, useNavigate } from 'react-router-dom';

import useUserStore, { selectErrorRegister, selectOnRegister, selectUserReady } from '../store/user';

const Register = () => {
    const navigate = useNavigate();
    const onRegister = useUserStore(selectOnRegister);
    const userReady = useUserStore(selectUserReady);
    const errorRegister = useUserStore(selectErrorRegister);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        await onRegister(email, password);

        if (userReady) {
            navigate("/");
        }
    };

    return (
        <Fragment>
            {/* <HeaderLogin /> */}
            <div className="binduz-er-contact-us-area">
                <div className=" container">
                    <div className="row">
                        <div className=" col-lg-12">
                            <div className="binduz-er-contact-us-box">
                                <form onSubmit={handleSubmit}>
                                    <div className="binduz-er-contact-title">
                                        <h4 className="binduz-er-title">Login</h4>
                                    </div>
                                    <div className="row">
                                        <div className=" col-lg-12">
                                            <div className="binduz-er-input-box">
                                                <input type="email" name="email" placeholder="Enter Email"/>
                                                    <i className="fal fa-user"></i>
                                            </div>
                                        </div>
                                        <div className=" col-lg-12">
                                            <div className="binduz-er-input-box">
                                                <input type="password" name="password" placeholder="Enter Password"/>
                                                    <i className="fal fa-envelope"></i>
                                            </div>
                                        </div>
                                        <span className='bg-danger'>{errorRegister}</span>
                                    </div>
                                    <button type='submit' className="binduz-er-main-btn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}

export default Register;
