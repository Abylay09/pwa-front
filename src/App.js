import React, { useEffect, useState } from "react";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Sidebar from "./components/Sidebar";
import Product from "./components/Product";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  async function getCategories() {
    try {
      const response = await fetch("http://localhost:3001/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/categories");
      const json = await response.json();
      setCategories(json.data);
    };

    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3001/all-products");
      const json = await response.json();
      setProducts(json.data);
    };

    fetchData();
    fetchProducts();
  }, []);

  return (
    <div className="App h-100 py-5">
      <Container className="product-container h-100">
        <Stack className="h-100" direction="horizontal" gap={3}>
          <div className="sidebar col-2 h-100 bg-secondary bg-gradient px-3">
            {categories && <Sidebar categories={categories} />}
          </div>
          <div>
            <section className="products">
            {products &&
                  products.map((item) => {
                    return (
                      // <Col>
                        <Product product={item} />
                      // </Col>
                    );
                  })}
            </section>

            {/* <Container fluid>
              <Row>
                {products &&
                  products.map((item) => {
                    return (
                      <Col>
                        <Product product={item} />
                      </Col>
                    );
                  })}
              </Row>
            </Container> */}
          </div>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
