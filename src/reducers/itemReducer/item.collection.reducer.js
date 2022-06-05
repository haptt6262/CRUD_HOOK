import { actionTypes } from '../../container'

const { ItemTypes } = actionTypes
const INITIAL_STATE = {
    list: [],
    isFetching: false,
    isError: false,
    message: ''
}

export default function itemCollectionReducer(state = INITIAL_STATE, { type, payload }) {
    console.log('type', type)
    console.log('payload', payload)
    switch (type) {
        case ItemTypes.FETCH_ITEMS_REQUEST:
            return {
                ...state,
                isFetching: true,
                isError: false,
                message: ''
            }
        case ItemTypes.FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                list: payload.list,
                isError: false
            }
        case ItemTypes.FETCH_ITEMS_FAILURE:
            return {
                ...state,
                isFetching: false,
                isError: true,
                message: payload.message
            }


        default:
            return state
    }
}