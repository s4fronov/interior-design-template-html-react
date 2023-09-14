/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './HomePage.scss'

export const HomePage = () => {
  const containers /*: NodeListOf<Node>*/ = document.querySelectorAll('.carousel-content');
  let container = containers[0];

  const doForwardSlide = () => {
    const newFirstCard = container.firstChild;
    if (newFirstCard)
      container.appendChild(newFirstCard);
  }

  const doBackSlide = () => {
    const newFirstCard = container.lastChild;
    if (newFirstCard)
      container.insertBefore(newFirstCard, container.firstChild);
  }

  return (
    <>
      <header>
        <div id="header-content">
          <div className="company-icon">
            <img id="header-logo" src="/assets/svg/logo.svg" />
            <span className="company-name" id="header-logo-name">interior</span>
          </div>
          <nav id="navigation-bar">
            <a href="#home" className="nav-btn">Home</a>
            <a href="#collections" className="nav-btn">Collections</a>
            <a href="#products" className="nav-btn">Products</a>
            <a href="#review" className="nav-btn">Reviews</a>
            <a href="#blog" className="nav-btn">Blog</a>
            <a href="#contact-us" className="nav-btn">Contact us</a>
          </nav> 
          <div id="customer-panel">
            <img id="search" className="btn" src="/assets/svg/search.svg" />
            <img id="cart" className="btn" src="/assets/svg/cart.svg" />
            <div className="notification-circle">
              <span id="cart-items-count">1</span>
            </div>
          </div>
        </div>
      </header>
      <section id="home">
        <div id="home-block">
          <div id="home-content">
            <div id="home-content-first">INTERIOR</div>
            <h1>Home Designs 
              <br />Made Easy
            </h1>
            <span id="home-content-second">$416.00</span>
            <span id="home-content-third">Starting</span>
          </div>
          <a href="#" id="home-btn" className="btn btn-dark">SHOP NOW</a>
        </div>
      </section>
      <section id="collections" className="carousel" onMouseMove={(e) => {
        container = containers[0];
      }}>
        <img onClick={doBackSlide} src="/assets/svg/back.svg" className="btn arrow back" />
        <div className="carousel-content">
          <div className="carousel-card">
            <img src="/assets/img/collections/garden-chair.png" />
            <div className="carousel-card-content">
              <p className="carousel-card-name">New Chair Collection 2023</p>
              <a href="#" className="btn btn-light">SHOP NOW</a>
            </div>
          </div>
          <div className="carousel-card">
            <img src="/assets/img/collections/desk-lamp.png" />
            <div className="carousel-card-content">
              <p className="carousel-card-name">Lamp Desk Collection 2023</p>
              <a href="#" className="btn btn-light">SHOP NOW</a>
            </div>
          </div>
          <div className="carousel-card">
            <img src="/assets/img/collections/modern-chair.png" />
            <div className="carousel-card-content">
              <p className="carousel-card-name">Modern Chair Collection 2023</p>
              <a href="#" className="btn btn-light">SHOP NOW</a>
            </div>
          </div>
        </div>
        <img onClick={doForwardSlide} src="/assets/svg/forward.svg" className="btn arrow forward" />
      </section>
      <section id="guarantee">
        <div className="guarantee-block">
          <img className="guarantee-block-img" src="/assets/svg/shipping.svg" />
          <div className="guarantee-block-content">
            <p>Free Shipping</p>
            <span>Capped at $319 per order</span>
          </div>
        </div>
        <div className="guarantee-block">
          <img className="guarantee-block-img" src="/assets/svg/return.svg" />
          <div className="guarantee-block-content">
            <p>Free Returns</p>
            <span>Within 25 Days</span>
          </div>
        </div>
        <div className="guarantee-block">
          <img className="guarantee-block-img" src="/assets/svg/secure.svg" />
          <div className="guarantee-block-content">
            <p>100% Secure</p>
            <span>100% Secure payment</span>
          </div>
        </div>
      </section>
      <section id="products">
        <h2 className="left gold">PROFESSIONAL TEAM</h2>
        <div className="header-with-btn">
          <h3 className="left black">The Best New Arrivals</h3>
          <a href="#" className="btn btn-light">See More Products</a>
        </div>
        <div className="gallery">
          <div className="gallery-card">
            <div className="gallery-card-img">
              <img src="/assets/img/products/1.png" />
            </div>
            <div className="gallery-card-widget">
              <img className="btn" src="/assets/svg/refresh.svg" />
              <img className="btn" src="/assets/svg/like.svg" />
              <img className="btn" src="/assets/svg/in-cart.svg" />
            </div>
            <div className="gallery-card-name">White chair</div>
            <div className="gallery-card-price">
              <p><span>$20.00</span> $15.00</p>
              <img className="gallery-card-rating" src="/assets/svg/stars.svg" />
            </div>
          </div>
          <div className="gallery-card">
            <div className="gallery-card-img">
              <img src="/assets/img/products/2.png" />
            </div>
            <div className="gallery-card-widget">
              <img className="btn" src="/assets/svg/refresh.svg" />
              <img className="btn" src="/assets/svg/like.svg" />
              <img className="btn" src="/assets/svg/in-cart.svg" />
            </div>
            <div className="gallery-card-name">Blue chair</div>
            <div className="gallery-card-price">
              <p><span>$18.00</span> $15.00</p>
              <img className="gallery-card-rating" src="/assets/svg/stars.svg" />
            </div>
          </div>
          <div className="gallery-card">
            <div className="gallery-card-img">
              <img src="/assets/img/products/3.png" />
            </div>
            <div className="gallery-card-widget">
              <img className="btn" src="/assets/svg/refresh.svg" />
              <img className="btn" src="/assets/svg/like.svg" />
              <img className="btn" src="/assets/svg/in-cart.svg" />
            </div>
            <div className="gallery-card-name">Coral vase</div>
            <div className="gallery-card-price">
              <p>$15.00</p>
              <img className="gallery-card-rating" src="/assets/svg/stars.svg" />
            </div>
          </div>
          <div className="gallery-card">
            <div className="gallery-card-img">
              <img src="/assets/img/products/4.png" />
            </div>
            <div className="gallery-card-widget">
              <img className="btn" src="/assets/svg/refresh.svg" />
              <img className="btn" src="/assets/svg/like.svg" />
              <img className="btn" src="/assets/svg/in-cart.svg" />
            </div>
            <div className="gallery-card-name">Coffee table set</div>
            <div className="gallery-card-price">
              <p>$15.00</p>
              <img className="gallery-card-rating" src="/assets/svg/stars.svg" />
            </div>
          </div>
          <div className="gallery-card">
            <div className="gallery-card-img">
              <img src="/assets/img/products/5.png" />
            </div>
            <div className="gallery-card-widget">
              <img className="btn" src="/assets/svg/refresh.svg" />
              <img className="btn" src="/assets/svg/like.svg" />
              <img className="btn" src="/assets/svg/in-cart.svg" />
            </div>
            <div className="gallery-card-name">Decorative vase</div>
            <div className="gallery-card-price">
              <p>$15.00</p>
              <img className="gallery-card-rating" src="/assets/svg/stars.svg" />
            </div>
          </div>
          <div className="gallery-card">
            <div className="gallery-card-img">
              <img src="/assets/img/products/6.png" />
            </div>
            <div className="gallery-card-widget">
              <img className="btn" src="/assets/svg/refresh.svg" />
              <img className="btn" src="/assets/svg/like.svg" />
              <img className="btn" src="/assets/svg/in-cart.svg" />
            </div>
            <div className="gallery-card-name">Coral vase</div>
            <div className="gallery-card-price">
              <p><span>$20.00</span> $15.00</p>
              <img className="gallery-card-rating" src="/assets/svg/stars.svg" />
            </div>
          </div>
          <div className="gallery-card">
            <div className="gallery-card-img">
              <img src="/assets/img/products/7.png" />
            </div>
            <div className="gallery-card-widget">
              <img className="btn" src="/assets/svg/refresh.svg" />
              <img className="btn" src="/assets/svg/like.svg" />
              <img className="btn" src="/assets/svg/in-cart.svg" />
            </div>
            <div className="gallery-card-name">Gray sofa</div>
            <div className="gallery-card-price">
              <p><span>$20.00</span> $15.00</p>
              <img className="gallery-card-rating" src="/assets/svg/stars.svg" />
            </div>
          </div>
          <div className="gallery-card">
            <div className="gallery-card-img">
              <img src="/assets/img/products/8.png" />
            </div>
            <div className="gallery-card-widget">
              <img className="btn" src="/assets/svg/refresh.svg" />
              <img className="btn" src="/assets/svg/like.svg" />
              <img className="btn" src="/assets/svg/in-cart.svg" />
            </div>
            <div className="gallery-card-name">Black chair</div>
            <div className="gallery-card-price">
              <p><span>$20.00</span> $15.00</p>
              <img className="gallery-card-rating" src="/assets/svg/stars.svg" />
            </div>
          </div>
        </div>
      </section>
      <section id="review">
        <h2 className="center white">WHAT PEOPLE SAY</h2>
        <h3 className="center white">Words Of Our Clients</h3>
          <div className="review-content">
            <div className="review-card">
              <img className="review-card-img" src="/assets/img/reviews/1.png" />
              <div className="review-card-content">
                <p>Bessie Cooper</p>
                <span>Communications Director</span>
                <div className="rating">4.0</div>
                <div className="comment">I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi</div>
              </div>
            </div>
            <div className="review-card">
              <img className="review-card-img" src="/assets/img/reviews/2.png" />
              <div className="review-card-content">
                <p>Anjelina Jolie</p>
                <span>Sales Manager</span>
                <div className="rating">4.0</div>
                <div className="comment">I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi</div>
              </div>
            </div>
            <div className="review-card">
              <img className="review-card-img" src="/assets/img/reviews/3.png" />
              <div className="review-card-content">
                <p>Brooklyn Simmons</p>
                <span>Public Relations Specialist</span>
                <div className="rating">4.0</div>
                <div className="comment">I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi</div>
              </div>
            </div>
            <div className="review-card">
              <img className="review-card-img" src="/assets/img/reviews/4.png" />
              <div className="review-card-content">
                <p>Bessie Cooper</p>
                <span>Communications Director</span>
                <div className="rating">4.0</div>
                <div className="comment">I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi</div>
              </div>
            </div>
          </div>
      </section>
      <section id="blog">
        <h2 className="center gold">RECENT ARTICLES</h2>
        <h3 className="center black">Read Our Latest Articles</h3>
        <div className="carousel" onMouseMove={(e) => {
          container = containers[1];
        }}>
          <img onClick={doBackSlide} src="/assets/svg/back.svg" className="btn arrow back" />
          <div className="carousel-content">
            <div className="carousel-card">
              <img src="/assets/img/articles/1.png" />
              <div className="carousel-card-date">
                <p>05</p>
                <span>May</span>
              </div>
              <div className="carousel-card-content">
                <div className="carousel-card-content-about">
                  <div><span className="author">John Doe</span></div>
                  <div><span className="comments">9</span></div>
                </div>
                <p className="carousel-card-name">Things to Know When Choosing
                  the Perfect Sofa</p>
                <a href="#" className="btn btn-light">See More Articles</a>
              </div>
            </div>
            <div className="carousel-card">
              <img src="/assets/img/articles/2.png" />
              <div className="carousel-card-date">
                <p>23</p>
                <span>Jun</span>
              </div>
              <div className="carousel-card-content">
                <div className="carousel-card-content-about">
                  <div><span className="author">John Doe</span></div>
                  <div><span className="comments">3</span></div>
                </div>
                <p className="carousel-card-name">Things to Know When Choosing
                  the Perfect Sofa</p>
                <a href="#" className="btn btn-light">See More Articles</a>
              </div>
            </div>
            <div className="carousel-card">
              <img src="/assets/img/articles/3.png" />
              <div className="carousel-card-date">
                <p>15</p>
                <span>May</span>
              </div>
              <div className="carousel-card-content">
                <div className="carousel-card-content-about">
                  <div><span className="author">John Doe</span></div>
                  <div><span className="comments">6</span></div>
                </div>
                <p className="carousel-card-name">Things to Know When Choosing
                  the Perfect Sofa</p>
                <a href="#" className="btn btn-light">See More Articles</a>
              </div>
            </div>
          </div>
          <img onClick={doForwardSlide} src="/assets/svg/forward.svg" className="btn arrow forward" />
        </div>
      </section>
      <footer id="contact-us">
        <div className="company-icon">
          <img id="footer-logo" src="/assets/svg/logo.svg" />
          <span className="company-name" id="footer-logo-name">interior</span>
        </div>
        <span id="footer-content-first">Join Now For Early Access</span>
        <span id="footer-content-seconds">Suspendisse eu velit est. Cras nec vestibulum 
          <br />quam. Donec tincidunt purus nec enim tincidunt, sit
        </span>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email address..." />
          <button className="subscribe-btn">SUBSCRIBE</button>
        </div>
      </footer>
    </>
  );
};