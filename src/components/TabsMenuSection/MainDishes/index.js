import React from "react";

// Styles

import "./../Appetisers/style.scss";

//-------------

export const MainDishes = (props) => {
  const { list } = props;

  return (
    <div className="appetisers">
      {list.map((item, name) => {
        return (
          <div key={name} >
            <div className="appetisers__item">
              <h4>{item.name} </h4>
              <p>
                <span>&#36;</span>
                {item.price}
              </p>
            </div>
            <p>{item.description}</p>
          </div>
        )
      })}
    </div>
  );
};
