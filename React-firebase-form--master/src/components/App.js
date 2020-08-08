import React,{useState , Component} from 'react';
import { Table,Input, Button, Form, Header, Grid, GridColumn ,Segment} from 'semantic-ui-react';
import './App.css'
import {base} from '../base'
import Axios from 'axios';
let count=0;
var newArray = []
class App extends Component {

    constructor(props)
    {
        super (props);

        this.state={
        num:{},
        name:"",
        number:"",
        data:"",
        filtered:"",
        feature:false,
        submitnumber:0
    }

        
        
    }
    
    componentDidMount(){
        Axios.get("https://cors-anywhere.herokuapp.com/https://terriblytinytales.com/test.txt")
        .then((res)=>{this.setState({data:res.data})})
        
    }
    componentWillMount(){
      this.numRef= base.syncState('Number',{
          context:this,
          state:'num'

      });
    }
    componentDidUpdate(){
        newArray=[]
    }
    componentWillUnmount(){
      base.removeBinding(this.numRef);
      newArray=[]
    }
    handleChange=event =>{
        this.setState({ [event.target.name]: [event.target.value]})
    }


    count =()=>{
        var txt=this.state.data
        var wordArray = txt.split(/[ .?!,*'"]/);
        var  wordObj;
        wordArray.forEach(function (word) {
          wordObj = newArray.filter(function (w){
            return w.text == word;
          });
          if (wordObj.length) {
            wordObj[0].size += 1;
          } else {
            newArray.push({text: word, size: 1});
          }
        });
        newArray.sort(function(a,b) {
            return b.size - a.size;
        });    
    }

    handleSubmit= event =>{
    event.preventDefault();
    const id=Date.now();
    const num={...this.state.num};
    this.count()
    num[id]={
    id:id,
    name:this.state.name,
    number:this.state.number
    };
    this.setState({num});
    this.setState({name:''});
    this.setState({submitnumber:this.state.number})
    this.setState({number:''});
    this.setState({filtered:newArray});
    this.setState({feature:true});

}
   render(){
    const {name,number } = this.state;

    return(
    <div>
        {this.count()}
        
        
        <Grid textAlign="center" verticalAlign="middle" className="app" > 
        <GridColumn style={{ maxWidth: 450 }}>
            <Header color="black">
                
            </Header>
 
        <Segment>
            <Form onSubmit={this.handleSubmit} >
                <Form.Input name="name"  onChange={this.handleChange} placeholder="Name" value={name} />
                    <Form.Input name="number"  onChange={this.handleChange} placeholder="Number" value={number} />
                    <Button  color="blue">Submit</Button>
            </Form>
        </Segment>
        
        {this.state.feature &&
            <Segment>
        <Table class="table">
            <thead>
                <tr>
                <th scope="col">WORD</th>
                <th scope="col">FREQUENCY</th>
                </tr>
            </thead>
            <tbody>
                {newArray.slice(0,this.state.submitnumber).map((data)=>{
                    return(    
                    <tr>
                        <td>{data.text==''?"whitespace":data.text}</td>
                        <td>{data.size}</td>
                    </tr>
                    )
                    })   
                }
            </tbody>
            </Table>            
        </Segment>
        }
        </GridColumn>
        </Grid>
     </div>
    );
   }


}
export default App;