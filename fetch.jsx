 import React, { useState, useEffect } from "react";
function FetchAPI() {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});
  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
    }
      return (
        <div>
          My API <br />
          <button onClick={apiGet}>Fetch API</button>
          <br />
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          <div>
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  {item.userId},{item.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="title"
                onChange={handleChange}
              />{" "}
              <br />
              <input
                type="text"
                name="body"
                placeholder="body"
                onChange={handleChange}
              />
              <br />
              <input
                type="number"
                name="userId"
                placeholder="userId"
                onChange={handleChange}
              />
              <br />
              <input type="submit" value="Submit" onChange={handleChange} />
            </form>
          </div>
        </div>
      );
    }
    
    export default FetchAPI;