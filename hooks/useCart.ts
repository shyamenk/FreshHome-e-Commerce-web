import {useReducer} from 'react'

type CartState = {
  items: {id: number; name: string; price: number}[]
  total: number
}

type CartAction =
  | {type: 'ADD_ITEM'; payload: {id: number; name: string; price: number}}
  | {type: 'REMOVE_ITEM'; payload: number}
  | {type: 'CLEAR_CART'}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Add the item to the cart and update the total
      return {
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      }
    case 'REMOVE_ITEM':
      // Remove the item from the cart and update the total
      const newItems = state.items.filter(item => item.id !== action.payload)
      return {
        items: newItems,
        total:
          state.total - newItems.reduce((acc, item) => acc + item.price, 0),
      }
    case 'CLEAR_CART':
      // Clear the cart and reset the total to 0
      return {
        items: [],
        total: 0,
      }
    default:
      return state
  }
}

const initialState = {
  items: [],
  total: 0,
}
export const useCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addItem = (item: {id: number; name: string; price: number}) => {
    dispatch({type: 'ADD_ITEM', payload: item})
  }

  const removeItem = (id: number) => {
    dispatch({type: 'REMOVE_ITEM', payload: id})
  }

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'})
  }
  return {
    items: state.items,
    addItem,
    removeItem,
    clearCart,
  }
}
