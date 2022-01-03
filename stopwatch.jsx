import { Button, TextField,} from "@shopify/polaris";
import { useState} from "react";
function Timer() {
  const [editt,] = useState(false);
  const [update, setupdate] = useState([]);
  const [text, setText] = useState("")
  const [value, setValue] = useState([])
  const [isPreview, setIsPreview] = useState(false);
   let regex="^[a-zA-Z][A-Za-z0-9]+$"
   let regex2=/\s/;
  function additem(i) {
    if (!text||!text.match(regex)||text.match(regex2)) {
      alert("plz write");
    } else {
      setValue([...value, text]);
      setText('')
    }
  }
  function remove(f) {
    const Todos = [...value];
    Todos.splice(f, 1);
    setValue(Todos);
  };
  function edit(e,f) {
    const Todos = [...value];
    setText(Todos[f])
    setIsPreview(true)
    setupdate(f)
  };
  function UpdateTodo(f) {
   
    if (f===update) {
      const Todos =value.slice();
      Todos.splice(update,1,text)
      setValue(Todos);
      // setText('')
    }
    console.log(f)
  }
  //  useEffect(() => {
  //     let interval;
  //     if (timer) {
  //       interval = setInterval(() => {
  //         setTime((count) => count + 1);
  //       }, 1000);
  //     } else if (!timer) {
  //       clearInterval(interval);
  //     }
  //     return () => clearInterval(interval);
  //   }, [timer]);
  return (
    <div className="main">
      {/* <h1>{time}</h1>
       <Button   const Todos = [...value];
        onClick={() => setTimer(true)}
       >Start Timer</B(e)=>setValue()
         onClick={() => setTime(0)}
       >Reset</Button>
       <> */}
      {/* <Button
    
       >Save</Button>
       <h1>{value}</h1>
       </>
       <> */}
      {/* <h1>
       {text}</h1>
       <Button
       primary
          onClick={(e)=>setText(text+1)}
       >+</Button>
       <Button
        destructive
        onClick={(e)=>
        text==0?alert('value can not go in negative'):setText(text-1)}>-</Button> */}
      <TextField
         
        placeholder="Enter the Tasks"
        label="TO DO LIST"
        value={text}
        onChange={(e) => setText(e)}
      /><Button
        id="add"
        primary
        onClick={additem}
      >ADD</Button>
      <div className="items">
      {
        value.map((e, f) => {
          return (

            <div >

              <h1  key={e.id}>
                {e}</h1>

              <Button
              
                destructive
                onClick={() => remove(f)}
              >
                Delete</Button>
              <Button
                primary
                onClick={() => edit(e,f)}
              >Edit</Button>
              {isPreview == true ? <Button disabled={editt}style={{ color: 'aqua' }} monochrome outline onClick={() => UpdateTodo(f)}>update</Button> : null}
            </div>
          )
        })
      }
    </div></div>

  )
} export default Timer;