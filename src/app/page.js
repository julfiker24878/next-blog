import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="assets/images/favicon.png" alt="fish-and-aquatic-pets-logo" class="img-fluid" width="65"/>

            </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blog.html">Blog</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Aquarium Cleaners</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Decor</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Heaters & Chillers</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Hoods</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Hydrometers</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Lights</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Pumps & Filters</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Stands</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Substrate</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Test Kits</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Thermometers</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Water Treatments</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium & Fish Bowls</a></li>
                  <li><a class="dropdown-item" href="#">Automatic Feeders</a></li>
                  <li><a class="dropdown-item" href="#">Breeding Tanks</a></li>
                  <li><a class="dropdown-item" href="#">Food</a></li>
                  <li><a class="dropdown-item" href="#">Medication & Health Supplies</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact Us</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <section id="slider" class="slider">
          <div class="row">
            <div class="col-md-12">
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active one">
                    <h2>Let the scaly world come to you</h2>
                    <img src="assets/images/slider/1.jpeg" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item two">
                    <h2>Build a fishy empire</h2>
                    <img src="assets/images/slider/2.jpeg" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item three">
                    <h2>The perfect solution for a peaceful and relaxing environment</h2>
                    <img src="assets/images/slider/4.jpeg" class="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
      </section>
      <section id="blog" class="blog">
        <div class="container">
          <h1 class="text-center">Read Our Blog</h1>
          
          <div class="row">
            <div class="col-md-3 cats">
              <h5>Seach by Category</h5>
              <div class="category">
                <ul>
                  <li><a class="dropdown-item" href="#">Aquarium Cleaners</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Decor</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Heaters & Chillers</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Hoods</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Hydrometers</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Lights</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Pumps & Filters</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Stands</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Substrate</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Test Kits</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Thermometers</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium Water Treatments</a></li>
                  <li><a class="dropdown-item" href="#">Aquarium & Fish Bowls</a></li>
                  <li><a class="dropdown-item" href="#">Automatic Feeders</a></li>
                  <li><a class="dropdown-item" href="#">Breeding Tanks</a></li>
                  <li><a class="dropdown-item" href="#">Food</a></li>
                  <li><a class="dropdown-item" href="#">Medication & Health Supplies</a></li>
                </ul>
              </div>
            </div>

            <div class="col-md-3">
              <div class="content">
                <div class="card">
                  <div class="card-header">
                    <div class="thumbnail">
                      <img src="uploaded/blogs/blog1.jpeg" class="img-fluid" alt=""/>
                    </div>
                    <div class="author-meta">
                      <span>Posted at 20 November 2021</span>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="post-content">
                      <h3>Post-03</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora impedit ipsa consequuntur itaque explicabo cumque excepturi mollitia qui, inventore quas sit delectus repudiandae autem fugiat.</p>
                      <a href="single.html" class="btn btn-success">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="content">
                <div class="card">
                  <div class="card-header">
                    <div class="thumbnail">
                      <img src="uploaded/blogs/blog1.jpeg" class="img-fluid" alt=""/>
                    </div>
                    <div class="author-meta">
                      <span>Posted at 20 November 2021</span>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="post-content">
                      <h3>Post-02</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora impedit ipsa consequuntur itaque explicabo cumque excepturi mollitia qui, inventore quas sit delectus repudiandae autem fugiat.</p>
                      <a href="single.html" class="btn btn-success">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="content">
                <div class="card">
                  <div class="card-header">
                    <div class="thumbnail">
                      <img src="uploaded/blogs/blog1.jpeg" class="img-fluid" alt=""/>
                    </div>
                    <div class="author-meta">
                      <span>Posted at 20 November 2021</span>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="post-content">
                      <h3>Post-01</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora impedit ipsa consequuntur itaque explicabo cumque excepturi mollitia qui, inventore quas sit delectus repudiandae autem fugiat.</p>
                      <a href="single.html" class="btn btn-success">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <div class="row">
            <div class="col-md-3">
            </div>

            <div class="col-md-3">
              <div class="content">
                <div class="card">
                  <div class="card-header">
                    <div class="thumbnail">
                      <img src="uploaded/blogs/blog1.jpeg" class="img-fluid" alt=""/>
                    </div>
                    <div class="author-meta">
                      <span>Posted at 20 November 2021</span>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="post-content">
                      <h3>Post-03</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora impedit ipsa consequuntur itaque explicabo cumque excepturi mollitia qui, inventore quas sit delectus repudiandae autem fugiat.</p>
                      <a href="single.html" class="btn btn-success">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="content">
                <div class="card">
                  <div class="card-header">
                    <div class="thumbnail">
                      <img src="uploaded/blogs/blog1.jpeg" class="img-fluid" alt=""/>
                    </div>
                    <div class="author-meta">
                      <span>Posted at 20 November 2021</span>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="post-content">
                      <h3>Post-02</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora impedit ipsa consequuntur itaque explicabo cumque excepturi mollitia qui, inventore quas sit delectus repudiandae autem fugiat.</p>
                      <a href="single.html" class="btn btn-success">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="content">
                <div class="card">
                  <div class="card-header">
                    <div class="thumbnail">
                      <img src="uploaded/blogs/blog1.jpeg" class="img-fluid" alt=""/>
                    </div>
                    <div class="author-meta">
                      <span>Posted at 20 November 2021</span>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="post-content">
                      <h3>Post-01</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora impedit ipsa consequuntur itaque explicabo cumque excepturi mollitia qui, inventore quas sit delectus repudiandae autem fugiat.</p>
                      <a href="single.html" class="btn btn-success">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section id="banner" class="banner">
        <div class="row">
          <div class="col-md-12">
            <h2>Fish and Aquatic Pets</h2>
          </div>
        </div>
      </section>
      <section id="best-seller" class="best-seller">
        <div class="container">
          <div class="row">
            <h2>Best Selling Products</h2>

            <div class="col-md-4">
              <div class="content">
                <div class="card">
                  <div class="card-header">
                    <div class="thumbnail">
                      <img src="uploaded/blogs/blog1.jpeg" class="img-fluid" alt=""/>
                    </div>
                    <div class="author-meta">
                      <span>Posted at 20 November 2021</span>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="post-content">
                      <h3>Post-03</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora impedit ipsa consequuntur itaque explicabo cumque excepturi mollitia qui, inventore quas sit delectus repudiandae autem fugiat.</p>
                      <a href="single.html" class="btn btn-success">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="content">
                <div class="card">
                  <div class="card-header">
                    <div class="thumbnail">
                      <img src="uploaded/blogs/blog1.jpeg" class="img-fluid" alt=""/>
                    </div>
                    <div class="author-meta">
                      <span>Posted at 20 November 2021</span>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="post-content">
                      <h3>Post-02</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora impedit ipsa consequuntur itaque explicabo cumque excepturi mollitia qui, inventore quas sit delectus repudiandae autem fugiat.</p>
                      <a href="single.html" class="btn btn-success">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="content">
                <div class="card">
                  <div class="card-header">
                    <div class="thumbnail">
                      <img src="uploaded/blogs/blog1.jpeg" class="img-fluid" alt=""/>
                    </div>
                    <div class="author-meta">
                      <span>Posted at 20 November 2021</span>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="post-content">
                      <h3>Post-01</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora impedit ipsa consequuntur itaque explicabo cumque excepturi mollitia qui, inventore quas sit delectus repudiandae autem fugiat.</p>
                      <a href="single.html" class="btn btn-success">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <footer id="footer" class="footer">
        <div class="container">
          <div class="row">

            <div class="col-md-3">
              <div class="about">
                <a href="#"><img src="assets/images/favicon.png" width="100" class="img-fluid" alt=""/>Fish & Aquatic Pets</a>
              </div>
            </div>

            <div class="col-md-3">
              <div class="links">
                <h5>Top Categories</h5>
                <ul>
                  <li><a href="#">Aquarium Cleaners</a></li>
                  <li><a href="#">Aquarium Decor</a></li>
                  <li><a href="#">Aquarium Heaters & Chillers</a></li>
                  <li><a href="#">Aquarium Hoods</a></li>
                  <li><a href="#">Aquarium Hydrometers</a></li>
                </ul>
              </div>
            </div>

            <div class="col-md-3">
              <div class="links">
                <h5>Latest Blogs</h5>
                <ul>
                  <li><a href="#">Link 01</a></li>
                  <li><a href="#">Link 02</a></li>
                  <li><a href="#">Link 03</a></li>
                  <li><a href="#">Link 04</a></li>
                  <li><a href="#">Link 05</a></li>
                </ul>
              </div>
            </div>

            <div class="col-md-3">
              <div class="links">
                <h5>Useful Links</h5>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Disclaimer</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>

          </div>
          <hr/>
          <div class="row">
            <div class="credit">
              <p>Copyright © 2021 - <strong>Fish And Aquatic Pets</strong> - All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
