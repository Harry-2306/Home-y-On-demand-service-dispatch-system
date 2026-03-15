import React, { useState, useEffect } from "react";
import { categories, mockProviders } from "./data"; // Assuming your dummy data is here

const ServicePage = () => {
  // --- STATE ---
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("recommended");

  // --- NEW: PAGINATION STATE ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18; // Exactly 20 items per page as requested!

  // --- RESET TO PAGE 1 ON FILTER CHANGE ---
  // If the user changes any filter or sorts, kick them back to page 1
  // so they don't get stuck on an empty "Page 2" if there are fewer results.
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, minPrice, maxPrice, minRating, sortBy]);

  // --- FILTER & SORT LOGIC ---
  const filteredProviders = mockProviders.filter((provider) => {
    const matchesSearch =
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || provider.category === selectedCategory;
    const matchesPrice =
      provider.price >= minPrice && provider.price <= maxPrice;
    const matchesRating = provider.rating >= minRating;

    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  const sortedAndFilteredProviders = [...filteredProviders].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "rating-desc") return b.rating - a.rating;
    return 0;
  });

  // --- NEW: PAGINATION MATH ---
  // Figure out which 20 items belong on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // .slice() grabs only the specific chunk of providers for this page
  const currentProviders = sortedAndFilteredProviders.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Calculate total pages (e.g., 24 items / 20 per page = 1.2 -> rounded up to 2 pages)
  const totalPages = Math.ceil(
    sortedAndFilteredProviders.length / itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8 mt-10">
      {/* --- SIDEBAR: Filters --- */}
      <div className="w-full md:w-1/4 flex flex-col gap-8 bg-gray-50 p-6 rounded-xl border border-gray-200 h-fit">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-extrabold text-gray-800">Filters</h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-gray-600 uppercase text-sm tracking-wider">
            Categories
          </h3>
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 cursor-pointer hover:text-cyan-600 transition-colors"
            >
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="accent-cyan-500 w-5 h-5 cursor-pointer"
              />
              <span className="text-lg font-medium">{category}</span>
            </label>
          ))}
        </div>

        {/* Price Filter (Min & Max) */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-gray-600 uppercase text-sm tracking-wider">
            Price Range
          </h3>
          <div className="flex items-center gap-2">
            <div className="relative w-full">
              <span className="absolute left-3 top-2 text-gray-500">₹</span>
              <input
                type="number"
                min="0"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-full pl-7 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
                placeholder="Min"
              />
            </div>
            <span className="text-gray-400 font-bold">-</span>
            <div className="relative w-full">
              <span className="absolute left-3 top-2 text-gray-500">₹</span>
              <input
                type="number"
                min="0"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full pl-7 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
                placeholder="Max"
              />
            </div>
          </div>
        </div>

        {/* Rating Filter */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-gray-600 uppercase text-sm tracking-wider">
            Minimum Rating
          </h3>
          <select
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
            className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:border-cyan-500 font-medium cursor-pointer"
          >
            <option value={0}>Any Rating</option>
            <option value={3}>3 Stars & Up</option>
            <option value={4}>4 Stars & Up</option>
            <option value={4.5}>4.5 Stars & Up</option>
          </select>
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={() => {
            setSelectedCategory("All");
            setMinPrice(0);
            setMaxPrice(20000);
            setMinRating(0);
            setSearchTerm("");
            setSortBy("recommended");
          }}
          className="mt-4 text-sm font-bold text-gray-500 hover:text-cyan-600 underline transition-colors"
        >
          Clear All Filters
        </button>
      </div>

      {/* --- MAIN CONTENT: Search & Results --- */}
      <div className="w-full md:w-3/4 flex flex-col gap-6">
        {/* Search Bar */}
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Search for a service or provider..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pl-5 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none text-lg transition-colors shadow-sm"
          />
        </div>

        {/* Top Bar: Results Info & Sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-gray-500 font-semibold text-lg">
            Showing {sortedAndFilteredProviders.length}{" "}
            {sortedAndFilteredProviders.length === 1 ? "result" : "results"}
          </p>

          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-2 border rounded-lg border-gray-300 focus:outline-none focus:border-cyan-500 font-medium cursor-pointer bg-white"
            >
              <option value="recommended">Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-desc">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Results Grid - NOW MAPPING OVER currentProviders instead of all of them */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProviders.length > 0 ? (
            currentProviders.map((provider) => (
              <div
                key={provider.id}
                className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col gap-3 group"
              >
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-full h-48 object-cover rounded-lg bg-gray-100"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-cyan-500 uppercase tracking-wider">
                    {provider.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800">
                    {provider.service}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    by {provider.name}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1 font-bold text-yellow-500 bg-yellow-50 px-2 py-1 rounded-md">
                    <span>★</span>
                    <span className="text-gray-800">{provider.rating}</span>
                  </div>
                  <div className="text-2xl font-extrabold text-cyan-600">
                    ₹{provider.price}
                  </div>
                </div>

                <button className="w-full mt-4 bg-gray-100 hover:bg-cyan-500 text-gray-800 hover:text-white font-bold py-3 rounded-lg transition-colors">
                  Book Now
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 flex flex-col items-center justify-center bg-gray-50 rounded-xl border border-dashed border-gray-300">
              <span className="text-4xl mb-4">🔍</span>
              <p className="text-gray-500 text-xl font-bold">
                No services found matching your filters.
              </p>
            </div>
          )}
        </div>

        {/* --- NEW: PAGINATION CONTROLS --- */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8 pt-6 border-t border-gray-200 w-full">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-6 py-2 bg-white border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            <span className="font-bold text-gray-600">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-6 py-2 bg-white border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicePage;
