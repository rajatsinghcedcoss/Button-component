import {Card, DataTable } from "@shopify/polaris";
import { useEffect, useState } from "react";

function DataTableExample() {
  var Items = [];
  const [data, setData] = useState([]);
  const tok = localStorage.getItem("token");
  useEffect(() => {
    fetch(`https://connector-dev.demo.cedcommerce.com/mercado/public/connector/product/getProducts?target_marketplace=eyJtYXJrZXRwbGFjZSI6ImFsbCJ9&activePage=1&count=10&productOnly=true`, {

      headers: {
        Authorization: `Bearer  ${tok}`,

      }
    })
      .then(result => result.json())
      .then(json => {
        Items = json.data["rows"];
        let arr = [];
         Items.forEach((i) => {
          arr.push([
            i._id,
            i.type,
            i.container_id,
            i.title,
            i.price,
            <img src={i.image_url} />,
            i.currency,
            i.description,
            i.sku,
          ]);
        })
        setData(arr);
      })
  }, [])
  return (

    <Card>
      <DataTable
        columnContentTypes={[
          'numeric',
          'text',
          'numeric',
          'text',
          'numeric',
          'file',
          'text',
          'text',
          'text',
        ]}
        headings={[
          'ID',
          'Type',
          'container_id',
          'Tittle',
          'Price',
          'Image',
          'currency',
          'description',
          'Sku',

        ]}
        rows={data}
      />
    </Card>
  );
}
export default DataTableExample;