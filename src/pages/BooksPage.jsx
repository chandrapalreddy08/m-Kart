import React, { useState, useContext } from "react";
import { booksData } from "../data/books";
import { Link } from "react-router-dom";
import { SearchContext } from "../store/components/SearchContext";

function BooksPage() {
  const [selectedAuthor, setSelectedAuthor] = useState([]);
  const { search } = useContext(SearchContext);
   const [showFilter, setShowFilter] = useState(false);

  const authorHandler = (clickedAuthor) => {
    if (selectedAuthor.includes(clickedAuthor)) {
      setSelectedAuthor(
        selectedAuthor.filter((item) => item !== clickedAuthor)
      );
    } else {
      setSelectedAuthor([clickedAuthor]);
    }
  };

  const filteredData = booksData.filter((item) => {
    const authorFilter =
      selectedAuthor.length === 0 ||
      selectedAuthor.includes(item.author);

    const searchFilter =
      item.product.toLowerCase().includes(search.toLowerCase()) ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.author.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());

    return authorFilter && searchFilter;
  });

  // Remove duplicate authors
  const authors = [...new Set(booksData.map((item) => item.author))];

  return (
    <>
      {/* <h2 className="section-title">Books</h2> */}
       <button className="filterBtn" onClick={()=>setShowFilter(true)}>☰ Filters</button>

      <div className="pageSection-parent">

        {/* Left Side Filter */}
       <div className={`filterSection ${showFilter ? "active" : ""} `}>
                 <button className="closeBtn" onClick={()=>setShowFilter(false)}>
                   ✕
                 </button>
          {authors.map((author) => (
            <div className="filterItem" key={author}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedAuthor.includes(author)}
                  onChange={() => authorHandler(author)}
                />
                <span>{author}</span>
              </label>
            </div>
          ))}
        </div>

        {/* Right Side Products */}
        <div className="pageSection">
          {filteredData.map((item) => (
            <div className="pageImg" key={item.id}>
              <Link to={`/books/${item.id}`} id="product-link">
                <img src={item.image} alt={item.title} />
              </Link>

              <div className="proModel">
                {item.title}
              </div>

              <div>{item.author}</div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default BooksPage;