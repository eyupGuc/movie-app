import {
  SearchContainer,
  InputSearch,
  ButtonSearch,
} from "./styles/Search.styled";

const Search = ({ setButtonSearch, setInputSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    setInputSearch(e.target.value );
  };
  const handleClick = () => {
    if (setInputSearch) {
      setButtonSearch(true);
    }
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
