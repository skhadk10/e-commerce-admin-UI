import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import DefaultLayout from "../../components/layout/DefaultLayout";
import ProductListTable from "../../components/product-Table/ProductTable";

const Product = () => {
  const history = useHistory();
  return (
    <DefaultLayout>
      {" "}
      <div className="product">
        <h1>Product</h1>
        <Button variant="success" onClick={() => history.push("/product/new")}>
          Add New Product
        </Button>
      </div>
      <div className="product-lists">
        <ProductListTable />
      </div>
    </DefaultLayout>
  );
};

export default Product;
