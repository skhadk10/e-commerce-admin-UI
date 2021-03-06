import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Col, Button, ListGroup, Spinner, Alert } from "react-bootstrap";

import {
  addNewCategory,
  fetchCategories,
} from "../../page/category/categoryAction.js";
import ListCategory from "../list-category/ListCategory.js";

const initialState = {
  name: "",
};

const AddCategoryForm = () => {
  const dispatch = useDispatch();

  const { isLoading, status, message, categoryList } = useSelector(
    (state) => state.category
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const [category, setCategory] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewCategory(category));
  };

  return (
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
            <Form.Label>New Category</Form.Label>
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
            <Form.Label>Select Parent Category</Form.Label>
            <Form.Control
              as="select"
              name="parentCat"
              onChange={handleOnChange}
            >
              <option>Choose...</option>

              {categoryList?.map((row, i) => (
                <option key={i} value={row._id}>
                  {row.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <hr />
    </div>
  );
};

export default AddCategoryForm;
