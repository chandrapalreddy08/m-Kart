import React, { useContext } from 'react'
import { mobileData } from '../../data/mobiles'
import { Link } from 'react-router-dom';
import { SearchContext } from './SearchContext';


function Mobiles() {
            const Data = mobileData.slice(0,4);
    
    const { search } = useContext(SearchContext);

    const filteredData = 
    
        Data.filter((item) => {
            return (
                item.product.toLowerCase().includes(search.toLowerCase()) ||
                item.company.toLowerCase().includes(search.toLowerCase()) ||
                item.model.toLowerCase().includes(search.toLowerCase()) ||
                item.category.toLowerCase().includes(search.toLowerCase())
            )
        })
        .slice(0, 4);


    return (
        <>
           {
 filteredData.length > 0 && (
   <h2 className='section-title'>Mobiles</h2>
 )
}

            <div className='proSection'>
                {
                    filteredData.map((item) => {
                        return (
                            <div className='imgBox' key={item.id}>
                                <Link to={`/mobiles/${item.id}`} id="home-link">
                                    <img className='proImg' src={item.image} alt="" />
                                </Link>

                                <div id="title">
                                    {item.company} {item.model}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Mobiles;