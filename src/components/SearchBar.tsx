
interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

function SearchBar({ searchValue, setSearchValue }: Props) {
  return (
    <input
      data-test="search-meetup"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    ></input>
  )
}

export default SearchBar