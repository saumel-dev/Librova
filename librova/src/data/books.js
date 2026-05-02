export const GetBooks = async () => {
    const res = await fetch('http://localhost:5000/books')
    return await res.json();
};

export const BooksByCategory = async (category) => {
    const url = category === "all"? "http://localhost:5000/books" : `http://localhost:5000/books?category=${category}`
}
export const BooksById = async (id) => {
    const res = await fetch(`http://localhost:5000/books/${id}`)
    return await res.json()
}