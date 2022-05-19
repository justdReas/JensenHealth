import { Container, InputGroup, FormControl, Button } from "react-bootstrap";

import { useStates } from "./utilities/states";

export default function SearchBar() {
  let s = useStates("main");

  return (
    <Container className="searchBar">
      <InputGroup className="m-2">
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="Sök efter produkt..."
        />
        <Button variant="outline-secondary" id="button-addon1">
          Sök
        </Button>
      </InputGroup>
    </Container>
  );
}
