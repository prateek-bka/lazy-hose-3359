import { Divider, Heading, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const initialState = searchParam.getAll("category");
  const initialRating = searchParam.getAll("rating");
  const initialOrder = searchParam.get("order");
  const [category, setCategory] = useState(initialState || []);
  const [order, setOrder] = useState(initialOrder || "");
  const [rating, setRating] = useState(initialRating || []);

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  const handleRating = (e) => {
    let newRating = [...rating];
    let value = e.target.value;

    if (newRating.includes(value)) {
      newRating.splice(newRating.indexOf(value), 1);
    } else {
      newRating.push(value);
    }
    setRating(newRating);
  };

  const handleChange = (e) => {
    let newCategory = [...category];
    let value = e.target.value;

    if (newCategory.includes(value)) {
      newCategory.splice(newCategory.indexOf(value), 1);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    let params = {
      category,
      rating,
    };
    order && (params.order = order);
    setSearchParam(params);
  }, [category, order, rating]);

  return (
    <>
      <Stack direction={["column", "column", "column"]} w={"25%"} mt={5}>
        <Stack>
          <Heading size={"md"}>Filter by Rating</Heading>
          <div>
            <input
              type="checkbox"
              value="1"
              onChange={handleRating}
              checked={rating.includes("1")}
            />
            <label>{"\u2605 \u2606 \u2606 \u2606 \u2606"}</label>
            <br />
            <input
              type="checkbox"
              value="2"
              onChange={handleRating}
              checked={rating.includes("2")}
            />
            <label>{"\u2605 \u2605 \u2606 \u2606 \u2606"}</label>
            <br />
            <input
              type="checkbox"
              value="3"
              onChange={handleRating}
              checked={rating.includes("3")}
            />
            <label>{"\u2605 \u2605 \u2605 \u2606 \u2606"}</label>
            <br />
            <input
              type="checkbox"
              value="4"
              onChange={handleRating}
              checked={rating.includes("4")}
            />
            <label>{"\u2605 \u2605 \u2605 \u2605 \u2606"}</label>
            <br />
            <input
              type="checkbox"
              value="5"
              onChange={handleRating}
              checked={rating.includes("5")}
            />
            <label>{"\u2605 \u2605 \u2605 \u2605 \u2605"}</label>
            <br />
          </div>
          <br />
        </Stack>
        <Divider />

        <Stack>
          <Heading size={"md"}>Filter By </Heading>
          <div>
            <input
              type="checkbox"
              value="sofa"
              onChange={handleChange}
              checked={category.includes("sofa")}
            />
            <label> Sofa</label>
            <br />
            <input
              type="checkbox"
              value="chair"
              onChange={handleChange}
              checked={category.includes("chair")}
            />
            <label> Chair</label>
            <br />
            <input
              type="checkbox"
              value="table"
              onChange={handleChange}
              checked={category.includes("table")}
            />
            <label> Table</label>
            <br />
            <input
              type="checkbox"
              value="bed"
              onChange={handleChange}
              checked={category.includes("bed")}
            />
            <label> Bed</label>
            <br />
            <input
              type="checkbox"
              value="wardrobe"
              onChange={handleChange}
              checked={category.includes("wardrobe")}
            />
            <label> Wardrobe</label>
          </div>
        </Stack>
        <Divider />
        <Stack>
          <Heading size={"md"}> Sort By Price</Heading>
          <div onChange={handleSort}>
            <input
              type="radio"
              name="order"
              value={"asc"}
              checked={order === "asc"}
            />
            <label> Low to High </label>
            <br />
            <input
              type="radio"
              name="order"
              value={"desc"}
              checked={order === "desc"}
            />
            <label> High to Low </label>
          </div>
        </Stack>
      </Stack>
    </>
  );
};

export default Sidebar;
