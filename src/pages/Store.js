import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const Store = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Store</Title>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Store;
