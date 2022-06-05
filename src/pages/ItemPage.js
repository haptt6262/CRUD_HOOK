import React, { useEffect, useState } from 'react'
import { useItem } from '../hooks'


export default function Home() {
    const {
        isError,
        handleFetchList,
        isFetching,
        list,
        message,
        handleAddItem,
        handleDeleteItem,
        handleUpdateItem
    } = useItem()

    const [inputName, setInputName] = useState('')
    const [id, setId] = useState()
    console.log(inputName, id, "in page");



    useEffect(() => {
        handleFetchList()
    }, [])

    if (isFetching) {
        return (
            <p>Loading</p>
        )
    }
    if (isError) {
        return (
            <p>{message}</p>
        )
    }
    let ListItem = []
    ListItem = list.map((item, key) => {
        return (
            <tr key={key}>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>
                    <button onClick={() => { handleDeleteItem({ id: item.id }) }}>DELETE</button>
                </th>
                <th>
                    <button onClick={(e) => { setInputName(item.name); setId(item.id) }}>SELECT</button>
                </th>
            </tr>
        )
    })
    return (
        <>
            <div>Homepage</div>
            <div>
                <input type="text" value={inputName || ''} onChange={(e) => { setInputName(e.target.value) }} />
                <button onClick={() => { handleAddItem({ name: inputName }) }}>ADD</button>
                <button onClick={() => { handleUpdateItem({ id: id, name: inputName }) }}>UPDATE</button>

            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {ListItem}
                </tbody>
            </table>
        </>
    )
}