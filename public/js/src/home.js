const root = document.getElementById('root');


// Components
class WhoItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="flex-c-nw fjc-spacearound h100 mxauto" id="whocontainer">
        <img src={this.props.currentItem['loc']} className="mxauto mw100 mh60"/>
        <button className="btn btn-large mxauto">Next</button>
      </div>
    );
  }
}


class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: 0
    }
    this.list = [];
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let namelist = 
    fetch('../getlist?length=10')
      .then(response => response.text())
      .then(data => this.renderItem(data))
      .catch(err => console.error(err));
  }

  renderItem(data) {
    this.list = JSON.parse(data);

    ReactDOM.render(
      <WhoItem currentItem={this.list[this.state.currentItem]}/>,
    root);
  }

  render() {
    return (
      <a className="waves-effect waves-light btn btn-large red lighten-2" onClick={this.handleClick}>
        {this.props.title}
      </a>
    );
  }
}

function List(props) {
  return (
    <ul className="h100 flex-c-nw fjc-spacearound fai-center" id="list">
      <Category title="Who"/>
      <Category title="What" />
      <Category title="Where" />
      <Category title="When" />
      <Category title="Random" />
    </ul>
  )
}

// Components end
ReactDOM.render(<List />, root);






