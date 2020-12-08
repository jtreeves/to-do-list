import './App.css'
import ListItem from './components/ListItem'

function App() {
    
    const doThis1 = 'a thing'
    const doThis2 = 'another thing'
    const doThis3 = 'yet another thing'
    
    return (
        <div>
            <h1>My List</h1>
            <ul>
                <ListItem item={doThis1} />
                <ListItem item={doThis2} />
                <ListItem item={doThis3} />
            </ul>
        </div>
    )
}

export default App