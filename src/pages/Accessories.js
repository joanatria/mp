import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

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

const Title = styled.h1`
  margin: 20px;
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

const Accessories = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItemsByCategory = async () => {
      try {
        const url = `http://localhost:8080/products/category/accessories`;
        const response = await fetch(url);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log("Error fetching items by category:", error);
      }
    };

    fetchItemsByCategory();
  }, []);

  const navigate = useNavigate();

  const goToProductPage = (id) => {
    navigate(`/product/${id}`);
  };

  const addToCart = (item) => {
    navigate('/cart');
    console.log("Product added to cart:", item);
  };

  return (
    <div>
      <Announcement />
      <Navbar />
      <Title>Accessories</Title>
      <ProductsContainer>
        {items.map((item) => (
          <Container key={item.id}>
            <Image src={item.imageUrl} alt={item.name} />
            <Info>
              <Icon onClick={() => addToCart(item)}>
                <ShoppingBagOutlinedIcon />
              </Icon>
              <Icon onClick={() => goToProductPage(item.id)}>
                <SearchOutlinedIcon />
              </Icon>
            </Info>
          </Container>
        ))}
      </ProductsContainer>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Accessories;
