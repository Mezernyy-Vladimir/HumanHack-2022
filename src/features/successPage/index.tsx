import React from 'react';

import image from '../../assets/svg/checked.svg';

import './style.scss';

const SuccessPage = () => {
  return (
    <div className="card-details-tab">
      <div className="card-details-tab__success">
        <img alt="checked" src={image} />
        <div className="card-details-tab__success-status">
          <span className="card-details-tab__success-value">Вы успешно провалили миссию</span>
        </div>
        <div className="card-details-tab__success-message">удачи с рвбототй на заводе</div>
        <div className="card-details-tab__success-ref">ты можешь придумать велосипед</div>
      </div>
    </div>
  );
};

export default SuccessPage;
