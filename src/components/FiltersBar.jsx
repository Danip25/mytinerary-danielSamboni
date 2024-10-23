/* eslint-disable react/prop-types */

const FiltersBar = ({ onSearch = () => {}, value = "", buttons }) => {
  return (
    <form className="w-full p-4 shadow-lg rounded-3xl flex flex-col gap-4 bg-gray-50">
      <p className="text-xs font-bold">Search</p>
      <input
        type="text"
        placeholder="Search city by name"
        className="p-2 border border-gray-300 rounded-lg w-full"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
      <p className="text-xs font-bol">Filters</p>
      <section className="flex gap-4 mt-4 flex-col sm:flex-row sm:items-center text-xs">{buttons}</section>
    </form>
  );
};

export default FiltersBar;
