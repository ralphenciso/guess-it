const root = document.getElementById('root');


// Components
function Category(props) {
  return (
    <a className="waves-effect waves-light btn btn-large red lighten-2">
      {props.title}
    </a>
  )
}

function List(props) {
  return (
    <ul className="h100 flex-c-nw fjc-spacearound fai-center" id="list">
      <Category title="Who" />
      <Category title="What" />
      <Category title="Where" />
      <Category title="When" />
      <Category title="Random" />
    </ul>
  )
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

ReactDOM.render(<List />, root);


function selectItems(number, length){
  let arr = Array(length).fill.map((v,i) => i);
  

}

function shuffle(array){
  let ci = array.length, temp, randindex;

  while(ci !== 0){
    randindex = 

  }
  


}