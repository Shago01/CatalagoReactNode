function SearchInput({ value, onChange }) {
  return (
    <>
      <input
        className="input input-add"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar..."
      />
      <label style={{ fontSize: "1.3em" }}>🔎</label>
    </>
  );
}

export default SearchInput;
