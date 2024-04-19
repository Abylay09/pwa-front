import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Product = (props) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const getCachedData = async () => {
        const response = await caches.match(props.product.image_url)
        if (response) {
            setImageUrl(response.url);
        }else{
            setImageUrl(props.product.image_url);
        }
    }
    getCachedData()
    // Получаем изображение из кэша
    // caches.match(props.product.image_url).then((response) => {
    //   if (response) {
    //     setImageUrl(response.url);
    //   }
    // });
  }, [props.product.image_url]);
  return (
    <div className="product">
      <img src={imageUrl} />
      <div className="product-body py-4">
        <h3 className="fs-5">{props.product.product_name}</h3>
        <p className="py-2 mt-auto">{props.product.description}</p>
      </div>
      <div className="product-bottom">
        <p className="fs-4">{props.product.price}</p>
        <Button variant="primary">Go somewhere</Button>
      </div>
    </div>
  );
};

export default Product;
