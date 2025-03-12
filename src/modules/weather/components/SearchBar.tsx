import React from "react";
import { Input, Button } from "antd";

const SearchBar = ({
  city,
  setCity,
  handleSearch,
}: {
  city: string;
  setCity: (city: string) => void;
  handleSearch: () => void;
}) => {
  return (
    <div>
      <Input
        placeholder="Search for a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ width: "300px", marginRight: "10px" }}
      />
      <Button type="primary" onClick={handleSearch} disabled={!city}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
