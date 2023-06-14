import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f7f9;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 60%;
  z-index: 2;
`;

const ProductsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Products = () => {
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    fetchPopularItems();
  }, []);

  const fetchPopularItems = async () => {
    try {
      const response = await fetch("http://localhost:8080/products");
      const data = await response.json();
      setPopularItems(data);
    } catch (error) {
      console.log("Error fetching popular items:", error);
    }
  };

  return (
    <ProductsContainer>
      {popularItems.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </ProductsContainer>
  );
};

const Product = ({ item }) => {
  const navigate = useNavigate();

  const goToProductPage = () => {
    navigate(`/product/${item.id}`);
  };

  const addToCart = () => {
    navigate('/cart');
    console.log("Product added to cart:", item);
  };

  return (
    <Container>
      <Image src={item.imageUrl} alt={item.name} />
      <Info>
        <Icon onClick={addToCart}>
          <ShoppingBagOutlinedIcon />
        </Icon>
        <Icon onClick={goToProductPage}>
          <SearchOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Products;
