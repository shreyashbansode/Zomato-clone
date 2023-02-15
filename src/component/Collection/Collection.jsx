import React from 'react'
import "./Collection.css"

const Collection = () => {
  return (
    <>
      <div className="collection_container">

        <div className="collect_container_nested">
          <div className="collect_bx_size">


          <div className="Order_online">
            <div className="img_online">
              <img src="/assets/images/orderonline.jpg" alt="eror" />
            </div>

            <div className='text_line'>
              <h2>Order Online</h2>
              <p>stay home and order to your doorstep</p>
            </div>
          </div>
          <div className="Order_online">
            <div className="img_online">
              <img src="/assets/images/diningout.jpg" alt="eror" />
            </div>
            <div className='text_line'>
              <h2>Dining</h2>
              <p>view the city favourite dining venues</p>
            </div>
          </div>
          <div className="Order_online">
            <div className="img_online"><img src="/assets/images/nightlifeandclubs.jpg" alt="eror" /></div>
            <div className='text_line'>
              <h2>Night and clubs</h2>
              <p>Explore the city's nightlife outlets</p>
            </div>
          </div>

          </div>
        </div>
        <div>

        </div>
        <section>

          <div className='collection_bx'>
            <div className='nested_bx'>
              <div className='collection_name'>
                <h2>Collections</h2>
                <h6>Explore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends</h6>
              </div>
              <div className='collection_nested_bx'>
                <div className='collection_one'>

                  <img src="/assets/images/romanceintheair_1_11zon.jpg" alt="eror" />
                  <div className='collection_one_text'>
                    <h4>9 Romantic Dining Places</h4>
                    <h8>9 places</h8>

                  </div>
                </div>
                <div className='collection_one'>
                  <img src="/assets/images/callingallbarhoppers.jpg" alt="eror" />

                  <div className='collection_one_text'>
                    <h4>10 Newly Opened Restaur...</h4>
                    <h8>10 places</h8>

                  </div>
                </div>
                <div className='collection_one'>
                  <img src="/assets/images/happyhours.jpg" alt="eror" />
                  <div className='collection_one_text'>
                    <h4>8 Great buffets in town</h4>
                    <h8>8 places</h8>

                  </div>
                </div>
                <div className='collection_one'>
                  <img src="/assets/images/citylegends_21_11zon.jpg" alt="eror" />

                  <div className='collection_one_text'>
                    <h4>14 Lit Party Places</h4>
                    <h8>14 places</h8>

                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Collection