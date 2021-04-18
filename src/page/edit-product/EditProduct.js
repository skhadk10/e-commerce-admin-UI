import React from "react";
import { Card } from "react-bootstrap";
import EditProductForm from "../../components/add-product-form copy/EditProductForm";

import DefaultLayout from "../../components/layout/DefaultLayout";

const EditProduct = () => {
  return (
    <DefaultLayout>
      <h1>updateproduct</h1>
      <hr />
      <div className="add-new-product-form">
        <Card className="p-4 ">
          <EditProductForm />
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default EditProduct;
