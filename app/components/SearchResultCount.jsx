import React from 'react'

function SearchResultCount({ showingCount, totalCount, isNoResultButShowingNoCas, darkMode }) {
  return (
    <div className={`w-1/3 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} flex flex-col sm:flex-row sm:items-center sm:gap-3`}>
        {
          showingCount === totalCount ? (
            <span className='text-blue-500'>Dữ liệu: <span className='text-orange-500'>{totalCount}</span></span>
          ) : (
            <span className='text-blue-500'>Kết quả: <span className='text-orange-500'>{showingCount}</span> / <span className='text-orange-500'>{totalCount}</span></span>)
        }
        
        {isNoResultButShowingNoCas && (
          <span className="text-amber-700 font-medium">
            (Không tìm thấy → hiển thị các chất không có CAS)
          </span>
        )}
      </div>
  )
}

export default SearchResultCount
