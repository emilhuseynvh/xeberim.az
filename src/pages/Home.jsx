import React, { useState } from 'react';
import { useGetAllNewsQuery } from '../redux/oxuaz.api';
import SimpleSlider from '../Component/Slider';
import WidgetNews from '../Component/WidgetNews';
import Card from '../Component/Card';

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data: allNewsData, error: allNewsError, isLoading: allNewsLoading } = useGetAllNewsQuery();
  
  const totalPages = allNewsData ? Math.ceil(allNewsData.length / itemsPerPage) : 0;

  const currentData = allNewsData
    ? allNewsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : [];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className='my-12'>
      <div className="container mx-auto">
        <div className='flex justify-between flex-col lg:flex-row'>
          <SimpleSlider />
          <WidgetNews />
        </div>
        <div className='flex flex-wrap gap-6 my-20'>
          {currentData.map((item, i) => {
            return (
              <Card key={i} item={item} />
            )
          })}
        </div>

        <nav aria-label="Page navigation example" className='flex justify-center'>
          <ul className="flex items-center -space-x-px h-10 text-base">
            <li>
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
                <span className="sr-only">Previous</span>
                <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i + 1}>
                <button 
                  onClick={() => handlePageChange(i + 1)}
                  className={`flex items-center justify-center px-4 h-10 leading-tight ${currentPage === i + 1 ? 'text-blue-600 bg-blue-100' : 'text-gray-500 bg-white'} border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}>
                  {i + 1}
                </button>
              </li>
            ))}
            <li>
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
                <span className="sr-only">Next</span>
                <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}

export default Home;
