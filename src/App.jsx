import React, {Component} from 'react';
import './app.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
// import { employees } from './employees';

class App extends Component{

  constructor(){
    super()
    this.state = {
      employees: [],
      searchField: ''
    }

  }

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({employees: users})});
  }


  onSearchChange = (event) => {
      this.setState({searchField: event.target.value})
    }



    render(){

      const {employees, searchField} = this.state;

      const filteredEmployees = employees.filter(employee =>{
        
        return employee.name.toLowerCase().includes(searchField.toLowerCase())
      });


        return !employees.length ? 
             <h1>Loading...</h1> :
        
                <div className='tc ma2'>
                  <h1 className='f1' >Company Facebook</h1>
                  <SearchBox searchChange={this.onSearchChange} />
                  <Scroll>
                    <CardList employees={filteredEmployees} />
                  </Scroll>
                </div>
           
        
    }
}

export default App