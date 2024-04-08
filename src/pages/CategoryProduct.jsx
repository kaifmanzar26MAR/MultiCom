import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductListCard from "../components/ProductListCard";

const CategoryProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const { category } = useParams();
  const fetchProducts = async (source) => {

    try {
      const response = await axios.get(
        `http://localhost:5000/product/getproductswithcategory/${category}`,
        { cancelToken: source.token }
      );
      if (response.status != 201) {
        throw new Error("Error in geting poduct related to the category");
      }
      setAllProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.scrollTo({top:0})
    const source = axios.CancelToken.source();
    fetchProducts(source);
    return () => {
      source.cancel("Request canceled due to component unmounting");
    };
  }, []);
  return (
    <div className="flex gap-y-2 flex-col p-4">
      {allProducts.length > 0
        ? allProducts.map((e) => {
            return <ProductListCard props={e} />;
          })
        : "No Product to Show"}
    </div>
  );
};

export default CategoryProduct;
