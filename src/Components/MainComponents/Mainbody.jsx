import styled from 'styled-components'
import flex from '../Common/flex';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// 카테고리 이미지
import category1 from '../../image/category1.JPG'
import category2 from '../../image/category2.JPG'
import category3 from '../../image/category3.JPG'
import category4 from '../../image/category4.JPG'
import category5 from '../../image/category5.JPG'
import category6 from '../../image/category6.JPG'
import category7 from '../../image/category7.JPG'
import category8 from '../../image/category8.JPG'
import category9 from '../../image/category9.JPG'
import category10 from '../../image/category10.JPG'
import category11 from '../../image/category11.JPG'
import category12 from '../../image/category12.JPG'
import category13 from '../../image/category13.JPG'
import category14 from '../../image/category14.JPG'
import questionmark from '../../image/questionmark.jpg'
import slide01 from '../../Assets/Image/mainSlide01.jpg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Maininput = () => {
  const navigate = useNavigate();
  const onSearchHandler = () => {
    navigate('/Search')
  }

  const backgroundArr = [questionmark, category1, category2, category3, category4,
    category5, category6, category7, category8, category9, category10,
    category11, category12, category13, category14];

  const randomIndex = Math.floor(Math.random() * backgroundArr.length);

  const [stateimg, setStateimg] = useState(0);
  const changeimg = () => {
    setStateimg(randomIndex)
    if (stateimg === randomIndex) {
      return setStateimg(stateimg + 1)
    }
    if (14 === randomIndex)
      return setStateimg(stateimg(Math.round(Math.random() * 13)))
  };

  return (
    <StWrap>
      <InputBox>
        <input className="input" type="text" placeholder='찾는 메뉴가 뭐예요?'
        />
        <SearchButton onClick={onSearchHandler}>
          <FontAwesomeIcon className='icon' icon={faMagnifyingGlass}
            color={"black"}
          />
        </SearchButton>
      </InputBox>
      <CategoryBody>
        <Categorybox onClick={onSearchHandler}>
          <img src={category1} alt="" />
        </Categorybox >
        <Categorybox onClick={onSearchHandler}>
          <img src={category2} alt="" />
        </Categorybox>
        <Categorybox onClick={onSearchHandler}>
          <img src={category3} alt="" />
        </Categorybox>
        <Categorybox onClick={onSearchHandler}>
          <img src={category4} alt="" />
        </Categorybox>
        <Categorybox onClick={onSearchHandler}>
          <img src={category5} alt="" />
        </Categorybox>
        <Categorybox onClick={onSearchHandler}>
          <img src={category6} alt="" />
        </Categorybox >
        <Categorybox onClick={onSearchHandler}>
          <img src={category7} alt="" />
        </Categorybox>
        <Categorybox onClick={onSearchHandler}>
          <img src={category8} alt="" />
        </Categorybox>
        <Categorybox onClick={onSearchHandler}>
          <img src={category9} alt="" />
        </Categorybox>
        <Categorybox onClick={onSearchHandler}>
          <img src={category10} alt="" />
        </Categorybox>
        <Categorybox onClick={onSearchHandler}>
          <img src={category11} alt="" />
        </Categorybox>
        <Categorybox onClick={onSearchHandler}>
          <img src={category12} alt="" />
        </Categorybox>
        <Categorybox onClick={onSearchHandler}>
          <img src={category13} alt="" />
        </Categorybox>
        <Categorybox onClick={onSearchHandler}>
          <img src={category14} alt="" />
        </Categorybox>
        <Questionbox onClick={changeimg}>
          <img src={backgroundArr[stateimg]} alt="" />
        </Questionbox>
      </CategoryBody>
      <StSwiperBox>
        <img src={slide01} alt="" />
      </StSwiperBox>
    </StWrap>
  );
}

export default Maininput;

const StWrap = styled.div`
  ${flex({ direction: 'column' })}
  width: 100%;
  height: 100%;
  background-color: var(--white);
`;


const InputBox = styled.div`
  ${flex({})}
  width: calc(100vh - 60vh);
  height: 100px;
  margin-bottom: 1rem;
  & > input{
    width: 70%;
    height: 50px;
    border: none;
    border-bottom: 1px solid var(--font-secondary);
  }
`;

const CategoryBody = styled.div`
  ${flex({ gap: '3px' })}
  flex-wrap: wrap;
  width: calc(100vh - 60vh);
  background-color: var(--primary);
  padding: 1rem;

`;

const Categorybox = styled.div`
  & > img{
    width: 95px;
  }
`;

const SearchButton = styled.button`
  width: 70px;
  height: 50px;
  border: none;
  border-radius: 5px;
  & > .icon{
    font-size: large;
  }
`;

const StSwiperBox = styled.div`
  width: calc(100vh - 60vh);
  height: 150px;
  & > img{
    width:100%
  }
`;

const Questionbox = styled.div`
cursor: pointer;
  & > img{
    width: 95px;
  }
`;
