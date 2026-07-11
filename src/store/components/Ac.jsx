import React from "react";
import { acData } from "../../data/ac";
import { SearchContext } from "./SearchContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Ac() {
  const { search } = useContext(SearchContext);
  const Data = acData.slice(0, 4);

  const filteredData = Data.filter((item) => {
    return (
      item.product.toLowerCase().includes(search.toLowerCase()) ||
      item.company.toLowerCase().includes(search.toLowerCase()) ||
      item.model.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      {filteredData.length > 0 && <h2 className="section-title">Speakers</h2>}
      <div className="proSection">
        {filteredData.map((item) => {
          return (
            <div className="imgBox" key={item.id}>
              <Link to={`/ac/${item.id}`} id="home-link">
                <img className="proImg" src={item.image} alt="" />
              </Link>

              <div id="title">
                {item.company} {item.model}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Ac;
