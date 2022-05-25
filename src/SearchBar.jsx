import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import { useStates} from './utilities/states';
import {useState} from 'react';
import { Link } from "react-router-dom";

export default function SearchBar() {

  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  let s = useStates('main');

  let suggestions = s.searchTerm.length > 0 ? s.products
    .filter(x => x.name.toLowerCase().includes(s.searchTerm.toLowerCase())): [];

  return (
    <Container>
      <div className="search-suggestions" style={{display: showSearchSuggestions && suggestions.length ? 'block' : 'none'}}>
        {suggestions.map((product,i) => <Link key={i} to={'/product-detail/' + product.id}>{product.name}</Link>)}
      </div>
      <InputGroup className="m-2">
        <FormControl
          id="SearchBar"
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="Sök efter produkt..."
          onFocus={() => setShowSearchSuggestions(true)}
          onBlur={() =>  setTimeout(() => setShowSearchSuggestions(false),500)}
          {...s.bind('searchTerm')}
        />
        <Button variant="outline-secondary" id="button-addon1">
          Sök <i className="fa fa-search"></i>
        </Button>
      </InputGroup>
    </Container>
  );
}