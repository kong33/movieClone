import React, { useState } from 'react';
import { LoginControl } from '../Components/LoginControl';
export const Login = () => {

    const [formData, setFormData] = useState({
        useremail: '',
        userpassword: '',
        isRight: false,
        emailError: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            emailError: '',
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        setFormData({
            ...formData,
            emailError: '',
            isRight: true,
        });

    };



    return (

        <div style={{ backgroundColor: 'white', height: '100vh', width: '100vw', textAlign: 'center' }}>
            <h1 style={{ padding: '5%' }}>
                이메일과 비밀번호를 입력해주세요
            </h1>
            <LoginControl userId={formData.useremail} userPw={formData.userpassword} />
            <form onSubmit={handleSubmit}>
                <label htmlFor='이메일'>이메일 주소</label><p></p>
                <input
                    type="text"
                    id="useremail"
                    name="useremail"
                    value={formData.useremail}
                    onChange={handleChange}
                    placeholder='이메일을 입력하세요'
                />
                <p style={{ color: 'red' }}>{formData.emailError}</p>

                <label htmlFor='비밀번호'>비밀번호</label><p></p>
                <input
                    type="password"
                    id="userpassword"
                    name="userpassword"
                    value={formData.userpassword}
                    onChange={handleChange}
                    placeholder='비밀번호를 입력하세요'
                />

                <p></p>
                <button
                    style={{
                        border: 'none',
                        padding: '10px',
                        margin: '0',
                        background: 'none',
                        borderRadius: '10px',
                        width: '50%',
                        backgroundColor: formData.isRight ? 'navy' : 'gray',
                    }}
                >
                    확인
                </button>

            </form>
        </div>
    );
};
