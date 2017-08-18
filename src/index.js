import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// var testData = [1, 2, 3, 4, 1, 2];

// class GraphDropdown extends React.Component {
//   constructor () {
//       super();
//       this.state =  {
//           value: null,
//       };
//   }
//   render() {
//     return (
//       <button className="square" onClick={() => this.setState({value: 'X'})}>
//         { this.state.value }
//       </button>
//     );
//   }
// }

// class GraphChart extends React.Component {
//   renderSquare(i) {
//     return <GraphDropdown value={i} />;
//   }

//   render() {
//     const status = 'Next player: X';

//     return (
//       <LineChart width={400} height={400} data={testData}>
//         <Line type="monotone" datakey="uv" stroke="8884d8" />
//       </LineChart>
//     );
//   }
// }

// class Graph extends React.Component {
//   render() {
//     return (
//       <div className="graph">
//         <div className="graph-chart">
//           <GraphChart />
//         </div>
//         <div className="graph-dropdown">
//           <div>{/* status */}</div>
//           <GraphDropdown />
//         </div>
//       </div>
//     );
//   }
// }

// // ========================================

// ReactDOM.render(
//   <GraphChart />,
//   document.getElementById('graph')
// );
