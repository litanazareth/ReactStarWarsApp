import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
//component for task 3
export class Task3 extends Component{

    constructor(props){
        super(props);
        this.state={task3:[]}
    }

refreshList(){
    //fetching task
    fetch('http://localhost:29820/api/task3')
    .then(response=> response.json())
    .then(data => {
        this.setState({task3:data});
    } );

   


}

componentDidMount(){
    this.refreshList();
}

    render(){
const {task3} = this.state;


        return (
            <Table className="ResultTable" borderless hover center>
            <thead>
            <tr>
                    <td>What species (i.e. characters that belong to certain species) appeared in the most number of Star Wars films?</td>
                </tr>
            </thead>
                
<tbody>
{task3.map(task=>
                    <tr> 
                    <td className="Answer">{task.MostAppearedSpeciesinFilms}</td>
                    </tr>)}

</tbody>
                
            </Table>
        )
    }
}