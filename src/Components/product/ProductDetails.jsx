import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/products/${id}`)
      .then((res) => res.json())
      .then((res) => setDetails(res))
      .catch((res) => console.log(res));
  }, []);

  return (
    <div>
      <h1>{details.title}</h1>
      <img src={details.img} alt="imag" />
    </div>
  );
};

export default ProductDetails;
