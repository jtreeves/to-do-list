import './App.css'
import ListItem from './components/ListItem'
import React, { useState } from 'react'

function App() {
    const firstItem = 'Learn React'
    const secondItem = '???'
    const thirdItem = 'Profit'
    const [list, setList] = useState([firstItem, secondItem, thirdItem])
    const listItems = list.map((eachItem, index) => {
        return <ListItem doThis={eachItem} key={`item-${index}`} />
    })

    const eliminateFirst = () => {
        const deleteFirst = list.splice(1,(list.length - 1))
        setList(deleteFirst)
    }
    
    return (
        <div>
            <h1>My List</h1>
            <ul>
                {listItems}
            </ul>
            <button onClick={eliminateFirst}>Eliminate First Item</button>
        </div>
    )
}

export default App