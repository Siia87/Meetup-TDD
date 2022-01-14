
interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

function SearchBar({ searchValue, setSearchValue }: Props) {
  return (
    <>
      <div className="searchMeetup">
        <label> Search for meetup: </label>
        <input
          data-test="search-meetup"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        ></input>
      </div>
    </>
  )
}

export default SearchBar