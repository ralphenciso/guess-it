const root = document.getElementById('root');


// Components
class WhoItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0,
      blur: 3,
      next: false
    }
    this.list = this.props.list;
    this.listlength = this.list.length;
    this.trans = ' .blurtrans';
    this.clue = this.clue.bind(this);
    this.next = this.next.bind(this);
  }

  next(){
    let c = this.state.currentIndex + 1;
    if(c >= this.listlength) return alert('end');

    this.trans = '';

    this.setState({
      currentIndex: c,
      blur: 3,
      next: false
    })
  }

  clue (){
    let nblur = this.state.blur - 1;
    this.trans = ' .blurtrans';
  
    if(nblur === 0){
      this.setState({
        next: true
      })
    }

    this.setState({
      blur: nblur
    })
  }



  render() {
    return (
      <div className="flex-c-nw fjc-spacearound fai-center vh100 mxauto" id="whocontainer">
        <div className="h90 mw100 flex-r-nw fjc-center">
            <img src={this.list[this.state.currentIndex]['loc']} className= {'h100 blur' + this.state.blur + this.trans} />
        </div>
        <button className={'btn btn-large mxauto ' + (!this.state.next || 'dnone')} onClick={this.clue}>Reduce Blur</button>
        <button className={'btn btn-large mxauto ' + (this.state.next || 'dnone')} onClick={this.next}>Next</button>
      </div>
    );
  }
}


class Category extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let namelist = 
    fetch('../getlist?length=10')
      .then(response => response.text())
      .then(data => {
        renderList(JSON.parse(data));
      })
      .catch(err => console.error(err));    
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



function renderList(list) {
  ReactDOM.render(
    <WhoItem list={list}/>,
  root);
}




