import React, { Component } from 'react';
import './Search.css';

class SearchProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      valueMode: 'name',
      name: '',
      category: '',
    };

    this.handleInputOnKeyUp = this.handleInputOnKeyUp.bind(this);
    this.onClickGoHandler = this.onClickGoHandler.bind(this);
  }

  onClickGoHandler() {
    const query = {
      category: this.state.category,
      name: this.state.name,
      page: 0,
      items: 10,
    };
    this.props.goSearch(query);
  }

  async handleChangeInputValue(evt) {
    await this.setState({ inputValue: evt.target.value });
    switch (this.state.valueMode) {
      case 'name':
        this.setState({ name: this.state.inputValue });
        break;
      case 'category':
        this.setState({ category: this.state.inputValue });
        break;
      default: break;
    }
  }

  handleChangeSelectValue(evt) {
    const valueMode = evt.target.value;
    let inputValue;
    switch (valueMode) {
      case 'name': inputValue = this.state.name; break;
      case 'category': inputValue = this.state.category; break;
      default: break;
    }
    this.setState({
      valueMode,
      inputValue,
    });
  }

  handleInputOnKeyUp(evt) {
    if (this.state.inputValue === '') {
      this.props.goSearch();
    }
    if (evt.key === 'Enter') {
      this.onClickGoHandler();
    }
  }

  render() {
    const searchBarBody = (
      <div className="search-wrapper">
        <div className="category">
          <select onChange={e => this.handleChangeSelectValue(e)}>
            <option value="name">Name</option>
            <option value="category">Category</option>
          </select>
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search..."
          value={this.state.inputValue}
          onChange={e => this.handleChangeInputValue(e)}
          onKeyUp={this.handleInputOnKeyUp}
        />
        <div className="go-button">
          <button onClick={this.onClickGoHandler}>
            Go
          </button>
        </div>
      </div>
    );
    return searchBarBody;
  }
}

export default SearchProducts;
