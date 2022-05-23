import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import { useStates} from './utilities/states';

export default function SearchBar() {

  let s = useStates('main');

  return (
    <Container>
      <InputGroup className="m-2">
        <FormControl
          id="SearchBar"
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="Sök efter produkt..."
          {...s.bind('searchTerm')}
          // onChange= {mySearch.bind(this)};
        />
        <Button variant="outline-secondary" id="button-addon1">
          Sök <i class="fa fa-search"></i>
        </Button>
      </InputGroup>
    </Container>
  );
}
