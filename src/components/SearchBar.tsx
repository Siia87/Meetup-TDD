
interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

function SearchBar({ searchValue, setSearchValue }: Props) {
  return (
    <>
      <label> Search for meetup:</label>

      <input
        data-test="search-meetup"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      ></input>
    </>
  )
}

export default SearchBar