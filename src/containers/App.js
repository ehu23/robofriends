import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import {setSearchField, requestRobots} from '../actions';

const mapStateToProps = state => { //can call function anything, but this is standard
    return { //returns a prop called searchField, can be anything. Sends this state down as props
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => { //dispatch sends actions to reducers. like a messenger
    return { //returns a prop called onSearchChange (which is set as a function here) can be anything. We tell it which props are actions that need to be dispatched.
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
class App extends Component {

    //unnecessary because state will be returned by redux
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         //searchfield: '' //not needed with redux
    //     }
    // }

    componentDidMount() {
        this.props.onRequestRobots();
        // redux made this obsolete
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response=> response.json())
        // .then(users => this.setState({ robots: users }));
    }

    //not needed with redux
    // onSearchChange = (event) => { //convention for functions you create for "this" to actually refer to App and not the object where its called
    //     this.setState({searchfield: event.target.value}); //cannot do this.state.searchfield = ...
    // }

    render() {
        const {searchField, onSearchChange, robots, isPending} = this.props; //from redux
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (isPending) {
            return <h1> Loading... </h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'> RoboFriends </h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                        
                    </Scroll>
                </div>
            );
        }
    }
}

//gives the props returned from mapStateToProps and mapDispatchToProps to the App component
export default connect(mapStateToProps, mapDispatchToProps)(App); //connect is a higher order function(returns a function), which will use App as a parameter
//tells App to subscribe/be aware of redux store