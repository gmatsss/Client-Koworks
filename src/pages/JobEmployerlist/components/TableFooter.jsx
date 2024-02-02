const TableFooter = ({
  start,
  end,
  total,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // Function to render pagination buttons
  const renderPagination = () => {
    let pages = [];

    if (totalPages > 1) {
      // Previous button
      pages.push(
        <li
          className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        >
          <span className="page-link">&lsaquo;</span>
        </li>
      );

      // Page number buttons
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <li
            key={i}
            className={`page-item ${i === currentPage ? "active" : ""}`}
            onClick={() => onPageChange(i)}
          >
            <span className="page-link" style={{ cursor: "pointer" }}>
              {i}
            </span>
          </li>
        );
      }

      // Next button
      pages.push(
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          onClick={() =>
            currentPage < totalPages && onPageChange(currentPage + 1)
          }
        >
          <span className="page-link">&rsaquo;</span>
        </li>
      );
    }

    return pages;
  };

  return (
    <tfoot>
      <tr className="border-bottom">
        <td className="bg-light align-middle" colSpan="6">
          <div className="d-flex justify-content-between flex-wrap">
            <div className="d-flex align-items-center px-3 py-1 navigation-container">
              <div>
                Showing results <b>{start}</b> to{" "}
                <b>{end > total ? total : end}</b> on <b>{total}</b>
              </div>
            </div>
            <div className="d-flex align-items-center mb-n3 px-3 py-1 pagination-container">
              <nav>
                <ul className="pagination">{renderPagination()}</ul>
              </nav>
            </div>
          </div>
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
