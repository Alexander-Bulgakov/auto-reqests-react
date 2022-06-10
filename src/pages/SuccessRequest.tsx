import { toJS } from "mobx";
import React from "react";
import { myBrand } from "../store/selectBrand.store";
import './SuccessRequest.scss';
import Success from '../icons/Success.svg';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';



const SuccessRequestPage = () => {
  console.log(toJS(myBrand.successObject));
  return(
    <div className="success-container">
      <div className="success-container__header">
        <img src={Success} alt="" className="success-img"/>
        <h1>Заявка №{myBrand.successObject.id}</h1>
      </div>
      {/* <div className="success-container__description"> */}
        <p className="success-description">Автомобиль: {myBrand.successObject.brand} {myBrand.successObject.model}</p>
        <p className="success-description">Дата заявки: { new Date(myBrand.successObject.date).toLocaleDateString()}</p>
        <Link to="/">
          <Button variant="contained">К списку заявок</Button>
        </Link>
      </div>
    // </div>
  )
}
export default SuccessRequestPage;