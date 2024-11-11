import React from 'react'
import styled from '@emotion/styled'
import logo from '../assets/logo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Container=styled.div``;

const Navbar=styled.nav`
height: 100%;
width: 100%;
display: flex;
justify-content:center;
align-items: center;
`;

const Logo=styled.div``;

const Img=styled.img`
    height: 1 rem;
    width: 150px;
    margin:0px 12px;
    cursor: pointer;
`;

const Center=styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
/* border: 1px solid gray; */
border-radius:10px;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const LocationContainer=styled.div`
display: flex;
align-items: center;
`;
const InputContainer=styled.div`
display: flex;
align-items: center;
width: 100%;
`;
const Input=styled.input`
width: 100%;
padding: 8px;
border: none;
outline: none;
`;

const Button=styled.a`
text-decoration: none;
color: gray;
margin: 10px;
padding:6px;
`;

const Header = () => {
  return (
    <div>
      <Container>
          <Navbar>
            <Logo>
              <Img src={logo} alt='zomato.com' onClick={()=>window.location.reload()}/>
            </Logo>
            <Center>
              <LocationContainer>
                <LocationOnIcon style={{color:"rgb(255, 74, 93)"}}/>
                <Input placeholder='Location'/>
                <ArrowDropDownOutlinedIcon/>
              </LocationContainer>
              <InputContainer>
                <SearchOutlinedIcon/>
                <Input placeholder='Search for restaurant, cuisine or a dish'/>
              </InputContainer>
            </Center>
            <Button href='/'>Log in</Button>
            <Button href='/'>Sign in</Button>
          </Navbar>
      </Container>
    </div>
  )
}

export default Header
