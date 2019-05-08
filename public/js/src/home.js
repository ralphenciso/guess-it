const root = document.getElementById('root');


// Components
class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a className="waves-effect waves-light btn btn-large red lighten-2" onClick={this.props.handler}>
        {this.props.title}
      </a>
    );
  }
}

function List(props) {
  return (
    <ul className="h100 flex-c-nw fjc-spacearound fai-center" id="list">
      <Category title="Who" handler={whoHandler}/>
      <Category title="What" />
      <Category title="Where" />
      <Category title="When" />
      <Category title="Random" />
    </ul>
  )
}

// Components end
ReactDOM.render(<List />, root);



function whoHandler() {
  let nameList =  
    fetch('../getlist?length=10')
      .then(response => response.text())
      .then((data => console.log(data)))
      .catch(err => console.error(err));
}




