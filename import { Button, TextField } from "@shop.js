import { Button, TextField } from "@shopify/polaris";
import { useState } from "react";

function Todolist() {
  const [inputdata, setInputdata] = useState("");
  const [item, setItem] = useState([]);
  const [updatebutton, setUpdatebutton] = useState(true);
  const [edititem, setEdititem] = useState(null);
  const [message, setMessage] = useState("")

  const addItem = () => {
    var regex = new RegExp("^[a-zA-Z][A-Za-z0-9]+$");
    var regex1 = new RegExp("^[a-zA-Z]+$");
    if (!inputdata) {
      setMessage("pls fill data");
    } else if (inputdata && !updatebutton) {
      // console.log(inputdata)
      if (!inputdata.match(regex) && !inputdata.match(regex1)) {
        setMessage("Enter alphanumeric value");
        setInputdata("");
      } else {
        setItem(
          item.map((elem) => {
            if (elem.id == edititem) {
              setUpdatebutton(true);
              setInputdata("");
              setMessage("");
              return { ...elem, name: inputdata.toUpperCase() }
            }
            return elem;


          })
        )
      }
    }
    else if (!inputdata.match(regex) && !inputdata.match(regex1)) {
      setMessage("Enter alphanumeric value");
      setInputdata("");
    }
    else {
      const data = inputdata.trim();
      console.log(data)
      const alliem = { id: new Date().getTime().toString(), name: data.toUpperCase() }
      //  console.log(alliem)
      setItem([...item, alliem]);
      setInputdata("");
      setMessage("");
    }
  }
  const deleteItem = (index, elem) => {
    //  console.log(elem.id)
    //  console.log("awd",index); 
    const updateitem = item.filter((elem) => {
      return index !== elem.id;
    }
    );
    setItem(updateitem);
  }
  const editItem = (index) => {
    let edititem = item.find((elem) => {
      return elem.id == index
    })
    //  console.log(index);
    setUpdatebutton(false);
    setInputdata(edititem.name);
    setEdititem(index)
  }


  return (
    <>
      <div className="mainbody">
        <h1>Todo List</h1>
        <div className="inner-body">


          <div className="text-body">
            <TextField error={message} id="text" value={inputdata} onChange={(e) => setInputdata(e)}></TextField>
            {
              updatebutton ? <Button destructive onClick={addItem}>ADD</Button> : <Button destructive onClick={addItem}>Update</Button>
            }

          </div>
        </div>
        <div className="data-list">
          {
            item.map((elem) => {
              return (
                <div key={elem.id} className="data">
                  <h3>{elem.name}</h3>
                  <div className="btn">
                    <Button size="slim" primary onClick={() => deleteItem(elem.id)}>Delete</Button>
                    <Button size="slim" primary onClick={() => editItem(elem.id)}>edit</Button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
export default Todolist