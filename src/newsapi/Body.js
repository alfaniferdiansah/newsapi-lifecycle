import React, { Component } from 'react';
import axios from 'axios';

class Body extends Component {
  state = {
    news: [],
    searchTerm: '',
  }

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidMount() {
    console.log('component DidMount')
    const apiKey = '1d43adec9e5c4a508292f5dfb1ffe7bd';
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios.get(url)
      .then(res => {
        this.setState({ news: res.data.articles });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    console.log('component didUpdate');
  }

  componentWillUnmount() {
    console.log('component willUnmount');
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.searchTerm) {
        alert('Field is empty! Please fill the field');
    }

    const apiKey = '1d43adec9e5c4a508292f5dfb1ffe7bd';
    const url = `https://newsapi.org/v2/everything?q=${this.state.searchTerm}&apiKey=${apiKey}`;

    axios.get(url)
      .then(res => {
        this.setState({ news: res.data.articles });
        console.log({ news: res.data.articles });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log('rendered');
    return (
        <div className="container-fluid">
		    <div className="row d-flex justify-content-center mr-4">
                <form
                    className="input-group mb-4 mt-4 search" 
                    onSubmit={this.handleSubmit}>
                    <input className="form-control input" type="text" value={this.state.searchTerm} onChange={this.handleChange} />
                    <button 
                        className="btn btn-primary"
                        type="submit">Go</button>
                </form>
            </div>

        {this.state.news.map((article, index) => (
          <div className="text-center mt-3" key={index}>
            <img style={{widht:'200px', height:'100px'}} src={article.urlToImage} alt="news" />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url}>Read More</a>
          </div>
        ))}
      </div>
    );
  }
}

export default Body;



