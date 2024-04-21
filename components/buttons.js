import Link from 'next/link';

export const ToShoppingList = () => {
    return (
        <Link className="border-2 border-purple-200 p-2 m-1 rounded-full" href="/shoppingList/shoppingPage">Your Shopping List</Link>
    );
  };

  export const ToMobileList = () => {
    return (
        <Link className="border-2 border-purple-200 p-2 m-1 rounded-full" href="/shoppingList/mobileFriendly">Mobile List</Link>
    );
  };