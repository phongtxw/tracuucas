import SearchResultCount from "./SearchResultCount"

function Search(props) {
  const { 
    searchTerm, 
    setSearchTerm, 
    darkMode,
    showingCount,
    totalCount,
    isNoResultButShowingNoCas
  } = props;

  return (
    <div className="w-full flex justify-between">
      
      <SearchResultCount
        showingCount={showingCount}
        totalCount={totalCount}
        isNoResultButShowingNoCas={isNoResultButShowingNoCas}
        darkMode={darkMode}
      />

      <div className="w-1/3">
        <div className="relative">
          <input
            type="search"
            placeholder="Tìm theo tên khoa học, CAS..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=
              {`w-full rounded-lg border border-gray-300
              px-4 py-3 pl-10 text-sm
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
              outline-none transition
              text-gray-700 placeholder:text-gray-400
              ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-indigo-400 focus:ring-indigo-900 text-white' : 'bg-white text-gray-900'}
            `}
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default Search
