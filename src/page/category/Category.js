import React from "react";
import AddCategoryForm from "../../components/add-category-form/AddCategoryForm";
import DefaultLayout from "../../components/layout/DefaultLayout";

const Category = () => {
  return (
    <DefaultLayout>
      <div className="dashboard">
        <AddCategoryForm />
      </div>
    </DefaultLayout>
  );
};

export default Category;
