import React, { Component} from 'react';
import {getMoviesDeta} from './services/fakeMovieService';

class Movie extends Component{
    
    state ={
        movies:getMoviesDeta()
    }
    // componentDidMount(){
    //     fetch ("http://localhost:3004/movies")
    //     .then(res=>res.json())
    //     // .then(res=>console.log(res))
    //     .then(data=>this.setState({movies:data}))
    // }
    
    handleDelete = (movie)=>{
       
        console.log(movie)
        const mov=this.state.movies.filter( m => m._id !== movie._id)
        console.log(mov)
        this.setState({movies:mov})

    }
    render(){


        if(this.state.movies.length === 0)
        return<p>there is no MOVIES in the database</p>



        return(<div>
            <p>{this.state.movies.length}movies in the database</p>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                         <th>Stock</th>
                        <th>Rate</th>
                    </tr>
                    
                </thead>
                <tbody>{this.state.movies.map(movie =>( 
                    <tr key={movie._id}> 
                       
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><button onClick={()=>this.handleDelete(movie)} className='btn btn-danger btn-sm'>Delete</button></td>
                    </tr>))}
                   
                    
                </tbody>
            </table>

        </div>)
    }
}
export default Movie

