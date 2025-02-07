'use client';

import Image from 'next/image';

function TopCategories() {
  const categories = [
    { id: 1, img: "/images/chair2.jpg", name: "Mini LCW Chair", price: "$56.00" },
    { id: 2, img: "/images/chair.jpg", name: "Mini LCW Chair", price: "$56.00" },
    { id: 3, img: "/images/chair5.jpg", name: "Mini LCW Chair", price: "$56.00" },
    { id: 4, img: "/images/chair2.jpg", name: "Mini LCW Chair", price: "$56.00" },
  ];

  return (
    <div className="w-full bg-white py-20">
        
      <h2 className="text-center text-[#3F509E] text-3xl font-bold mb-12">Top Categories</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
        {categories.map((category) => (
          <div key={category.id} className="relative group flex flex-col items-center">

            <div className="w-[150px] h-[150px] flex justify-center items-center bg-gray-200 rounded-full relative overflow-hidden">
              <Image
                src={category.img}
                alt={category.name}
                width={120}
                height={120}
                className="object-cover"
              />

              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#3F509E] transition-all duration-300"></div>

              <button className="absolute bottom-2 bg-[#08D15F] text-white px-3 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Shop
              </button>
            </div>

            <h3 className="text-[#3F509E] font-bold mt-4">{category.name}</h3>
            <p className="text-gray-600">{category.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <span className="w-3 h-3 bg-pink-600 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-pink-600 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-pink-600 rounded-full mx-1"></span>
      </div>
    </div>
  );
}

export default TopCategories;