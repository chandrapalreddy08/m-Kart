import React, { useContext } from 'react';
import { fridgeData } from '../../data/fridge';
import { Link } from 'react-router-dom';
import { SearchContext } from './SearchContext';

function Fproducts() {
  const Data = fridgeData.slice(0, 4);

  const { search } = useContext(SearchContext);

  const filteredData = Data
    .filter((item) => {
      return (
        item.product.toLowerCase().includes(search.toLowerCase()) ||
        item.brand.toLowerCase().includes(search.toLowerCase()) ||
        item.model.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
      );
    })
    .slice(0, 4);

  return (
    <>
      {filteredData.length > 0 && (
        <h2 className="section-title">Fridges</h2>
      )}

      <div className="proSection">
        {filteredData.map((item) => (
          <div className="imgBox" key={item.id}>
            <Link to={`/fridges/${item.id}`} id="home-link">
              <img className="proImg" src={item.image} alt={item.model} />
            </Link>

            <div id="title">
              {item.brand} {item.model}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Fproducts;