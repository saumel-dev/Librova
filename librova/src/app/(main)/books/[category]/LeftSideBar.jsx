import Link from 'next/link';

const LeftSideBar = async ({ activeCategory, categories }) => {
    return (
        <div className='flex flex-col gap-2'>
            <h2 className="text-lg font-bold">All Categories</h2>
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
    );
};

export default LeftSideBar;