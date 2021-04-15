import React, { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { removeCategories } from "../../page/category/categoryAction";
const ListCategory = () => {
  const { categoryList } = useSelector((state) => state.category);
  console.log(categoryList);
  const dispatch = useDispatch();

  const [showForm, setshowForm] = useState("");
  const handleonDeleteClicked = (_id) => {
    if (window.confirm("Are you sure you want to delete the category")) {
      const childIds = categoryList.map((row) => {
        if (row.parentCat === _id) {
          return row._id;
        }
      });

      const idsToDelete = childIds.filter((row) => row);
      dispatch(removeCategories([...idsToDelete, _id]));
      alert(_id);
    }
  };

  const topLevelCat = categoryList.filter((row) => !row.parentCat);
  const childCat = categoryList.filter((row) => row.parentCat);
  return (
    <ListGroup>
      {topLevelCat.map((row, i) => {
        return (
          <>
            <ListGroup.Item key={i}>
              {row.name}
              <span className="item-buttons" style={{ marginLeft: "5rem" }}>
                <Button>Edit</Button>
                <Button
                  variant="danger"
                  onClick={() => handleonDeleteClicked(row._id)}
                >
                  Delete
                </Button>
              </span>
            </ListGroup.Item>
            {childCat.map(
              (itm) =>
                itm.parentCat === row._id && (
                  <ListGroup.Item key={i}>
                    {`-->${itm.name}`}{" "}
                    <span
                      className="item-buttons"
                      style={{ marginLeft: "5rem" }}
                    >
                      <Button>Edit</Button>
                      <Button
                        variant="danger"
                        onClick={() => handleonDeleteClicked(itm._id)}
                      >
                        Delete
                      </Button>
                    </span>
                  </ListGroup.Item>
                )
            )}
          </>
        );
      })}
    </ListGroup>
  );
};

export default ListCategory;
