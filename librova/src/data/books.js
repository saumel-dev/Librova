export const GetBooks = async () => {
    const res = await fetch('http://localhost:5000/books')
    return await res.json();
};

export const GetBooksByCategory = async (category) => {
    const url = category === "all"? "http://localhost:5000/books" : `http://localhost:5000/books?category=${category}`
    const res = await fetch(url)
    return await res.json();
}
export const GetBooksById = async (id) => {
    const res = await fetch(`http://localhost:5000/books/${id}`)
    return await res.json();
}
export const GetCategory = async () => {
    const res = await fetch('http://localhost:5000/categories')
    return await res.json();
}