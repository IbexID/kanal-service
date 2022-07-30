import React from 'react';

const LoginPage = () => {
    return (
        <div className='login'>
            <form className="login__form">
                <h3 className='login__form-title'>Authorization</h3>
                <label className='login__form-label'> login
                    <input className='login__form-input' type="text" />
                </label>
                <label className='login__form-label'> password
                    <input className='login__form-input' type="password" />
                </label>
            </form>
        </div>
    );
};

export default LoginPage;