import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import List from './List';
import Pagination from './Paginate';

// Search main page component.
const SearchPage = (props) => {
 const [input, setInput] = useState('');

 // This mehod called when type in search input field and take parameter as a string.
 const updateInput = async (input) => {
  const { allCurrentItems, setListItems } = props;
  const filtered = allCurrentItems.filter((item) => {
   return item.title.toLowerCase().includes(input.toLowerCase());
  });
  setInput(input);
  setListItems(filtered);
 };

 useEffect(() => {
  const { itemList, setListItems } = props;
  setListItems(itemList);
 }, []);
 return (
  <>
   <div className="headerContainer">
    <div className="headerLeftRow">
     <Pagination getItems={props.getItems} />
    </div>
    <div className="headerRightRow">
     <SearchBar input={input} onChange={updateInput} />
    </div>
   </div>
   <div className="listContainer">
    <List itemsList={props.itemList} />
   </div>
  </>
 );
};

export default SearchPage;
