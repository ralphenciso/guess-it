const root = document.getElementById('root');

// Components
class WhoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "div",
      { className: "flex-c-nw fjc-spacearound h100 mxauto", id: "whocontainer" },
      React.createElement("img", { src: this.props.currentItem['loc'] }),
      React.createElement(
        "button",
        { className: "btn btn-large mxauto" },
        "Next"
      )
    );
  }
}

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: 0
    };
    this.list = [];
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let namelist = fetch('../getlist?length=10').then(response => response.text()).then(data => this.renderItem(data)).catch(err => console.error(err));
  }

  renderItem(data) {
    this.list = JSON.parse(data);

    ReactDOM.render(React.createElement(WhoItem, { currentItem: this.list[this.state.currentItem] }), root);
  }

  render() {
    return React.createElement(
      "a",
      { className: "waves-effect waves-light btn btn-large red lighten-2", onClick: this.handleClick },
      this.props.title
    );
  }
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

// Components end
ReactDOM.render(React.createElement(List, null), root);