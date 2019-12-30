import Rating from './component/Rating';
import React, { Component } from "react";
import MovieList from './component/MovieList';
import TabMovie from './component/TabMovie';
import RatingFilter from './component/RatingFilter';
import Moodal from './component/Model.js';

import './App.css';
class App extends Component {
  state = {
    tabMovi: TabMovie,
    minRatingFilter: 2,
    titleFilter: '',
    addMovie:{
      title:"",
      image:"",
      rating:"",
      year:"",
    }, 
    visible: false,
    isLoading:false
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = e => {
    e.preventDefault();
    if (Object.values(this.state.addMovie).indexOf("") > -1) {
      e.preventDefault();
      alert("Enter a valid informations");
    } else {
      this.setState({
        tabMovi: [...this.state.tabMovi, this.state.addMovie],
        visible: false,
        addMovie:{
          title:"",
          image:"",
          rating:"",
          year:"",
        },
        isLoading:true
      });
    }
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  handleTitle = event => {
    this.setState({addMovie:{
      ...this.state.addMovie,
      title:event.target.value
    }
    });
    console.log( this.state.title)
  };
  handleImage = event => {
    this.setState({ addMovie:{
      ...this.state.addMovie,
      image:event.target.value
    }})
    console.log(this.state.image)
  };
  handleYear = event => {
    this.setState({addMovie:{
      ...this.state.addMovie,
       year: event.target.value <= 2020
       ? event.target.value
       :""
    }});
    console.log(this.state.year)
  }
  handleRating = event => {
    this.setState({addMovie:{
      ...this.state.addMovie,
      rating:  /^[0-9]{1}$/.test(event.target.value) && event.target.value <= 5
      ? event.target.value
      : ""}});
       console.log(this.state.rating)
  }
  titleAdd = (newTitleFilter) => {
    setTimeout(()=>this.setState({isLoading :false }),2000)
    this.setState({
      titleFilter: newTitleFilter,isLoading:true
    })
  }
  ratingAdd = (newRating) => {
    setTimeout(()=>this.setState({isLoading :false }),2000)
    this.setState({
      minRatingFilter: newRating,isLoading:true
    })
  }
  getVisibleMovie() {
    return this.state.tabMovi.filter(el =>
      el.rating >= this.state.minRatingFilter &&
      el.title.toLowerCase().includes(
        this.state.titleFilter.toLowerCase())
    )
  }
  componentDidMount() {
    this.setState({isLoading:true})
      setTimeout(()=>this.setState({isLoading :false }),2000)
    }
  render() {
    return (
      <div className="movie-app">
        <header className="movie-app-header">
          <Rating
            value={this.state.titleFilter}
            onChange={(newTitleFilter) => {
            (this.titleAdd(newTitleFilter))
            }} />
          <RatingFilter
            count={this.state.minRatingFilter}
            onChange={(newRating) =>
              (this.ratingAdd(newRating))
            } />
        </header>
        <main className="movie-app-main">
          <MovieList
       isLoading={this.state.isLoading}
            tab={this.getVisibleMovie()}
            // onAddMovie={(newMovie) => (this.addMovie(newMovie))}
          />
        </main>
        <Moodal showModal={this.showModal}
                handleOk={this.handleOk}
                handleCancel={this.handleCancel}
                handleTitle ={this.handleTitle }
                handleImage={this.handleImage}
                handleYear={this.handleYear}
                handleRating ={this.handleRating}
                visible={this.state.visible}
                addMovie={this.state.addMovie}
                 />
      
    </div>
    );
  }

}

export default App;
