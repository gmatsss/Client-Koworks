import React, { useEffect, useState } from "react";

const SearchForm = ({
  onSearch,
  categories,
  allSkills,
  jobs,
  initialSearchText,
}) => {
  const [searchText, setSearchText] = useState(initialSearchText); // Use initialSearchText

  const [employmentType, setEmploymentType] = useState("any");
  const [category, setCategory] = useState("any");
  const [skill, setSkill] = useState("any");

  const [filteredSkills, setFilteredSkills] = useState([]);

  useEffect(() => {
    if (category === "any") {
      setFilteredSkills(allSkills);
    } else {
      // Filter skills based on the selected category
      const skillsForCategory = jobs
        .filter((job) => job.selectedCategory === category)
        .flatMap((job) => job.jobSkills)
        .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates
      setFilteredSkills(skillsForCategory);
    }
    // Reset skill selection when category changes
    setSkill("any");
  }, [category, jobs, allSkills]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchText, employmentType, category, skill);
  };

  const handleEmploymentTypeChange = (e) => {
    const newEmploymentType = e.target.value;
    setEmploymentType(newEmploymentType);
  };

  const handleClear = () => {
    // Reset form fields and state
    setSearchText("");
    setEmploymentType("any");
    setCategory("any");
    setSkill("any");
    // Reset the jobs list to the original list
    onSearch("", "any", "any", "any");
  };

  return (
    <div className="col-3 px-0">
      <form className="simple-filter" onSubmit={handleSubmit}>
        <input type="hidden" name="_token" value="Your_CSRF_Token_Here" />
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
          <div className="k-select relative">
            <label htmlFor="employment_type">Employment Type</label>
            <select
              name="et"
              id="employment_type"
              value={employmentType}
              onChange={handleEmploymentTypeChange}
            >
              <option value="any">Any</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="freelance">Freelance</option>
            </select>
          </div>
        </div>
        <div className="kform-group mtop-20">
          <div className="k-select relative">
            <label htmlFor="category">Job Category</label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="any">Any</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="kform-group mtop-20">
          <div className="k-select relative">
            <label htmlFor="skill">Job Sub Category</label>
            <select
              name="skill"
              id="skill"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            >
              <option value="any">Any</option>
              {filteredSkills.map((skill, index) => (
                <option key={index} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="kform-group kform-btn text-center">
          <input
            type="submit"
            value="Search"
            id="filter"
            className="btn-default-red fn small-btn"
          />
          <button
            type="button"
            className="btn-default-red fn small-btn mtop-20"
            onClick={handleClear}
          >
            Clear Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
