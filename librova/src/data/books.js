export const GetBooks = async () => {
    const res = await fetch('https://livrova-server.onrender.com/books')
    return await res.json();
};

export const GetBooksByCategory = async (category, search = "") => {
    const url = category === "all"? "https://livrova-server.onrender.com/books" : `https://livrova-server.onrender.com/books?category=${category}`
    const res = await fetch(url)
    let books = await res.json();
    if(search)
    {
        books = books.filter(book => book.title.toLowerCase().includes(search.toLocaleLowerCase()));
    }
    return books;
}
export const GetBooksById = async (id) => {
    const res = await fetch(`https://livrova-server.onrender.com/books/${id}`)
    return await res.json();
}
export const GetCategory = async () => {
    const res = await fetch('https://livrova-server.onrender.com/categories')
    return await res.json();
}