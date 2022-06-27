//defaultState is the initial state of the cartReducer
let defaultState = {
    //this is the initial state of the cart
    selectedItems: {items: [], restaurantName: ''}
}

//cartReducer is a function that takes in the current state and an action
let cartReducer = (state = defaultState, action) => {
    //switch statement is used to determine what action to take
    switch (action.type) {
        //if the action is ADD_TO_CART, then we add the item to the cart
        case 'ADD_TO_CART': {
            //we create a new object that is a copy of the current state
            let newState = {...state};
            newState.selectedItems = {
                items: [...newState.selectedItems.items, action.payload],
                restaurantName: action.payload.restaurantName, 
                }
            //we return the new state and console.log the new state
            console.log(newState, "ADD🍕")
            return newState;
            }
        //if the action is REMOVE_FROM_CART, then we remove the item from the cart
        case 'REMOVE_FROM_CART': {
            let newState = {...state};
            newState.selectedItems = {
                items: newState.selectedItems.items.filter(item => item.title !== action.payload.title),
                // restaurantName: newState.selectedItems.restaurantName,
                restaurantName: action.payload.restaurantName,
                }
            console.log(newState, "REMOVE🍔")
            return newState;
            }
            //default case is used to return the current state
            default: 
                return state;
        }
}

export default cartReducer;