import React, { useState, useEffect } from 'react';
import { filterData } from "../utils/index"

const SearchFilter = ({ data }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        if (searchQuery.trim() !== "") {
            const filtered = filterData(data, searchQuery);
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }, [searchQuery, data]);

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchFilter ;
