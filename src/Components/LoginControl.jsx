// LoginControl.jsx
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../action.js';

export const LoginControl = ({ userId, userPw }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = 'http://localhost:8000/user/login';
        const requestBody = {
          id: userId,
          pw: userPw,
        };

        // axios를 사용하여 POST 요청 보내기
        const response = await axios.post(endpoint, requestBody, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // 응답 데이터 확인
        console.log(response.data);

        // 로그인 성공 시 토큰을 Redux store에 저장
        if (response.data.code === 200) {
          dispatch(setAuthToken(response.data.token));
        }
      } catch (error) {
        // 오류 처리
        console.error('Error during POST request:', error);
      }
    };

    // fetchData 함수 호출
    fetchData();
  }, [dispatch, userId, userPw]);

  return null;
};

// Prop types 정의
LoginControl.propTypes = {
  userId: PropTypes.string.isRequired,
  userPw: PropTypes.string.isRequired,
};
