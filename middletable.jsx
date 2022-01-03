import { Card, Page, DataTable, Button, Checkbox } from '@shopify/polaris';
import { useState, useCallback, useEffect } from 'react';
function Table() {
  const [select, setSelect] = useState(false)
  const [select1, setSelect1] = useState(false)
  const [select2, setSelect2] = useState(false)
  const [rows, setRows] = useState([])
  const [rows1, setRows1] = useState([])
  const handleChange = useCallback((newChecked) => setSelect(newChecked), []);
  const handleChange1 = useCallback((newChecked) => setSelect1(newChecked), []);
  const handleChange2 = useCallback((newChecked) => setSelect2(newChecked), []);
  const data =
    [{
      "id": "0",
      "name": "Emerald Silk Gown",
      "price": "108",
      "image": "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/10/1639738-1587911-11-Best-Products-from-The-Ordinary-1296x728-Header-c0dcdf.jpg?w=1155&h=1528",
      "quant": "2",
      "netsales": "19,090.00"
    },
    {
      "id": "1",
      "name": "'Mauve Cashmere Scarf'",
      "price": "230",
      "image": "https://www.ricoh.com/-/Media/Ricoh/Sites/com/products/consumer/img/index_mn_theta.jpg",
      "quant": "5",
      "netsales": "14,240.00"
    },
    {
      "id": "2",
      "name": "Navy Merino Wool",
      "price": "240",
      "image": "https://www.ricoh.com/-/Media/Ricoh/Sites/com/products/consumer/img/index_mn_theta.jpg",
      "quant": "5",
      "netsales": "14,240.00"
    },];
  function remove(i, f) {

    if (i.id == f) {
      // delete rows[f]
      const temp = [...rows];
      //     console.log(temp,"hh")
      temp.splice(f, 1)
      setRows(temp)
    }
    console.log(rows)

  };

  useEffect(() => {
    let arr = [];
    data.forEach((val, index) => {
      rows.push([
        <Checkbox checked={select}></Checkbox>,
        <img src={val.image} />,
        val.name,
        val.price,
        val.quant,
        val.netsales,
        <Button primary onClick={() => remove(val, index)}>Del</Button>
      ]);
    })
    console.log("ra")
    setRows(rows)
  }, [rows1])


  return (
    <Page>
      {console.log("hh")}
      <Card>
        <DataTable
          showTotalsInFooter
          columnContentTypes={[
            'text',
            'text',
            'text',
            'text',
            'text',
            'text',
          ]}
          headings={[
            '',
            'image',
            'tittle',
            'SKU Number',
            'Quantity',
            'Net sales',
            'Net ',
          ]}
          rows={rows}
        />
      </Card>
    </Page>
  );
} export default Table;