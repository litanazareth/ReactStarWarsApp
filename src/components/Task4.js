import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
//component for task4
export class Task4 extends Component{

    constructor(props){
        super(props);
        this.state={task4:[]}
    }

refreshList(){
    //fetching task
    fetch('http://localhost:29820/api/task4')
    .then(response=> response.json())
    .then(data => {
        this.setState({task4:data});
    } );

   


}

componentDidMount(){
    this.refreshList();
}

    render(){
const {task4} = this.state;


        return (
            <Table className="ResultTable" borderless hover center>
            <thead>
            <tr>
                    <td>What planet in Star Wars universe provided largest number of vehicle pilots?</td>
                </tr>

            </thead>
               <tbody>
               {task4.map(task=>
                    <tr> 
                    <td  className="Answer">{task.PeopleAndSpecies}</td>
                    </tr>)}
               </tbody>
               

            </Table>
        )
    }
}