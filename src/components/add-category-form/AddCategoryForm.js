import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Col, Button, ListGroup, Spinner, Alert } from "react-bootstrap";

import addNewCategory from "../../page/category/categoryAction";

const initialState = {
  name: "",
  parentCat: 0,
};

const AddCategoryForm = () => {
  const dispatch = useDispatch();

  const { isLoading, status, message } = useSelector((state) => state.category);

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
              defaultValue={category.parentCat}
              onChange={handleOnChange}
            >
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <hr />
      <ListGroup as="ul">
        <ListGroup.Item as="li" active>
          Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item as="li" disabled>
          Morbi leo risus
        </ListGroup.Item>
        <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default AddCategoryForm;
