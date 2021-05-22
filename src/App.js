import React, { PureComponent } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getItems, setListItems } from './reducers/appReducer';
import Search from './components/SearchPage';

// App component.
class App extends PureComponent {
 constructor() {
  super();
  this.state = {};
 }

 componentDidMount() {
  this.props.getItems(0);
 }

 render() {
  const { getItems, itemList, setListItems, allCurrentItems } = this.props;
  return (
   <div className="App">
    <Search
     getItems={getItems}
     itemList={itemList}
     setListItems={setListItems}
     allCurrentItems={allCurrentItems}
    />
   </div>
  );
 }
}

const mapStateToProps = (state) => {
 return {
  itemList: state.appState.itemList,
  allCurrentItems: state.appState.allCurrentItems,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  getItems: (startIndex) => dispatch(getItems(startIndex)),
  setListItems: (payload) => dispatch(setListItems(payload)),
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
