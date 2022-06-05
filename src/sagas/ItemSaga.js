import { takeLatest, put } from 'redux-saga/effects'
import { ItemAction, AddItem, DeleteItem, UpdateItem } from '../actions'
import { actionTypes } from '../container'
import { itemApi } from '../api'

function* handleFetchListItems({ payload }) {
    try {
        const res = yield itemApi.fetchList()
        yield put(ItemAction.fetchListSuccess({
            list: res
        }))
    } catch (error) {
        yield put(ItemAction.fetchListFailure({
            message: error.message
        }))
    }
}
function* handleFetchAddItems({ payload }) {
    try {
        const res = yield itemApi.addItem(null, null, payload)
        yield put(AddItem.addItemSuccess(res))
        yield put(ItemAction.fetchListRequest())
    } catch (error) {
        yield put(AddItem.addItemFailure({
            message: error.message
        }))
    }
}
function* handleFetchDeleteItems({ payload }) {
    try {
        const res = yield itemApi.deleteItem(payload, null, null)
        yield put(DeleteItem.deleteItemSuccess(res))
        yield put(ItemAction.fetchListRequest())
    } catch (error) {
        yield put(DeleteItem.deleteItemFailure({
            message: error.message
        }))
    }
}
function* handleFetchUpdateItems({ payload }) {
    try {
        console.log(payload, "in saga");
        const res = yield itemApi.updateItem({ id: payload.id }, null, { name: payload.name })
        yield put(UpdateItem.updateItemSuccess(res))
        yield put(ItemAction.fetchListRequest())
    } catch (error) {
        yield put(UpdateItem.updateItemFailure({
            message: error.message
        }))
    }
}
const itemSaga = [
    takeLatest(actionTypes.ItemTypes.FETCH_ITEMS_REQUEST, handleFetchListItems),
    takeLatest(actionTypes.ItemTypes.CREATE_ITEM_REQUEST, handleFetchAddItems),
    takeLatest(actionTypes.ItemTypes.DELETE_ITEM_REQUEST, handleFetchDeleteItems),
    takeLatest(actionTypes.ItemTypes.UPDATE_ITEM_REQUEST, handleFetchUpdateItems),
]

export default itemSaga;