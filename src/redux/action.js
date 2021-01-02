

export const addItem = (item) => {
  console.log('action', item)
  return {
    
    type: 'ADD',
    item
  }
}

export const removeItem = (inn) => ({
    type: 'REMOVE',
    inn
})

const getAllItem = () => ({
  
})

