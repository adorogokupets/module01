let alex = 'Alex D';
let anna = 'Anna M';
let john = 'John W';
let archi = 'Archi D';
let mike = 'Mike A';
let friend = 'Denis Chu';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, alex), /*#__PURE__*/React.createElement("li", null, anna), /*#__PURE__*/React.createElement("li", null, john), /*#__PURE__*/React.createElement("li", null, archi), /*#__PURE__*/React.createElement("li", null, mike), /*#__PURE__*/React.createElement("li", null, friend));
ReactDOM.render(element, document.getElementById('content'));

// const element = (
//     <ul style = {{'color': 'blue', 'fontSize': '24px'}}>
//         <li>Alex D</li>
//         <li>Anna D</li>
//         <li>Evelina D</li>
//     </ul>
// )
// ReactDOM.render(element, document.getElementById('content'))

// const element = React.createElement(
//     'ul', 
//     {style: {'color': 'blue', 'font-size': '24px'}}, 
//     React.createElement(
//         'li',
//         null,
//         'Alex Dorogokupets'
//     ),
//     React.createElement('li',null,'Anna Dorogokupets'),
//     React.createElement(
//         'li',
//         null,
//         'Evelina Dorogokupets'
//     )
// )
// ReactDOM.render(element, document.getElementById('content'))

// const element = React.createElement(
//     'div', 
//     {title: 'Outer div'}, 
//     React.createElement(
//         'h1',
//         null,
//         'Hello World!'
//     )
// )
// ReactDOM.render(element, document.getElementById('content'))

// ReactDOM.render(
//     React.createElement(
//         'div', 
//         {title: 'Outer div'}, 
//         'Hello World!'
//     ),
//     document.getElementById('content')
// )