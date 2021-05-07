import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestEmployees } from '../actions';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import { employeesData } from '../components/employees';


export const randomArray = Array(11).fill().map(() => Math.round(Math.random() * 100))


const mapStateToProps = (state) => {
  return {
    searchField: state.searchEmployees.searchField,
    employees: state.requestEmployees.employees,
    isPending: state.requestEmployees.isPending,
    error: state.requestEmployees.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestEmployees: () => dispatch(requestEmployees())
  }
}


class App extends Component{

  componentDidMount(){
    this.props.onRequestEmployees();
  }


    render(){

      const { searchField, onSearchChange, employees, isPending } = this.props;

      const filteredEmployees = employees.filter(employee =>{
      
        return employee.name.toLowerCase().includes(searchField.toLowerCase())
      });


        return isPending ? 
             <h1>Loading...</h1> :
        
                <div className='tc ma2'>
                  <h1 className='f1' >Company Facebook</h1>
                  <SearchBox searchChange={ onSearchChange } />
                  <Scroll>
                    <CardList employees={ filteredEmployees} />
                  </Scroll>
                </div>
           
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
