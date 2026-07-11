import React, { useState } from "react";
import { mobileData } from "../data/mobiles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../store/components/SearchContext";

function MobilesPage() {
  const [selectedCompany, setSelectedCompany] = useState([]);
  const { search } = useContext(SearchContext);
  const [showFilter, setShowFilter] = useState(false);

  const companyHandler = (clickedData) => {
    if (selectedCompany.includes(clickedData)) {
      setSelectedCompany(
        selectedCompany.filter((item) => item !== clickedData),
      );
    } else {
      setSelectedCompany([clickedData]);
    }
  };

  const filteredData = mobileData.filter((item) => {
    const productFilter =
      selectedCompany.length == 0 || selectedCompany.includes(item.company);

    const searchFilter =
      item.product.toLowerCase().includes(search.toLowerCase()) ||
      item.company.toLowerCase().includes(search.toLowerCase()) ||
      item.model.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());

    return productFilter && searchFilter;
  });

  return (
    <>
      {/* <h2 className="section-title">Mobiles</h2> */}

      <button className="filterBtn" onClick={()=>setShowFilter(true)}>☰ Filters</button>
      <div className="pageSection-parent">
        {/* Left Side Filter */}
        <div className={`filterSection ${showFilter ? "active" : ""} `}>
          <button className="closeBtn" onClick={()=>setShowFilter(false)}>
            ✕
          </button>
          {mobileData.map((brand) => (
            <div className="filterItem" key={brand.id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCompany.includes(brand.company)}
                  onChange={() => companyHandler(brand.company)}
                />

                <span>{brand.company}</span>
              </label>
            </div>
          ))}
        </div>

        {/* Right Side Products */}
        <div className="pageSection">
          {filteredData.map((item) => (
            <div className="pageImg" key={item.id}>
              <Link to={`/mobiles/${item.id}`} id="product-link">
                <img src={item.image} alt={item.model} />
              </Link>

              <div className="proModel">
                {item.company}, {item.model}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MobilesPage;
