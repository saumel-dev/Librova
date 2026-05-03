import Link from 'next/link';

const LeftSideBar = async ({ activeCategory, categories }) => {
    return (
        <div className='mb-10'>
            <h2 className="text-lg font-bold text-center">All Categories</h2>
            <div className='flex gap-2 flex-wrap justify-center items-center mt-2'>
            {categories.map(category => (
                <Link
                    key={category.id}
                    href={`/books/${category.value}`}
                    className={`w-50 py-3 px-4 text-center font-bold rounded-xl transition-colors
                        ${activeCategory === category.value
                            ? 'bg-[#2A2A2A] text-white'
                            : 'bg-gray-100 text-black hover:bg-gray-200'
                        }
                    `}
                >
                    {category.name}
                </Link>
            ))}
            </div>
        </div>
    );
};

export default LeftSideBar;