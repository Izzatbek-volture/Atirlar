import React from 'react'

export default function Navbar() {
  return (
<div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="../public/img/logo1.png" alt="Логотип" className="me-2" />
          ПАРФЮМ ПО НОТАМ
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item me-3">
              <a className="btn btn-outline-light" href="#">Каталог</a>
            </li>
            <li className="nav-item me-3">
              <input className="form-control" type="search" placeholder="Найти парфюм.." />
            </li>
          </ul>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item text-white me-3">Ваш город: Москва</li>
            <li className="nav-item"><a className="nav-link" href="#">Бонусы</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Документация</a></li>
            <li className="nav-item"><a className="nav-link" href="#">О нас</a></li>
            <li className="nav-item text-white me-3"><i className="bi bi-telephone"></i> 7(937) 136 - 77 - 66</li>
            <li className="nav-item position-relative">
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}
