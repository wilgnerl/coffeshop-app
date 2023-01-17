import { CoffeAttributes } from "./reducer";

export enum ActionTypes{
  UPDATE_CART = "UPDATE_CART",
  CHANGE_CART_ITEM = "CHANGE_CART_ITEM",
  REMOVE_ITEM_OF_CART = "REMOVE_ITEM_OF_CART",
  RESET_CART = "RESET_CART"
}

export function updateCartListAction(coffeToAdd: CoffeAttributes){
	return {
		type: ActionTypes.UPDATE_CART,
		payload: {
			coffeToAdd
		}
	};
}

export function changeCartItemAction(coffeId: string, type: "Increase" | "Decrease"){
	return {
		type: ActionTypes.CHANGE_CART_ITEM,
		payload:{
			coffeId,
			type
		}
	};
}

export function removeItemOfCartAction(coffeToRemove: CoffeAttributes){
	return {
		type: ActionTypes.REMOVE_ITEM_OF_CART,
		payload: {
			coffeToRemove
		}
	};
}

export function resetCartListAction(){
	return {
		type: ActionTypes.RESET_CART
	};
}
