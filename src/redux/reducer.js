
import { combineReducers } from 'redux'
import action from './action'

let initial = {
  items: [
    // {
    //   name: 'ยังคงสวยงาม - Tilly birds',
    //   price: '$2.99'
    // }
  ],
}

const itemsReducer = (state = initial, action) => {
  switch(action.type) {
    case 'ADD':
      return {
        ...state, 
        items: [...state.items, action.item]
        // items: state.items.push(action.item),
      };
      // case 'REMOVE':
      //   // let newItem = [
      //   //   ...state.items.slice(0, action.item),
      //   //   ...state.items.slice(action.item + 1)
      //   // ]
      //   // console.log(newItem, 999)
      // return {
      //   ...state, 
      //   // items: [...state.items]
      //   // items: [
      //   //   ...state.items.filter(x => x.id === '')
      //   // ]
      //   items: state.items.map(
      //     (item, i) => i === action.inn ? {...item, isSelected: !item.isSelected}
      //                             : item
      // )
      //   // items: state.items.push(action.item),
      // };
    default: return state;
  }
}

const rootReducer = combineReducers({
  itemsReducer,
})

export default rootReducer