import { useState } from "react";
import propTypes from "prop-types";
import { BsSearch } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header, Form, Button, Input } from "./SearchBar.style";

function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleFormChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const searchQuery = value.trim().toLowerCase();

    if (searchQuery === "") {
      toast.info("Enter your query.");
      return;
    }

    onSubmit(searchQuery);

    event.target.reset();
    setValue("");
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <BsSearch />
        </Button>

        <Input
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleFormChange}
        />
      </Form>
    </Header>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: propTypes.func,
};
