"use client";

import { Item } from "@/components/item";
import { NewItem } from "@/components/new-item";
import { useState, useEffect } from "react";
import MealIdeas from "@/components/meal-idea";
import { getItems, addItem, removeItem } from "../../_services/shopping-list-services";
import { useUserAuth } from "../../_utils/auth-context";
import { Header } from "@/components/header";
import Nutrition from "@/components/nutrition";


export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null)

  useEffect(() => {
    if (user && user.uid){
      const loadItems = async () => {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
    
      };

    loadItems();

    }
  }, [user]);

  async function handleSubmit(item){
    try {
      // Add the item to the shopping list using the addItem function
      const newItemId = await addItem(user.uid, item);
  
      // Set the id of the new item
      const newItem = { ...item, id: newItemId };
  
      // Update the state of items to include the new item
      setItems(prevItems => [...prevItems, newItem]);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  }

  function handleItemSelect(item){
    let cleanItem = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    cleanItem = cleanItem.split(',')[0].trim();

    setSelectedItemName(cleanItem);
  }

  const handleRemoveItem = async (itemId) => {
    try {
        await removeItem(user.uid, itemId);
        setItems(prevItems => prevItems.filter(item => item.id !== itemId));
    } catch (error) {
        console.error('Failed to remove item:', error);
    }
};


return (
  <main className="flex flex-col min-h-screen">
    <Header/>
    <div className="flex flex-1 overflow-auto m-2">
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center">
          <NewItem onSubmit={(item) => handleSubmit(item)}/>
          <Item items={items} onItemSelect={handleItemSelect} onButtonClick={handleRemoveItem}/> 
        </div>
        <div className="flex space-x-4"> 
          <MealIdeas ingredient={selectedItemName}/>
          <div>
            <Nutrition ingredient={selectedItemName}/>
          </div>
        </div>
      </div>
    </div>
  </main>  
);
}
