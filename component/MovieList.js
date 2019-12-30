import React from "react";
import CardMovie from "../component/CardMovie";
import Spinner from "./Loading";
// class MovieList extends Component{
// state={
//   isLoading:true,
// }
// componentDidMount() {
//   setTimeout(()=>this.setState({isLoading :false }),2000)
// }
// render(){
//   return (
//     <div>
//       {this.state.isLoading ? <Spinner /> :
//       (<div className="movie-list">
//          {this.props.tab.map((el,i)=> 
//            <CardMovie 
//            key={el.id} 
//            film={el} />
//           )}
//        </div >)
// }  
//        </div>   
//   );
// }
// }
// export default MovieList
 
 const MovieList= ({tab=[],isLoading}) =>{
    return (
      
<div>
{isLoading ? <Spinner /> :
       (<div className="movie-list">
       {tab.map((el,i)=> 
         <CardMovie 
         key={el.id} 
         film={el} />
        )}
     </div >  ) }
          
         </div>
    );
  }

export default MovieList