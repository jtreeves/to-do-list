import './App.css'
import ListItem from './components/ListItem'

function App() {
    
    const doThis1 = 'Learn React'
    const doThis2 = '???'
    const doThis3 = 'Profit'

    const list = [doThis1, doThis2, doThis3]

    const listItems = list.map((eachItem, index) => {
        return <ListItem doThis={eachItem} key={`list-item-$${index}`} />
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