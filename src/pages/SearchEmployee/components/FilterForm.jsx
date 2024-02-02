import React, { useState } from "react";
import { Link } from "react-router-dom";
import SkillList from "./SkillList";

const FilterForm = ({
  onSearch,
  initialSearchText,
  toggleAdvancedSearch,
  showAdvancedSearch,
  skillRatings,
  onEditSkillsClick,
  onClearFilters,
}) => {
  const [searchText, setSearchText] = useState(initialSearchText || "");
  const [employmentType, setEmploymentType] = useState("");
  const [salaryRangeLow, setSalaryRangeLow] = useState("");
  const [salaryRangeHigh, setSalaryRangeHigh] = useState("");
  const [lastActive, setLastActive] = useState("");
  const [skillshow, Setskillshow] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      searchText,
      employmentType,
      salaryRangeLow,
      salaryRangeHigh,
      lastActive,
    });

    // Check if skillRatings is not empty, then reset it
    if (skillRatings && skillRatings.length > 0) {
      Setskillshow(skillRatings); // Reset skill ratings
    }
  };

  const handleClearFilters = () => {
    // Reset local component state
    setSearchText("");
    setEmploymentType("");
    setSalaryRangeLow("");
    setSalaryRangeHigh("");
    setLastActive("");
    Setskillshow(""); // Assuming this should also reset

    // Call the parent component's clear filters function
    onClearFilters(); // This will reset the parent's state and perform the search
  };

  // console.log(skillshow);

  return (
    <div className="div col-3 px-0">
      <form onSubmit={handleSubmit} className="simple-filter">
        <div className="filter-header">
          <h2>Filter</h2>
        </div>
        {skillshow && (
          <SkillList skills={skillshow} onEditSkillsClick={onEditSkillsClick} />
        )}

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
            <select
              name="range_low"
              id="range_low"
              value={salaryRangeLow}
              onChange={(e) => setSalaryRangeLow(e.target.value)}
            >
              <option value="0">Any</option>
              <option value="10000">Php 10,000</option>
              <option value="20000">Php 20,000</option>
              <option value="30000">Php 30,000</option>
              <option value="40000">Php 40,000</option>
              <option value="50000">Php 50,000</option>
              <option value="60000">Php 60,000</option>
              <option value="70000">Php 70,000</option>
              <option value="80000">Php 80,000</option>
              <option value="90000">Php 90,000</option>
              <option value="99999">Php 100,000 and up</option>
            </select>
          </div>
          <div className="k-select relative">
            <select
              name="range_high"
              id="range_high"
              value={salaryRangeHigh}
              onChange={(e) => setSalaryRangeHigh(e.target.value)}
            >
              <option value="0">Any</option>
              <option value="10000">Php 10,000</option>
              <option value="20000">Php 20,000</option>
              <option value="30000">Php 30,000</option>
              <option value="40000">Php 40,000</option>
              <option value="50000">Php 50,000</option>
              <option value="60000">Php 60,000</option>
              <option value="70000">Php 70,000</option>
              <option value="80000">Php 80,000</option>
              <option value="90000">Php 90,000</option>
              <option value="99999">Php 100,000 and up</option>
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
              <option value="any">Any</option>
              <option value="30">Greater than 30</option>
              <option value="35">Greater than 35</option>
              <option value="40">Greater than 40</option>
              <option value="45">Greater than 45</option>
              <option value="50">Greater than 50</option>
              <option value="55">Greater than 55</option>
              <option value="60">Greater than 60</option>
              <option value="65">Greater than 65</option>
              <option value="70">Greater than 70</option>
            </select>
          </div>
        </div>
        <div className="kform-group mtop-20">
          <div className="k-select relative">
            <label htmlFor="last_active">Last Active</label>
            <select
              name="last_active"
              id="last_active"
              value={lastActive}
              onChange={(e) => setLastActive(e.target.value)}
            >
              <option value="any">Any</option>
              <option value="7">A week or less</option>
              <option value="31">A month or less</option>
              <option value="93">3 months or less</option>
              <option value="186">6 months or less</option>
              <option value="366">Up to a year</option>
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
          <Link onClick={toggleAdvancedSearch}>
            {showAdvancedSearch
              ? "Hide Advanced Search"
              : "Show Advanced Search"}
          </Link>
          <Link to="/">Search Guideline</Link>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
