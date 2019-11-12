import React, { useState } from "react";

//Hook 사용
const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => {
    setItem(item + 1);
  };
  const decrementItem = () => {
    setItem(item - 1);
  };
  return (
    <div className="App">
      <h1>item:: {item}</h1>
      <button onClick={incrementItem}>증가</button>
      <button onClick={decrementItem}>감소</button>
    </div>
  );
};

// //기존 class사용 방식
// class AppUgly extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       item: 0
//     };
//   }
//   incrementItem = () => {
//     this.setState(state => {
//       return { item: state.item + 1 };
//     });
//   };
//   decrementItem = () => {
//     this.setState(state => {
//       return { item: state.item - 1 };
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Class이용 {this.state.item}</h1>
//         <button onClick={this.incrementItem}>증가</button>
//         <button onClick={this.decrementItem}>감소</button>
//       </div>
//     );
//   }
// }

export default App;
