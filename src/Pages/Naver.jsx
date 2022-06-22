import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __naverSignIn } from '../Redux/modules/user';
import Loading from './Status/Loading';

const Naver = () => {
    // 인가코드 받는 부분
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code"); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLogin} = useSelector(state=>state.userReducer)

    useEffect(()=>{
      dispatch(__naverSignIn(code))
      if(isLogin){
        navigate('/')
      }
    },[dispatch, code, navigate, isLogin])

  return (
    <>
      <Loading />
    </>
  )
}

export default Naver

