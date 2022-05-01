const Search = ({ titre, emoji, setemoji }) => {
  const handleSummit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="header-app">
      <h1>{titre}</h1>
      <form onSubmit={handleSummit}>
        <input
          placeholder="What emoji are you looking for?"
          type="text"
          onChange={(event) => {
            //   console.log(event);
            setemoji(event.target.value);
          }}
          value={emoji}
        />
      </form>
    </div>
  );
};

export default Search;
