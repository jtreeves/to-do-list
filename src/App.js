import './App.css'
import ListItem from './components/ListItem'
import React, { useState } from 'react'

function App() {
    const firstItem = 'Learn React'
    const secondItem = '???'
    const thirdItem = 'Profit'
    const [list, setList] = useState([firstItem, secondItem, thirdItem])
    const [newItem, addItem] = useState()
    
    const deleteFirst = () => {
        const shorterList = list.splice(1,(list.length - 1))
        setList(shorterList)
    }

    const addLast = () => {
        const longerList = [...list, newItem]
        setList(longerList)
    }
    
    const listItems = list.map((eachItem, index) => {
        return <ListItem doThis={eachItem} key={`item-${index}`} />
    })

    return (
        <div>
            <h1>My List</h1>
            <ul>
                {listItems}
            </ul>
            <input
                type='text'
                name='newItem'
                onChange={(event) => addItem(event.target.value)}
            />
            <button onClick={addLast}>Add Item</button>
            <button onClick={deleteFirst}>Delete Item</button>
        </div>
    )
}

export default App