import React from 'react'

const Product = () => {
  return (
    <div>
      {/* PRODUCT */}
      <section className="section product">
                <div className="container">
                    <h2 className="h2 section-title">All Products</h2>
                    <ul className="product-list">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <li className="product-item" key={item}>
                                <div className="product-card" tabIndex="0">
                                    <figure className="card-banner">
                                        <img src={`./public/asset/images/${item}.jpg`} width="312" height="350" loading="lazy" alt={`Product ${item}`} className="image-contain" />
                                        <ul className="card-action-list">
                                            <li className="card-action-item">
                                                <button className="card-action-btn" aria-labelledby={`card-label-${item}-1`}>
                                                    <ion-icon name="cart-outline"></ion-icon>
                                                </button>
                                                <div className="card-action-tooltip" id={`card-label-${item}-1`}>Add to Cart</div>
                                            </li>
                                            <li className="card-action-item">
                                                <button className="card-action-btn" aria-labelledby={`card-label-${item}-2`}>
                                                    <ion-icon name="heart-outline"></ion-icon>
                                                </button>
                                                <div className="card-action-tooltip" id={`card-label-${item}-2`}>Add to Wishlist</div>
                                            </li>
                                        </ul>
                                    </figure>
                                    <div className="card-content">
                                        <div className="card-cat">
                                            <a href="#" className="card-cat-link">Men</a> /
                                            <a href="#" className="card-cat-link">Sports</a>
                                        </div>
                                        <h3 className="h3 card-title">
                                            <a href="#">Leather Mens Slipper</a>
                                        </h3>
                                        <data className="card-price" value="190.85">Rs 4000</data>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <hr />
    </div>
  )
}

export default Product
