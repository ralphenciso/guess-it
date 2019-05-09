const root = document.getElementById('root');


// Components
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: 0
    }
    // this.itemList = [];
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
    let url = (JSON.parse(data)[0]['loc']);

    ReactDOM.render(
      
      <img src={url} />,
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






