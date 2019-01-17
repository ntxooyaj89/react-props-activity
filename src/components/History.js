import React, {Component} from 'react';

class History extends Component {
    render(){
        
        let historyItems = [];
        for (let i = 0; i< this.props.history; i++){
            let item = this.props.history[i]
            let itemRow = (<tr key={i}>
                       <td>{i}</td>  
                       <td>{item.value}</td>
                       </tr>);
                       
        historyItems.push(itemRow);               
        }
        return (
            <div>
                <table>
                    <tbody>
                        {historyItems}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default History;