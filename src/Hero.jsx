import React from 'react'

export default function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="dark-overlay mx-auto" style={{ maxWidth: "700px" }}>
          <h2 className="fw-bold mb-4">
            Оптовая продажа люксовой парфюмерии
            с маржой до <span className="text-warning">100%</span> и доставкой по РФ и СНГ
          </h2>
          <p className="fs-4">В наличии более <span className="fw-bold text-light">500</span> ароматов</p>
        </div>
      </div>
      <div className="container py-5">
        <h3 className="mb-4">Популярные ароматы</h3>
        <div className="row g-4">


          <div className="col-md-4">
            <div className="product-card position-relative">
              <div className="text z-3">
                <h6>Для неё</h6>
                <h5>Victoria Secret Bombshell</h5>
                <button className="btn mt-3">В КОРЗИНУ</button>
              </div>
              <img className='position-absolute w-100 h-100 top-0 start-0' src="./img/section1.png" alt="" />
            </div>
          </div>


           <div className="col-md-4">
            <div className="product-card position-relative">
              <div className="text z-3">
                <h6>Для неё</h6>
                <h5>Victoria Secret Bombshell</h5>
                <button className="btn mt-3">В КОРЗИНУ</button>
              </div>
              <img className='position-absolute w-100 h-100 top-0 start-0' src="./img/section2.png" alt="" />
            </div>
          </div>


           <div className="col-md-4">
            <div className="product-card position-relative">
              <div className="text z-3">
                <h6>Для неё</h6>
                <h5>Victoria Secret Bombshell</h5>
                <button className="btn mt-3">В КОРЗИНУ</button>
              </div>
              <img className='position-absolute w-100 h-100 top-0 start-0' src="./img/section3.png" alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
