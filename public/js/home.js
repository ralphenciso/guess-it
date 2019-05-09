const root = document.getElementById('root');

// Components
class WhoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      blur: 3,
      next: false
    };
    this.list = this.props.list;
    this.listlength = this.list.length;
    this.trans = ' .blurtrans';
    this.clue = this.clue.bind(this);
    this.next = this.next.bind(this);
  }

  next() {
    let c = this.state.currentIndex + 1;
    if (c >= this.listlength) return alert('end');

    this.trans = '';

    this.setState({
      currentIndex: c,
      blur: 3,
      next: false
    });
  }

  clue() {
    let nblur = this.state.blur - 1;
    this.trans = ' .blurtrans';

    if (nblur === 0) {
      this.setState({
        next: true
      });
    }

    this.setState({
      blur: nblur
    });
  }

  render() {
    return React.createElement(
      'div',
      { className: 'flex-c-nw fjc-spacearound fai-center vh100 mxauto', id: 'whocontainer' },
      React.createElement(
        'div',
        { className: 'h90 mw100 flex-r-nw fjc-center' },
        React.createElement('img', { src: this.list[this.state.currentIndex]['loc'], className: 'h100 blur' + this.state.blur + this.trans })
      ),
      React.createElement(
        'button',
        { className: 'btn btn-large mxauto ' + (!this.state.next || 'dnone'), onClick: this.clue },
        'Reduce Blur'
      ),
      React.createElement(
        'button',
        { className: 'btn btn-large mxauto ' + (this.state.next || 'dnone'), onClick: this.next },
        'Next'
      )
    );
  }
}

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let namelist = fetch('../getlist?length=10').then(response => response.text()).then(data => {
      renderList(JSON.parse(data));
    }).catch(err => console.error(err));
  }

  render() {
    return React.createElement(
      'a',
      { className: 'waves-effect waves-light btn btn-large red lighten-2', onClick: this.handleClick },
      this.props.title
    );
  }
}

function List(props) {
  return React.createElement(
    'ul',
    { className: 'h100 flex-c-nw fjc-spacearound fai-center', id: 'list' },
    React.createElement(Category, { title: 'Who' }),
    React.createElement(Category, { title: 'What' }),
    React.createElement(Category, { title: 'Where' }),
    React.createElement(Category, { title: 'When' }),
    React.createElement(Category, { title: 'Random' })
  );
}

// Components end
ReactDOM.render(React.createElement(List, null), root);

function renderList(list) {
  ReactDOM.render(React.createElement(WhoItem, { list: list }), root);
}