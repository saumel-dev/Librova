'use client'
import { Description, Label, SearchField } from "@heroui/react";
const SearchBar = () => {
    return (
        <div>
            <SearchField name="search">
                <Label>Search products</Label>
                <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input className="w-70" placeholder="Search products..." />
                    <SearchField.ClearButton />
                </SearchField.Group>
                <Description>Enter keywords to search for products</Description>
            </SearchField
        </div>
    );
};

export default SearchBar;