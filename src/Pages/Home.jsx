import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import Helmet from "../components/Helmet/Helmet"
//import { Helmet } from 'react-helmet-async'
import "../../src/styles/hero-section.css";
import "../../src/styles/home.css";
import heroImage from "../assets/images/heroImage.jpg"
import { Link } from "react-router-dom";
//import Category from '../components/UI/category/Category';
import featureImg01 from "../../src/assets/images/service-01.png"
import featureImg02 from "../../src/assets/images/service-02.png"
import featureImg03 from "../../src/assets/images/service-03.png"
import products from '../assets/fake-data/products';
import foodCategoryImg01 from '../assets/images/Category01.png'
import foodCategoryImg02 from '../assets/images/Category02.png'
import ProductCard from '../components/UI/product-card/ProductCard';

import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";


const featureData = [
  {
    title: 'Quick Delivery',
    imageUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."

  },
  {
    title: 'Super Dine In',
    imageUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."

  },
  {
    title: 'Easy Pick Up',
    imageUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."

  }
]

const Home = () => {

  const [category, setCategory] = useState('ALL')
  const [AllProducts, setAllProducts] = useState(products)

  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products)
    }

    if (category === 'VEGETABLES') {
      const filteredProducts = products.filter(item => item.category === 'Vegetables')

      setAllProducts(filteredProducts)

    }

    if (category === 'FRUITS') {
      const filteredProducts = products.filter(item => item.category === 'fruits')

      setAllProducts(filteredProducts)

    }
  }, [category])

  return (
    <div>
      <Helmet title='Home'>
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero__content">
                  <h5 className='mb-3'>Best App to Take Fresh Foods</h5>
                  <h1 className='mb-4 hero__title'> <span>HUNGRY?</span> wait <br /> food at<span> your door </span></h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                    magni delectus tenetur autem, sint veritatis!
                  </p>

                  <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                    <button className="order__btn d-flex align-items-center justify-content-between">
                      Order now <i className="ri-arrow-right-s-line"></i>
                    </button>

                    <button className="all__foods-btn">
                      <Link to="/foods">See all foods</Link>
                    </button>
                  </div>                </div>
              </Col>
              <Col lg="6" md="6">
                <div className="hero_img">
                  <img src={heroImage} alt="" className='w-100' />
                </div>

              </Col>
            </Row>
          </Container>
        </section>


        <section>

          <Container>
            <Row>
              <Col lg="12" className='text center pt-5'>
                <h5 className='feature__subtitle mb-4' >What We Serve</h5>
                <h2 className='feature__title' >Just Sit Back At Home</h2>
                <h2 className='feature__title' >
                  We Will <span>Take Care</span>
                </h2>
                <p className='mb-1 mt-4 feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, repellat.</p>

              </Col>
            </Row>
          </Container>
        </section>
        {/*<section>
          <Category />
  </section>*/}


        <section>
          <Container>
            <Row className='pt-5'>
              <Col lg="12" className='text-center'>
                <h2>Populer Foods</h2>
              </Col>
              <Col lg="12">
                <div className="food__category d-flex align-items-center justify-content-center gap-4">
                  <button className={`all__btn ${category === 'ALL' ? 'foodBtnActive' : ''}`} onClick={() =>
                    setCategory('ALL')}>All</button>
                  <button className={`d-flex align-items-center gap-2' ${category === 'VEGETABLES' ? 'foodBtnActive' : ''}`}
                    onClick={() => setCategory('VEGETABLES')}><img src={foodCategoryImg01} alt="" />vegetables </button>


                  <button className={`d-flex align-items-center gap-2' ${category === 'FRUITS' ? 'foodBtnActive' : ''}`}
                    onClick={() =>
                      setCategory('FRUITS')}
                  ><img src={foodCategoryImg02} alt="" />fruits</button>

                </div>


              </Col>
              {
                AllProducts.map(item => (
                  <Col lg="3" md="4" key={item.id} className='mt-5'>
                    <ProductCard item={item} />

                  </Col>
                ))
              }

            </Row>
          </Container>
        </section>



        <section className="why__choose-us">
          <Container>
            <Row className='pt-5'>
              <Col lg="6" md="6">
                <img src={whyImg} alt="why-tasty-treat" className="w-100" />
              </Col>

              <Col lg="6" md="6">
                <div className="why__tasty-treat">
                  <h2 className="tasty__treat-title mb-4">
                    Why <span>Fresh Shop?</span>
                  </h2>
                  <p className="tasty__treat-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum, minus. Tempora reprehenderit a corporis velit,
                    laboriosam vitae ullam, repellat illo sequi odio esse iste
                    fugiat dolor, optio incidunt eligendi deleniti!
                  </p>

                  <ListGroup className="mt-4">
                    <ListGroupItem className="border-0 ps-0">
                      <p className=" choose__us-title d-flex align-items-center gap-2 ">
                        <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                        foods
                      </p>
                      <p className="choose__us-desc">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Quia, voluptatibus.
                      </p>
                    </ListGroupItem>

                    <ListGroupItem className="border-0 ps-0">
                      <p className="choose__us-title d-flex align-items-center gap-2 ">
                        <i class="ri-checkbox-circle-line"></i> Quality support
                      </p>
                      <p className="choose__us-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui, earum.
                      </p>
                    </ListGroupItem>

                    <ListGroupItem className="border-0 ps-0">
                      <p className="choose__us-title d-flex align-items-center gap-2 ">
                        <i class="ri-checkbox-circle-line"></i>Order from any
                        location{" "}
                      </p>
                      <p className="choose__us-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui, earum.
                      </p>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row className='pt-5'>

              {
                featureData.map((item, index) =>
                  <Col lg="4" md="4" key={index}>
                    <div className="feature__item px-5 py-3">
                      <img src={item.imageUrl} alt="feature-img" className='w-50' />
                      <h5 className='fw-bold text-center p-2'>{item.title}</h5>
                      <p className='text-center'>{item.desc}</p>

                    </div>
                  </Col>

                )
              }

            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row className='pt-5'>
              <Col lg="6" md="6">
                <div className="testimonial ">
                  <h2 className="testimonial__title mb-4">
                    What Our <span>Customers</span> are Saying
                  </h2>
                  {/*<p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
            </p>*/}

                  <TestimonialSlider />
                </div>
              </Col>

              <Col lg="6" md="6">
                <img src={networkImg} alt="testimonial-img" className="w-100" />
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  )
}

export default Home
