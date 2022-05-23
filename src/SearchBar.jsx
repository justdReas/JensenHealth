import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import { useState } from "react";

export default function SearchBar() {
  let mySearch = (props) => {
    console.log(props.SearchBar.value());
  };

  return (
    <Container>
      <InputGroup className="m-2">
        <FormControl
          id="SearchBar"
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="Sök efter produkt..."
          // onChange= {mySearch.bind(this)};
        />
        <Button variant="outline-secondary" id="button-addon1">
          Sök <i class="fa fa-search"></i>
        </Button>
      </InputGroup>
    </Container>
  );
}
