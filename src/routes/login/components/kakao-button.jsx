import { ReactComponent as KakaoSVG } from '../../../assets/icons/kakao_icon.svg';
import React from 'react';

export const KakaoButton = ({ isLogin }) => {
  return <button
    className="w-[450px] h-[58px] px-10 py-[13px] bg-[#fee502] rounded-xl justify-center items-center gap-[7px] inline-flex text-xl font-bold"
    onClick={
      () => {

      }
    }>
    <KakaoSVG className="w-[24px] h-[24px]" />
    {isLogin ? ('카카오로 로그인하기') : ('카카오로 시작하기')} </button>;
};