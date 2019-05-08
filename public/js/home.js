const root = document.getElementById('root');

// Components
function Category(props) {
  return React.createElement(
    "a",
    { className: "waves-effect waves-light btn btn-large red lighten-2" },
    props.title
  );
}

function List(props) {
  return React.createElement(
    "ul",
    { className: "h100 flex-c-nw fjc-spacearound fai-center", id: "list" },
    React.createElement(Category, { title: "Who" }),
    React.createElement(Category, { title: "What" }),
    React.createElement(Category, { title: "Where" }),
    React.createElement(Category, { title: "When" }),
    React.createElement(Category, { title: "Random" })
  );
}

// class GuessItem extends React.Component {


//   render () {
//       return (
//           <div>
//             <img> </img>
//             <button></button>
//           </div>
//       );
//   }
// }


// Components end

ReactDOM.render(React.createElement(List, null), root);