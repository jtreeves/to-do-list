import './App.css'
import ListItem from './components/ListItem'

function App() {
    const firstItem = 'Learn React'
    const secondItem = '???'
    const thirdItem = 'Profit'
    const list = [firstItem, secondItem, thirdItem]
    const listItems = list.map((eachItem, index) => {
        return <ListItem doThis={eachItem} key={`item-${index}`} />
    })
    
    return (
        <div>
            <h1>My List</h1>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default App