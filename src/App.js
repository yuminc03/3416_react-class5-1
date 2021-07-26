import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    console.log('Constructor');
  }

  state = {
    count: 0,
  }
  render() {
    console.log('Render');
    return(
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>+1</button>
        <button onClick={this.minus}>-1</button>
      </div>
    )
  };
};

export default App;

// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     count: 0,
//   };

//   add = () => {
//     //console.log("add");
//     this.setState(current => ({
//       count: current.count + 1,
//     }));
//   };

//   minus = () => {
//     //console.log("minus");
//     this.setState(current => ({
//       count: current.count - 1,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>The number is: {this.state.count}</h1>
//         <button onClick={this.add}>+1</button>
//         <button onClick={this.minus}>-1</button>
//       </div>
//     )
//   }
// }

// export default App;
