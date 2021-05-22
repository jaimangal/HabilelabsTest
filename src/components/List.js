import React from 'react';

// Items list component.
const List = ({ itemsList = [] }) => {
 return (
  <>
   {itemsList &&
    itemsList.map((data) => {
     if (data) {
      return (
       <div className="listRow" key={data.title}>
        <div className="imgBox">
         <img
          src="https://static.toiimg.com/thumb/msid-82790905,imgsize-202661,width-400,resizemode-4/82790905.jpg"
          alt="logo"
          width="90px"
          height="90px"
         />
        </div>
        <div className="imgBox">{data.title}</div>
       </div>
      );
     }
     return null;
    })}
  </>
 );
};

export default List;
