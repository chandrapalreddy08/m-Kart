import React, { useState } from "react";
import { watchData } from "../data/watch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../store/components/SearchContext";


function WatchPage() {
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

 const filteredData = watchData.filter((item) => {
  const brandFilter =
    selectedBrand.length === 0 ||
    selectedBrand.includes(item.brand);

  const searchFilter =
    item.product.toLowerCase().includes(search.toLowerCase()) ||
    item.brand.toLowerCase().includes(search.toLowerCase()) ||
    item.model.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase());

  return brandFilter && searchFilter;
});

  return (
    <>
      {/* <h2 className="section-title">Watch</h2> */}
       <button className="filterBtn" onClick={()=>setShowFilter(true)}>☰ Filters</button>

      <div className="pageSection-parent">

        {/* Left Side Filter */}
       <div className={`filterSection ${showFilter ? "active" : ""} `}>
                 <button className="closeBtn" onClick={()=>setShowFilter(false)}>
                   ✕
                 </button>
          {watchData.map((brand) => (
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
           <div className="page-color">
             <div className="pageImg" key={item.id}>
              <Link to={`/watch/${item.id}`} id="product-link">
                <img src={item.image} alt={item.model} />
              </Link>

              <div className="proModel">
                {item.brand}, {item.model}
              </div>
            </div>
           </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default WatchPage;