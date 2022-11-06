import { SearchContainer,InputSearch,ButtonSearch } from "./styles/Search.styled";

const Search = ({setGetSearch}) => {
  return (
    <SearchContainer>
     
      <InputSearch type="text" placeholder="Search Movie" />
      <ButtonSearch>Search</ButtonSearch>
    </SearchContainer>
  );
};

export default Search;
