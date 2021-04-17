import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Col, Button, ListGroup, Spinner, Alert } from "react-bootstrap";

import { updateNameCategories } from "../../page/category/categoryAction.js";

const initialState = {
  name: "",
};

const EditCategoryForm = ({ categoryEdit }) => {
  const dispatch = useDispatch();

  const { isLoading, status, message, categoryList } = useSelector(
    (state) => state.category
  );
  const [category, setCategory] = useState(initialState);
  useEffect(() => {
    setCategory(category);
  }, [dispatch]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setCategory(category);
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
  );
};

export default EditCategoryForm;
