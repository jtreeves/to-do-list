// FUNCTION APPROACH
function ListItem(props) {
    return (
        <div>
            <li>{props.doThis}</li>
        </div>
    )
}

// CLASS APPROACH
// import React, { Component } from 'react'

// class ListItem extends Component {
//     render() {
//         return (
//             <div>
//                 <li>{this.props.doThis}</li>
//             </div>
//         )
//     }
// }

export default ListItem