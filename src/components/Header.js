const Header = ({ onClick, onChange }) => {
  return (
    <div id="header-container">
      <h2 id="app-name">Instagram Clone</h2>
      <input
        type="text"
        className="search-box"
        placeholder="Search"
        onChange={onChange}
      />
      <input
        className="search-btn"
        type="submit"
        value="Search"
        onClick={onClick}
      />
    </div>
  );
};

export default Header;
