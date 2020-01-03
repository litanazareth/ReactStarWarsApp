import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
//component for task 1
export class Task1 extends Component{

    constructor(props){
        super(props);
        this.state={task1:[]}
    }

refreshList(){
    //fetching task
    fetch('http://localhost:29820/api/task1')
    .then(response=> response.json())
    .then(data => {
        this.setState({task1:data});
    } );

   


}

componentDidMount(){
    this.refreshList();
}

    render(){
const {task1} = this.state;


        return (
            <Table className="ResultTable" borderless hover center>
            <thead>
            <tr>
                    <td>Which of all Star Wars movies has the longest opening crawl?</td>
                </tr>
            </thead>
               <tbody>
               {task1.map(task=>
                    <tr> 
                    <td  className="Answer">{task.LongestOpeningCrawl}</td>
                    </tr>)}
                   </tbody> 

                

            </Table>
        )
    }
}