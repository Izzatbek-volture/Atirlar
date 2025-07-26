import React from 'react'

export default function Katalog() {
  return (
    <div>
      <div className="container-fluid py-4">
  <div className="row">
    <div className="col-md-3 mb-4">
      <div className="filter-sidebar">
        <h5>Фильтры</h5>
        <div className="mb-3">
          <label for="brands">Бренд</label>
          <select className="form-select mt-1">
            <option selected>Все бренды</option>
            <option>ACQUA DI PARMA</option>
            <option>AMOUAGE</option>
            <option>ANTONIO BANDERAS</option>
          </select>
        </div>

        <label for="priceRange" className="form-label">Стоимость</label>
        <input type="range" className="form-range" min="500" max="10000" id="priceRange" />

        <div className="mb-3 mt-3">
          <label className="form-label">Пол</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gender1" />
            <label className="form-check-label" for="gender1">Женские</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gender2" />
            <label className="form-check-label" for="gender2">Мужские</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gender3" />
            <label className="form-check-label" for="gender3">Унисекс</label>
          </div>
        </div>

        <div className="mb-3">
          <label for="notes">Ноты</label>
          <select className="form-select mt-1">
            <option selected>Все</option>
            <option>AGARWOOD</option>
            <option>AMBERWOOD</option>
          </select>
        </div>

        <button className="btn btn-outline-light btn-sm w-100 mt-3">Сбросить</button>
      </div>
    </div>

    
    <div className="col-md-9">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Каталог</h5>
        <div className="dropdown">
          <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
            По популярности
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">По популярности</a></li>
            <li><a className="dropdown-item" href="#">По рейтингу</a></li>
            <li><a className="dropdown-item" href="#">Сначала от дешевого</a></li>
            <li><a className="dropdown-item" href="#">Сначала от дорогого</a></li>
          </ul>
        </div>
      </div>

      
      <div className="row g-4">
        <div className="col-sm-6 col-md-4">
          <div className="product-card">
            <img src="./img/main.png" alt="perfume" />
            <p className="mt-2 mb-1">The devil is a loser by Mushfig</p>
            <div className="mb-2">
              <label>Объём мл:</label>
              <div className="btn-group btn-group-sm d-block mt-1">
                <button className="btn btn-outline-light">10</button>
                <button className="btn btn-outline-light">30</button>
                <button className="btn btn-outline-light">50</button>
                <button className="btn btn-outline-light">100</button>
              </div>
            </div>
            <p>Стоимость: <strong>2,400.00 ₽</strong></p>
            <button className="btn">В КОРЗИНУ</button>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="product-card">
            <img src="./img/main.png" alt="perfume" />
            <p className="mt-2 mb-1">The devil is a loser by Mushfig</p>
            <div className="mb-2">
              <label>Объём мл:</label>
              <div className="btn-group btn-group-sm d-block mt-1">
                <button className="btn btn-outline-light">10</button>
                <button className="btn btn-outline-light">30</button>
                <button className="btn btn-outline-light">50</button>
                <button className="btn btn-outline-light">100</button>
              </div>
            </div>
            <p>Стоимость: <strong>2,400.00 ₽</strong></p>
            <button className="btn">В КОРЗИНУ</button>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="product-card">
            <img src="./img/main.png" alt="perfume" />
            <p className="mt-2 mb-1">The devil is a loser by Mushfig</p>
            <div className="mb-2">
              <label>Объём мл:</label>
              <div className="btn-group btn-group-sm d-block mt-1">
                <button className="btn btn-outline-light">10</button>
                <button className="btn btn-outline-light">30</button>
                <button className="btn btn-outline-light">50</button>
                <button className="btn btn-outline-light">100</button>
              </div>
            </div>
            <p>Стоимость: <strong>2,400.00 ₽</strong></p>
            <button className="btn">В КОРЗИНУ</button>
          </div>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-sm-6 col-md-4">
          <div className="product-card">
            <img src="./img/main.png" alt="perfume" />
            <p className="mt-2 mb-1">The devil is a loser by Mushfig</p>
            <div className="mb-2">
              <label>Объём мл:</label>
              <div className="btn-group btn-group-sm d-block mt-1">
                <button className="btn btn-outline-light">10</button>
                <button className="btn btn-outline-light">30</button>
                <button className="btn btn-outline-light">50</button>
                <button className="btn btn-outline-light">100</button>
              </div>
            </div>
            <p>Стоимость: <strong>2,400.00 ₽</strong></p>
            <button className="btn">В КОРЗИНУ</button>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="product-card">
            <img src="./img/main.png" alt="perfume" />
            <p className="mt-2 mb-1">The devil is a loser by Mushfig</p>
            <div className="mb-2">
              <label>Объём мл:</label>
              <div className="btn-group btn-group-sm d-block mt-1">
                <button className="btn btn-outline-light">10</button>
                <button className="btn btn-outline-light">30</button>
                <button className="btn btn-outline-light">50</button>
                <button className="btn btn-outline-light">100</button>
              </div>
            </div>
            <p>Стоимость: <strong>2,400.00 ₽</strong></p>
            <button className="btn">В КОРЗИНУ</button>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="product-card">
            <img src="./img/main.png" alt="perfume" />
            <p className="mt-2 mb-1">The devil is a loser by Mushfig</p>
            <div className="mb-2">
              <label>Объём мл:</label>
              <div className="btn-group btn-group-sm d-block mt-1">
                <button className="btn btn-outline-light">10</button>
                <button className="btn btn-outline-light">30</button>
                <button className="btn btn-outline-light">50</button>
                <button className="btn btn-outline-light">100</button>
              </div>
            </div>
            <p>Стоимость: <strong>2,400.00 ₽</strong></p>
            <button className="btn">В КОРЗИНУ</button>
          </div>
        </div>
    </div>
      <div className="row g-4">
        <div className="col-sm-6 col-md-4">
          <div className="product-card">
            <img src="./img/main.png" alt="perfume" />
            <p className="mt-2 mb-1">The devil is a loser by Mushfig</p>
            <div className="mb-2">
              <label>Объём мл:</label>
              <div className="btn-group btn-group-sm d-block mt-1">
                <button className="btn btn-outline-light">10</button>
                <button className="btn btn-outline-light">30</button>
                <button className="btn btn-outline-light">50</button>
                <button className="btn btn-outline-light">100</button>
              </div>
            </div>
            <p>Стоимость: <strong>2,400.00 ₽</strong></p>
            <button className="btn">В КОРЗИНУ</button>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="product-card">
            <img src="./img/main.png" alt="perfume" />
            <p className="mt-2 mb-1">The devil is a loser by Mushfig</p>
            <div className="mb-2">
              <label>Объём мл:</label>
              <div className="btn-group btn-group-sm d-block mt-1">
                <button className="btn btn-outline-light">10</button>
                <button className="btn btn-outline-light">30</button>
                <button className="btn btn-outline-light">50</button>
                <button className="btn btn-outline-light">100</button>
              </div>
            </div>
            <p>Стоимость: <strong>2,400.00 ₽</strong></p>
            <button className="btn">В КОРЗИНУ</button>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="product-card">
            <img src="./img/main.png" alt="perfume" />
            <p className="mt-2 mb-1">The devil is a loser by Mushfig</p>
            <div className="mb-2">
              <label>Объём мл:</label>
              <div className="btn-group btn-group-sm d-block mt-1">
                <button className="btn btn-outline-light">10</button>
                <button className="btn btn-outline-light">30</button>
                <button className="btn btn-outline-light">50</button>
                <button className="btn btn-outline-light">100</button>
              </div>
            </div>
            <p>Стоимость: <strong>2,400.00 ₽</strong></p>
            <button className="btn">В КОРЗИНУ</button>
          </div>
        </div>
      </div>

      
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">4</a></li>
        </ul>
      </nav>
    </div>
  </div>
</div>
    </div>
  )
}
