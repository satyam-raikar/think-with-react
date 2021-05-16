

// const container = document.getElementById('react-container');                             //basic type to render component
// ReactDOM.render("Hello! Welcome to React",container);



                                                                                             // Functional component
// const Container = () =>{
//     return React.createElement(`div`,null,`Hey ProGrads! Welcome to React Learning`,
//        React.createElement(`div`,null,`Let's rock and roll`)
//        );
// }
// // Render the Container
// const container = document.getElementById('react-container');
// ReactDOM.render(React.createElement(Container),container);




class ReactContainer extends React.Component{                                                   // class component
    // constructor - to initialize the state 
  
    // render method to render the react dom 
      render(){
          return React.createElement(`div`,null,`Hey ProGrads`,
          React.createElement(`div`,null,`Let's rock and roll`)
          );
      }
    
  }
  const container = document.getElementById('react-container');
  ReactDOM.render(React.createElement(ReactContainer),container);
  