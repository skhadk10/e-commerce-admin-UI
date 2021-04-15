import React from "react";
import AddCategoryForm from "../../components/add-category-form/AddCategoryForm";
import DefaultLayout from "../../components/layout/DefaultLayout";
import ListCategory from "../../components/list-category/ListCategory";

const Category = () => {
  return (
    <DefaultLayout>
      <div className="dashboard">
        <AddCategoryForm />
        <ListCategory />
      </div>
    </DefaultLayout>
  );
};

export default Category;
