import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
//componenet for task2
export class Task2 extends Component{

    constructor(props){
        super(props);
        this.state={task2:[]}
    }

refreshList(){
    //fetching task
    fetch('http://localhost:29820/api/task2')
    .then(response=> response.json())
    .then(data => {
        this.setState({task2:data});
    } );

   


}

componentDidMount(){
    this.refreshList();
}

    render(){
const {task2} = this.state;


        return (
            <Table className="ResultTable" borderless hover center>
            <thead>
            <tr>
                    <td>What character appeared in most of the Star Wars films?</td>
                </tr>
            </thead>
               
<tbody>
{task2.map(task=>
                    <tr> 
                    <td  className="Answer">{task.MostAppearedCharacterinFilms}</td>
                    </tr>)}
</tbody>
            </Table>
        )
    }
}