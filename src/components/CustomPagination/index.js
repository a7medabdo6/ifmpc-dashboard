import React from "react";
import { Pagination } from "react-bootstrap";

const CustomPagination = ({ totalPages, currentPage, onPageChange }) => {
  // تحديد الصفحات التي سيتم عرضها
  const pagesToShow = 4;
  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <Pagination>
      {/* الزر السابق */}
      <Pagination.Prev
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      
      {/* عرض أرقام الصفحات */}
      {startPage > 1 && (
        <>
          <Pagination.Item onClick={() => handlePageChange(1)}>1</Pagination.Item>
          {startPage > 2 && <Pagination.Ellipsis />}
        </>
      )}
      {[...Array(endPage - startPage + 1)].map((_, index) => (
        <Pagination.Item
          key={startPage + index}
          active={startPage + index === currentPage}
          onClick={() => handlePageChange(startPage + index)}
        >
          {startPage + index}
        </Pagination.Item>
      ))}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <Pagination.Ellipsis />}
          <Pagination.Item onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </Pagination.Item>
        </>
      )}
      
      {/* الزر التالي */}
      <Pagination.Next
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};

export default CustomPagination;
