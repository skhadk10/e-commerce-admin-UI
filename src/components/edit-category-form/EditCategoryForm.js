import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Col, Button, ListGroup, Spinner, Alert } from "react-bootstrap";

import { updateNameCategories } from "../../page/category/categoryAction.js";
import ModalBox from "../modal/ModalBox.js";
import { toggleCategoryEditModal } from "../../page/category/CategorySlice";
const initialState = {
  name: "",
  parentCat: "",
};

const EditCategoryForm = ({ categoryEdit }) => {
  const dispatch = useDispatch();

  const {
    isLoading,
    status,
    message,
    selectedCategory,
    categoryList,
    show,
  } = useSelector((state) => state.category);
  const [category, setCategory] = useState(initialState);

  useEffect(() => {
    setCategory(selectedCategory);
  }, [dispatch, selectedCategory]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setCategory(category);
  };
  const toggleModal = (e) => {
    dispatch(toggleCategoryEditModal());
  };
  return (
    <ModalBox show={show} toggleModal={toggleModal}>
      <div className="add-category-form">
        {isLoading && <Spinner variant="primary" animation="border"></Spinner>}

        {message && (
          <Alert variant={status === "success" ? "success" : "danger"}>
            {message}
          </Alert>
        )}
        <Form onSubmit={handleOnSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="">
              <Form.Control
                name="name"
                type="text"
                value={category.name}
                placeholder="Enter New Category"
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control
                as="select"
                name="parentCat"
                onChange={handleOnChange}
              >
                <option>Select Parent Category</option>

                {categoryList?.map((row, i) => (
                  <option
                    key={i}
                    value={row._id}
                    selected={row._id === category._parentCat}
                  >
                    {row.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Button
              onClick={() => dispatch(updateNameCategories(category))}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form.Row>
        </Form>
        <hr />
      </div>
    </ModalBox>
  );
};

export default EditCategoryForm;
