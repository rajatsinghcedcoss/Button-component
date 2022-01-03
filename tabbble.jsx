import { useEffect, useState } from 'react';
function Table({ columns, rows, checkbox }){
  const [check, setCheck] = useState(false);
  const [update, setUpdate] = useState([]);
  useEffect(() => {
    if (check) {
      const selected = update.slice();
      for (let i = 0; i < rows.length; i++) {
        if (!selected.includes(i)) {
          selected.push(i);
          setCheck(true);
        }
      }
      setUpdate(selected);
    }
    else {
      setUpdate([]);
    }
    //~ eslint-disable-next-line react-hooks/exhaustive-deps
  }, [check]);
  function selectRow(value) {
    const selected = [...update];
    const index = selected.indexOf(value);
    if (index === -1) {
      selected.push(value);
    }
    else {
      selected.splice(index, 1);
    }
    setUpdate(selected);
  };
  console.log(check)
  return <>
    {check ? <select>
      <option>selected</option>
    </select>
      : null}
    <table border="1">
      <tr>
        <th>
          {checkbox && <input
            type="checkbox"
            checked={update.length==rows.length}
            onChange={() => setCheck(!check)}
          />}</th>
        {columns.map((item, index) => <th key={index}>{item}</th>)}
      </tr>
      {rows.map((value, index) => <tr><td>{checkbox && <input type="checkbox" checked={update.includes(index)} onChange={() => selectRow(index)} />}</td>
        {value.map((value) =>
          <td>{value}</td>)}
      </tr>)}
    </table>
  </>
}
export default Table;


