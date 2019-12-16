import React,{Component } from 'react';

class Counter extends Component {
    state = {
        count:0,
        tags:['Trust','Performances','Both']

        
    };

   // constructor() {
     //   super();
     //   this.handleBoost=this.handleBoost.bind(this);
    //}
    styles = {
        fontSize:32,
        fontWeight:"bold",
    };
    handleBoost = (probs) => {
        console.log(probs);
        console.log("Boost Clicked",this);http://localhost:3000/
        //this.state.count++;
        this.setState({ count : this.state.count +1});
    };
   
    render(){
       // let classes = this.getBadgeClasses();
        console.log(this.props);
        return (
        <div>
            <h1>Hi Ram</h1>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
             <button onClick={ () => this.handleBoost()} className="btn btn-secondary btn-sn">Boost</button>
             <ul>
                 {this.state.tags.map(tags => <li key={tag.id}>{tag}</li>)}
             </ul>
        </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge n-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} =  this.state;
        return count === 0 ? "selfconfident" : count; 
    }
}
export default Counter;