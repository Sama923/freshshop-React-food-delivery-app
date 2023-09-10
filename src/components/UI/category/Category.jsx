import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import "../../../styles/hero-section.css";

import productImg01 from "../../../assets/images/product_02.7.jpg"
import productImg02 from "../../../assets/images/product_01.2.jpg"

const categoryData =[
  {
    display: 'Fruits',
    imgUrl:productImg01

  },
  {
    display: 'Vegetables',
    imgUrl:productImg02

  }
  
]

const Category = () => {
  return (
<Container>
  <Row>
    <Col lg="12">
    <h3 className='Category__title'>Shop By Category</h3>

    </Col>
  </Row>
  <Row>
    {
      categoryData.map((item,index)=>(
        <Col lg="6" md="6">
          <div className="category__item">
            <div className="catory__image">
              <img className='circular--square' src={item.imgUrl} alt="category__item" />
            </div>
            <h5 className='item__style'>{item.display}</h5>
          </div>
        </Col>

      ))
    }
  </Row>
</Container>
  )
}

export default Category
