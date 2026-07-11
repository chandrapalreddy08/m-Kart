import React, { useState } from "react";
import { furnitureData } from "../data/furniture";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../store/components/SearchContext";


function FurniturePage() {
  const [selectedBrand, setSelectedBrand] = useState([]);
const { search } = useContext(SearchContext);
 const [showFilter, setShowFilter] = useState(false);
  const brandHandler = (clickedData) => {
    if (selectedBrand.includes(clickedData)) {
      setSelectedBrand(
        selectedBrand.filter((item) => item !== clickedData)
      );
    } else {
      setSelectedBrand([clickedData]);
    }
  };

  const filteredData = furnitureData.filter((item) => {
  const companyFilter =
    selectedBrand.length === 0 ||
    selectedBrand.includes(item.company);

  const searchFilter =
    item.product.toLowerCase().includes(search.toLowerCase()) ||
    item.company.toLowerCase().includes(search.toLowerCase()) ||
    item.model.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase());

  return companyFilter && searchFilter;
});

  return (
    <>
      {/* <h2 className="section-title">Furniture</h2> */}
       <button className="filterBtn" onClick={()=>setShowFilter(true)}>☰ Filters</button>

      <div className="pageSection-parent">

        {/* Left Side Filter */}
       <div className={`filterSection ${showFilter ? "active" : ""} `}>
                 <button className="closeBtn" onClick={()=>setShowFilter(false)}>
                   ✕
                 </button>
          {furnitureData.map((brand) => (
            <div className="filterItem" key={brand.id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedBrand.includes(brand.brand)}
                  onChange={() => brandHandler(brand.brand)}
                />
                <span>{brand.brand}</span>
              </label>
            </div>
          ))}
        </div>

        {/* Right Side Products */}
        <div className="pageSection">
          {filteredData.map((item) => (
            <div className="pageImg" key={item.id}>
              <Link to={`/furniture/${item.id}`} id="product-link">
                <img src={item.image} alt={item.model} />
              </Link>

              <div className="proModel">
                {item.brand}, {item.model}
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default FurniturePage;