import './Board.css';
function Grid({value,onGridClick}){
   return(<button className="Grid" onClick={onGridClick}>
       {value}
       </button>
   );
}

export default Grid;