import { createAction } from "@reduxjs/toolkit"
import { actionTypes } from "../container"



export const ItemAction = {
    fetchListRequest: createAction(actionTypes.ItemTypes.FETCH_ITEMS_REQUEST),
    fetchListSuccess: createAction(actionTypes.ItemTypes.FETCH_ITEMS_SUCCESS),
    fetchListFailure: createAction(actionTypes.ItemTypes.FETCH_ITEMS_FAILURE)
}

export const AddItem = {
    addItemRequest: createAction(actionTypes.ItemTypes.CREATE_ITEM_REQUEST),
    addItemSuccess: createAction(actionTypes.ItemTypes.CREATE_ITEM_SUCCESS),
    addItemFailure: createAction(actionTypes.ItemTypes.CREATE_ITEM_FAILURE)
}
export const DeleteItem = {
    deleteItemRequest: createAction(actionTypes.ItemTypes.DELETE_ITEM_REQUEST),
    deleteItemSuccess: createAction(actionTypes.ItemTypes.DELETE_ITEM_SUCCESS),
    deleteItemFailure: createAction(actionTypes.ItemTypes.DELETE_ITEM_FAILURE)
}
export const UpdateItem = {
    updateItemRequest: createAction(actionTypes.ItemTypes.UPDATE_ITEM_REQUEST),
    updateItemSuccess: createAction(actionTypes.ItemTypes.UPDATE_ITEM_SUCCESS),
    updateItemFailure: createAction(actionTypes.ItemTypes.UPDATE_ITEM_FAILURE)
}