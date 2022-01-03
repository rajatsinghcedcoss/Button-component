
function FormatDate(props) {

    return (
        <div>
            <input type="number" value={props.val1}   />
        <input type="number" value={props.val2} />
       
        <p>
         {props.val1+props.val2}
        </p>
        <p>
        <img src={props.imgscr} alt="" />
        </p>
        </div>
    );
  }
  export default FormatDate;