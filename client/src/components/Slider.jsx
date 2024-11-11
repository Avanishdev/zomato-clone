import {React,useState} from 'react';
import styled from '@emotion/styled';
import {sliderItems} from '../data.js';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Container=styled.div`
width: 100%;
height: auto;
background-color: #f2f2f2;
overflow: hidden;
`;

const Wrapper=styled.div`
width: 90rem;
position: relative;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}%);
`;

const Title=styled.h1``;

const SlideContainer=styled.div`
width: 100%;
display: flex;
`;

const Arrow=styled.div`
width: 50px;
height: 50px;
margin: auto;
background-color: white;
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0%;
bottom: 0%;
left:${(props)=>props.direction==="left"&&"10px"};
right:${(props)=>props.direction==="right"&&"10px"};
cursor: pointer;
`;

const Slide=styled.div`
width:100%;
margin: 14px;
padding: 10px;
`;

const ImgContainer=styled.div``;

const Image=styled.img`
height: auto;
max-width:10rem;
border-radius: 200px;
`;

const Name=styled.h3`
text-align: center;
`;

const Slider = () => {

const [slideIndex,setSlideIndex]=useState(0);

const handleClick=(direction)=>{
    if(direction==="left"){
        setSlideIndex(slideIndex>0?slideIndex-1:12);
    }
    else{
        setSlideIndex(slideIndex<12?slideIndex+1:0);
    }
};

return (
    <div>
        <Container>
            <Wrapper>
                <Title>Inspiration for your first order</Title>
                <Arrow direction="left" onClick={()=>handleClick("left")}>
                    <ArrowBackIosNewOutlinedIcon/>
                </Arrow>
                <SlideContainer>
                    {sliderItems.map((item)=>(
                        <Slide>
                            <ImgContainer>
                                <Image src={item.img} alt={item.name}/>
                            </ImgContainer>
                            <Name>{item.name}</Name>
                        </Slide>
                    ))}
                </SlideContainer>
                <Arrow direction="right" onClick={()=>handleClick("right")}>
                    <ArrowForwardIosOutlinedIcon/>
                </Arrow>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Slider
