const root = document.getElementById('root');

// Components
class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "a",
      { className: "waves-effect waves-light btn btn-large red lighten-2", onClick: this.props.handler },
      this.props.title
    );
  }
}

function List(props) {
  return React.createElement(
    "ul",
    { className: "h100 flex-c-nw fjc-spacearound fai-center", id: "list" },
    React.createElement(Category, { title: "Who", handler: whoHandler }),
    React.createElement(Category, { title: "What" }),
    React.createElement(Category, { title: "Where" }),
    React.createElement(Category, { title: "When" }),
    React.createElement(Category, { title: "Random" })
  );
}

// Components end
ReactDOM.render(React.createElement(List, null), root);

function whoHandler() {
  let nameList = 
    fetch('../getlist?length=10')
      .then(response => response.text())
      .then(data => console.log(data,typeof(data)))
      .catch(err => console.error(err));
  }