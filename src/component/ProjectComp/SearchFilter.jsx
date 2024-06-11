import React, { useState, useEffect } from "react";

function SearchFilter({ data, onDataFiltered }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      const filterData = () => {
        const filtered = data.filter((item) => {
          const { title, serviceType, category, location } = item;
          const searchText = searchQuery.toLowerCase();
          return (
            (title && title.toLowerCase().includes(searchText)) ||
            (serviceType && serviceType.toLowerCase().includes(searchText)) ||
            (category && category.toLowerCase().includes(searchText)) ||
            (location && location.toLowerCase().includes(searchText))
          );
        });
        setFilteredData(filtered);
        onDataFiltered(filtered);
      };
      filterData();
    } else {
      // If search query is empty, display all data
      setFilteredData(data);
      onDataFiltered(data);
    }
  }, [searchQuery, data, onDataFiltered]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex justify-center mb-4 ">
      <div className="py-2 border-[1px] border-gray my-2 rounded-md w-[500px]">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleChange}
          className="w-full outline-none px-3"
        />
      </div>
    </div>
  );
}

export default SearchFilter;
