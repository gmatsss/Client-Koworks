import React, { useState } from "react";
import { Link } from "react-router-dom";
const FilterForm = ({ onSearch, initialSearchText }) => {
  const [searchText, setSearchText] = useState(initialSearchText || "");
  const [employmentType, setEmploymentType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ searchText, employmentType });
  };

  const handleClearFilters = () => {
    setSearchText("");
    setEmploymentType("");
    onSearch({ searchText: "", employmentType: "" });
  };

  return (
    <div className="div col-3 px-0">
      <form onSubmit={handleSubmit} className="simple-filter">
        <div className="filter-header">
          <h2>Filter</h2>
        </div>
        <div className="kform-group mtop-20">
          <input
            type="text"
            className="kfield gray f-border"
            name="sj"
            placeholder="Search Text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="kform-group">
          <label>Monthly Salary Range</label>
        </div>
        <div className="kform-group colstwo">
          <div className="k-select relative">
            <select name="range_low" id="range_low">
              {/* ... (options for range_low) ... */}
            </select>
          </div>
          <div className="k-select relative">
            <select name="range_high" id="range_high">
              {/* ... (options for range_high) ... */}
            </select>
          </div>
        </div>
        <div className="kform-group mtop-20">
          <div className="k-select relative">
            <label htmlFor="employment_type">Employment Type</label>
            <select
              name="et"
              id="employment_type"
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>
        </div>
        <div className="kform-group mtop-20">
          <div className="k-select relative">
            <label htmlFor="id_score">ID Proof Score</label>
            <select name="id_score" id="id_score">
              {/* ... (options for id_score) ... */}
            </select>
          </div>
        </div>
        <div className="kform-group mtop-20">
          <div className="k-select relative">
            <label htmlFor="last_active">Last Active</label>
            <select name="last_active" id="last_active">
              {/* ... (options for last_active) ... */}
            </select>
          </div>
        </div>
        <div className="kform-group mtop-20">
          <div className="k-checkbox">
            <label htmlFor="id_verified">
              <input type="checkbox" id="id_verified" name="id_verified" />
              <span>ID Verified</span>
            </label>
          </div>
          <div className="k-checkbox">
            <label htmlFor="fb_verified">
              <input type="checkbox" id="fb_verified" name="fb_verified" />
              <span>FB Verified</span>
            </label>
          </div>
        </div>
        <div className="kform-group mtop-10 text-center">
          <input
            type="submit"
            value="Search"
            id="filter"
            className="btn-default-red fn small-btn"
          />
          <button
            type="button"
            className="btn-default-red fn small-btn mtop-20 text-center"
            onClick={handleClearFilters}
          >
            Clear Filters
          </button>
        </div>
        <div className="kform-group mtop-20 form-links">
          <Link to="/">Advanced Search</Link>
          <Link to="/">Search Guideline</Link>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
