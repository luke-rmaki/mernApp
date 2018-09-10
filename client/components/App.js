import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { pageData: false };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    fetch("/api") //eslint-disable-line
      .then(res => res.json())
      .then((data) => {
        this.setState({
          pageData: data,
        });
      })
      .catch(err => console.log(err));
  }

  submitForm(e) {
    e.preventDefault();
    const { pageData } = this.state;
    const { current } = this.inputRef;
    const { value } = current;
    const newData = { data: value };
    this.inputRef.current.value = '';
    fetch("/api", { // eslint-disable-line
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then(res => res.json())
      .then((data) => {
        pageData.push(data);
        this.setState({ pageData });
      })
      .catch(err => console.log(err));
  }

  deleteItem(id) {
    const itemData = { itemID: id };
    fetch("/api", { // eslint-disable-line
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemData),
    })
      .then(res => res.json())
      .then((data) => {
        this.setState({
          pageData: data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { pageData } = this.state;
    return (
      <div>
        <h1>MERN APP</h1>
        <form onSubmit={this.submitForm.bind(this)}>
          <input
            type="test"
            ref={this.inputRef}
            placeholder="Enter your stuff"
          />
          <input type="submit" value="Add" />
        </form>
        <ul>
          {pageData ? (
            pageData.map((data, i) => (
              <li key={i}>
                {data.name}
                <button type="button" onClick={() => this.deleteItem(data._id)}>X</button>
              </li>
            ))
          ) : (
              <p>Loading data.....</p>
            )}
        </ul>
      </div>
    );
  }
}

export default App;
