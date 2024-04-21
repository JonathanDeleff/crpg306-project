"use client";
import { useState } from "react";




export const Item = ({items, onItemSelect, onButtonClick}) => {
  
  const [sortBy, setSortBy] = useState("name")
  
  const getSortedItems = () => {
    return [...items].sort((a, b) => {

      const valueA = a[sortBy].toLowerCase(); 
      const valueB = b[sortBy].toLowerCase();
      
      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
      return 0;
    });
  };

  const getButtonClass = (buttonSortBy) => {
    return `m-1 p-2 ${
      sortBy === buttonSortBy ? "bg-blue-500" : "bg-sky-300"
    } text-black font-bold py-2 px-4 rounded mr-2 hover:bg-blue-400`;
  };


    
  const sortedItems = getSortedItems();

  return (
    <div>
      <div>
      <label>Sort by: </label>
      <button
          className={getButtonClass("name")}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={getButtonClass("category")}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>
      
        
      <ul>
        {sortedItems.map((item, index) => (
          <li
            key={index}
            className="item-list cursor-pointer flex flex-col border-2 border-sky-300 p-2 m-2 hover:bg-sky-500 relative" 
            onClick={() => onItemSelect(item)}
          >
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold capitalize">{item.name}</p>
              <div>Buy {item.quantity} - {item.category}</div>
            </div>
            <button className="absolute top-0 right-0 m-2 border-2 border-sky-300" onClick={(e) => {
              e.stopPropagation(); 
              onButtonClick(item.id);
            }}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
