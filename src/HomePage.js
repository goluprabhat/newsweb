import React, { Component } from 'react';
import './HomePage.css';
class HomePage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
        
      }
      
      handleFavClick = event => {
       
       event.currentTarget.classList.toggle('active');      
      }
      componentDidMount() {
       //fetch("https://cors-anywhere.herokuapp.com/https://ace.qtstage.io/api/v1/collections/entertainment")
         fetch("./data/data.json")
          .then(res => res.json())
          .then(
            (result) => {
               
              this.setState({
                isLoaded: true,
                items: result.items
              });
              console.log(result);
            },
            
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    render() {

        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
        return (
           
         
                    <section className="cards">
                        {items.map(itemcrd => (   
                            <article key={itemcrd.id} className="card">                                
                            <picture className="thumbnail">
                            {/* <img className="imgcategory d-block w-100" src={itemcrd.image}  /> */}
                            <img className="imgcategory d-block w-100" src={'assets/img/cloud.svg'}  />                            
                            </picture>
                            <div className="card-content">
                              <span onClick={this.handleFavClick.bind(this)} className= {this.state.active ? "heartCheck active" : "heartCheck"}><i className="fa fa-heart"></i> </span>
                            <h3>{itemcrd.story.headline}</h3> 
                            <p>{itemcrd.story.subheadline}</p>
                        </div>
                            <footer>
                            <div className="post-meta">
                                <span className="timestamp"><i className="fa fa-clock-o"></i> 6 mins ago</span>
                                <span className="comments"><i className="fa fa-comments"></i><a href="#"> 14 comments</a></span>
                                </div>
                            </footer>
                        </article>
                        ))}
                        
                      
                        </section>
                  

        );
        }
    }

}

export default HomePage;