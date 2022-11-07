import {
  SearchContainer,
  InputStyleSearch,
  ButtonStyleSearch,
} from "./styles/Search.styled";

const Search = ({ setButtonSearch, setInputSearch, getMovie,InputSearch}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    setInputSearch(e.target.value);
    // setInputSearch=(" ")
  };
  const handleClick = () => {
    getMovie();

    // setButtonSearch(true);
    
  };

  return (
    <SearchContainer>
      <InputStyleSearch
        type="text"
        placeholder="Search Movie"
        onChange={handleSubmit}
        value={InputSearch}
      />
      <ButtonStyleSearch onClick={handleClick}>Search</ButtonStyleSearch>
    </SearchContainer>
  );
};

export default Search;
