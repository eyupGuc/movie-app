import {
  SearchContainer,
  InputSearch,
  ButtonSearch,
} from "./styles/Search.styled";

const Search = ({ setButtonSearch, setInputSearch, getMovie }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    setInputSearch(e.target.value);
  };
  const handleClick = () => {
    getMovie();

    setButtonSearch(true);
  };

  return (
    <SearchContainer>
      <InputSearch
        type="text"
        placeholder="Search Movie"
        onChange={handleSubmit}
      />
      <ButtonSearch onClick={handleClick}>Search</ButtonSearch>
    </SearchContainer>
  );
};

export default Search;
