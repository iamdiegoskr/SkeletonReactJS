import React from 'react'

import './App.css';
import PeopleList from './Component/PeopleList';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isloading: true,
      data: [],
      error: null
    }
  }

  componentDidMount() {
    this.fetchDataPeople()
  }

  async fetchDataPeople() {

    this.setState({ isloading: true })

    // try {
    //   const data = await fetch('https://reqres.in/api/users?page=1')
    //   const people = await data.json()
    //   this.setState({
    //     isloading: false,
    //     data: people.data
    //   })
    // } catch (error) {
    //   this.setState({
    //     isloading: false,
    //     error: error
    //   })
    // }

    new Promise(res => {
      res()
    }).then(async () => {
      const data = await fetch('https://reqres.in/api/users?page=1')
      const people = await data.json()

      this.setState({ data: people.data })

      setTimeout(() => {
        this.setState({ isloading: false })
      }, 4000);

    })


  }

  render() {
    return (
      <div className="App">
        <h2 className="title">SKELETON</h2>
        <div className="container">
          <div className="container-people">
            <PeopleList isloading={this.state.isloading} people={this.state.data} />
          </div>
        </div>
      </div>
    );
  }


}

export default App;
