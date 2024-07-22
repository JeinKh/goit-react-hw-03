import s from "./SearchBox.module.css";

const SearchBox = ({ onSearch }) => {
  const handleChange = (e) => {
    const { value } = e.target;

    onSearch(value);
  };
  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        <span className={s.subtitle}>Find contact by name:</span>
        <input
          onChange={handleChange}
          type="text"
          name="search"
          className={s.input}
        ></input>
      </label>
    </div>
  );
};

export default SearchBox;
