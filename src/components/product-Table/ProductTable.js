import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { Table, Spinner, Alert, Button, Image } from "react-bootstrap";
import { fetchProduct, deleteProduct } from "../../page/product/productAction";

const ProductListTable = () => {
  const history = useHistory();

  const { isLoading, status, message, productList } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleOnDelete = (_id) => {
    dispatch(deleteProduct(_id));
  };

  // console.log(productList);
  return (
    <div>
      {isLoading && <Spinner variant="primary" animation="border"></Spinner>}

      {status === "error" && (
        <Alert variant={status === "success" ? "success" : "danger"}>
          {message}
        </Alert>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>status</th>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {productList?.map((row, i) => {
            return (
              <tr key={row._id}>
                <td>{i}</td>
                <td>
                  {row.status ? (
                    <i className="fas fa-check-circle text-success"></i>
                  ) : (
                    <i className="fas fa-times-circle text-danger"></i>
                  )}
                </td>
                <td>
                  <Image
                    src={row.images[0]}
                    width="80px"
                    height="auto"
                    alt="product images"
                  />
                </td>
                <td>{row.name}</td>
                <td>{row.price}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => history.push(`/product/${row._id}`)}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleOnDelete(row._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductListTable;
