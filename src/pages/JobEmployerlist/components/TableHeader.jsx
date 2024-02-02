import React from "react";
import { Link } from "react-router-dom";

const TableHeader = ({
  searchQuery,
  rowsToShow,
  onSearchChange,
  onRowsChange,
}) => {
  const handleRowsChange = (e) => {
    if (e && e.target) {
      const numberOfRows = Math.max(1, parseInt(e.target.value, 10) || 1);
      onRowsChange(numberOfRows); // Pass the number directly
    }
  };
  return (
    <thead>
      <tr className="bg-white border-bottom">
        <td className="px-0 align-middle" colSpan="6">
          <div className="d-flex flex-column flex-xl-row">
            {/* Search Form */}
            <div className="flex-fill">
              <div className="flex-fill pr-xl-3 py-1 searching">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-secondary">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    name="search"
                    value={searchQuery}
                    placeholder="Search by: Job Title, ID Score, Type of Employment, Status"
                    aria-label="Search by: Job Title, ID Score, Type of Employment, Status"
                    onChange={onSearchChange} // Add this
                  />
                </div>
              </div>
            </div>

            {/* Rows Number Form */}
            <div className="d-flex justify-content-between">
              <div className="px-xl-3 py-1 rows-number-definition">
                <input type="hidden" name="search" value="" />
                <input type="hidden" name="sort_by" value="" />
                <input type="hidden" name="sort_dir" value="" />
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-secondary">
                      <i className="fa fa-list-ol"></i>
                    </span>
                  </div>
                  <input
                    className="form-control"
                    type="number"
                    name="rows"
                    value={rowsToShow}
                    placeholder="Number of rows"
                    aria-label="Number of rows"
                    onChange={handleRowsChange} // Use the local handler
                    min="1" // HTML5 minimum attribute
                  />
                </div>
              </div>

              {/* Create Action */}
              <div className="d-flex align-items-center pl-3 py-1 create-action">
                <Link
                  to="/DEmployer/postnewjob"
                  className="btn btn-success"
                  title="Create"
                >
                  <i className="fa fa-plus-circle fa-fw"></i> Create
                </Link>
              </div>
            </div>
          </div>
        </td>
      </tr>

      {/* Column Headers */}
      <tr className="bg-light border-bottom">
        {/* Job Title Column Header */}
        <th className="align-middle" scope="col">
          <a className="d-flex" title="Job Title">
            <span className="sort">
              <i className="fa fa-sort fa-fw"></i>
            </span>
            <span> Job Title </span>
          </a>
        </th>

        {/* ID Score Column Header */}
        <th className="align-middle" scope="col">
          <a className="d-flex" title="ID Score">
            <span className="sort">
              <i className="fa fa-sort fa-fw"></i>
            </span>
            <span> ID Score </span>
          </a>
        </th>

        {/* Type of Employment Column Header */}
        <th className="align-middle" scope="col">
          <a className="d-flex" title="Type of Employment">
            <span className="sort">
              <i className="fa fa-sort fa-fw"></i>
            </span>
            <span> Type of Employment </span>
          </a>
        </th>

        {/* Status Column Header */}
        <th className="align-middle" scope="col">
          <a className="d-flex" title="Status">
            <span className="sort">
              <i className="fa fa-sort fa-fw"></i>
            </span>
            <span> Status </span>
          </a>
        </th>

        {/* Applicants Column Header */}
        <th className="align-middle" scope="col">
          Applicants
        </th>

        {/* Actions Column Header */}
        <th className="text-right align-middle" scope="col">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
