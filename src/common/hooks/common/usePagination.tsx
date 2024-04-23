import React from 'react';

const usePagination = (total: number, limit = 10) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const lastPage = Math.ceil(total / limit);

  return {
    currentPage,
    setCurrentPage,
    lastPage,
  };
};

export default usePagination;
