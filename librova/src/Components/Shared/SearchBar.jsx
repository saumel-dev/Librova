'use client'
import { Description, Label, SearchField } from "@heroui/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
const SearchBar = () => {

    const router = useRouter();
    const pathname = usePathname();

    const handleSearch = (value) => {
        if(value)
        {
            router.push(`${pathname}?search=${value}`)
        }
        else
        {
            router.push(pathname);
        }
    }
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-7 px-3">
                <SearchField onSubmit={handleSearch} className='w-2xl md:w-3xl lg:w-5xl' name="search">
                <Label>Search products</Label>
                <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input className="w-70" placeholder="Search products..." />
                    <SearchField.ClearButton />
                </SearchField.Group>
                <Description>Enter keywords to search for Books</Description>
            </SearchField>
            </div>
        </div>
    );
};

export default SearchBar;