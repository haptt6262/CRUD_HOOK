import { useDispatch, useSelector } from "react-redux"
import { ItemAction, AddItem, DeleteItem, UpdateItem } from '../actions'

export const useItem = () => {
    const dispatch = useDispatch()
    const list = useSelector(state => state.itemCollection.list)
    const isFetching = useSelector(state => state.itemCollection.isFetching)
    const isError = useSelector(state => state.itemCollection.isError)
    const message = useSelector(state => state.itemCollection.message)

    const handleFetchList = () => dispatch(ItemAction.fetchListRequest())
    const handleAddItem = (data) => dispatch(AddItem.addItemRequest(data))
    const handleDeleteItem = (data) => dispatch(DeleteItem.deleteItemRequest(data))
    const handleUpdateItem = (data) => dispatch(UpdateItem.updateItemRequest(data))

    return {
        list,
        isFetching,
        isError,
        message,
        handleFetchList,
        handleAddItem,
        handleDeleteItem,
        handleUpdateItem
    }
}