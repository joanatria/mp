import SearchIcon from '@mui/icons-material/Search';
import AppleIcon from '@mui/icons-material/Apple';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Badge } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  width: 100%;
  position: relative;
  top: 10px;
  margin: 0;
  padding: 0;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.25px solid white;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
  width: ${({ showInput }) => (showInput ? '300px' : '0')};
  opacity: ${({ showInput }) => (showInput ? '1' : '0')};
  font-family: 'Urbanist', sans-serif;
  font-size: 14px;
  transition: width 0.3s, opacity 0.3s;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const AppleNavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 10;
`;

const AppleNavLink = styled.li`
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }

  p {
    color: black;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
      color: #999;
    }
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleSearchIconClick = () => {
    setShowInput(true);
  };

  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/products/search?query=${encodeURIComponent(query)}`);
  };

  const handleSignInClick = () => {
    navigate('/signin');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleStoreClick = () => {
    navigate('/store');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <AppleIcon onClick={handleHomeClick} />
          <AppleNavLinks>
          <AppleNavLink>
              <p onClick={handleStoreClick}>Store</p>
            </AppleNavLink>
            <AppleNavLink>
              <p >Mac</p>
            </AppleNavLink>
            <AppleNavLink>
              <p >iPad</p>
            </AppleNavLink>
            <AppleNavLink>
              <p >iPhone</p>
            </AppleNavLink>
            <AppleNavLink>
              <p >Watch</p>
            </AppleNavLink>
            <AppleNavLink>
              <p >AirPods</p>
            </AppleNavLink>
            <AppleNavLink>
              <p >Accessories</p>
            </AppleNavLink>
          </AppleNavLinks>
        </Left>
        <Right>
          <form onSubmit={handleSearchSubmit}>
            <SearchContainer onClick={handleSearchIconClick}>
              <SearchIcon style={{ color: 'gray', fontSize: 16 }} />
              <Input
                showInput={showInput}
                placeholder="Search"
                value={query}
                onChange={handleSearchInputChange}
                onFocus={() => setShowInput(true)}
                onBlur={() => setShowInput(false)}
              />
            </SearchContainer>
          </form>
          <MenuItem onClick={handleSignInClick}>Sign In</MenuItem>
          <MenuItem onClick={handleLoginClick}>Log In</MenuItem>
          <MenuItem onClick={handleCartClick}>
            <Badge badgeContent={2} color="default">
              <ShoppingBagOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
