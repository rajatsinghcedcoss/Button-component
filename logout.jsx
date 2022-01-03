import { Button, Checkbox, Select, TextField } from '@shopify/polaris';
import React, { useState } from 'react';
import Table from './table'
function Logout(props) {

    const [error, setError] = useState("fill")
    const [disable, setDisable] = useState(false)
    const [check, setCheck] = useState(false)
    const [abc, setabc] = useState(false);
    const options = [
        { label: 'January', value: 'jan' },
        { label: 'Febuary', value: "feb" },
        { label: "March", value: "Mar" },
        { label: "April", value: "Apr" },
        { label: "May", value: "may" },
        { label: "June", value: "jun" },
        { label: "July", value: "jul" },
        { label: "August", value: "Aug" },
        { label: "September", value: "sep" },
        { label: "October", value: "Oct" },
        { label: "November", value: "nov" },
        { label: "December", value: "dec" }];
    const yearr = [
        { label: '2018', value: '2018' },
        { label: '2019', value: '2019' },
        { label: '2020', value: '2020' },
        { label: '2021', value: '2021' },
        { label: '2022', value: '2022' },
    ];
    const [obj, setObj] = useState({
        "name": "",
        "age": "",
        "batch": "Oct-2021",
        "phone": "",
        "address": {
            "street": "",
            "city": ""
        },
        "caddress": {
            "street": "",
            "city": ""
        },
    })
    var a = obj.batch.split('-');
    function Check() {
        let namematch = /^[a-zA-Z ]+$/;
        let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        let age = parseInt(obj.age)
        if (obj.name == "" || !obj.name.match(namematch)) {
            setError("enter name")
        }
        else if (isNaN(age) || age <= 5 || age > 100) {
            setError("plz enter the age ")
        }
        else if (obj.phone == "" || !obj.phone.match(phoneno)) {
            setError("plz enter the phone")
        }
        else if (obj.address.street == "") {
            setError("plz enter the street")
        }
        else if (obj.address.city == "") {
            setError("plz enter the pcity")
        }
        else if (obj.caddress.street == "" && abc == false) {
            setError("plz enter confirm  street")
        }
        else if (obj.caddress.city == "" && abc == false) {
            setError("plz enter the city")
        }
        else if (disable == true) {
            obj.caddress.street = obj.address.street
            obj.caddress.city = obj.address.city
        }
        else {
            setError("submitted")

        }

    }
   
    return (
<>
        <section>

            <TextField label="Name"
                placeholder="name"
                value={obj.name}
                onChange={(e) => setObj({ ...obj, name: e })} /><br></br>
            <TextField label="Age"
                placeholder="Age"
                value={obj.age}
                onChange={(e) => setObj({ ...obj, age: e })} />
            <Select
                label="Batch"
                value={a[0]}
                onChange={(e) => setObj({ ...obj, batch: e + "-" + a[1] })}
                options={options}
            />
            <Select
                value={a[1]}
                options={yearr}
                onChange={(e) => setObj({ ...obj, batch:  a[0] + "-" +e })}
            />
            <TextField label="Phone"
                value={obj.phone}
                onChange={(e) => setObj({ ...obj, phone: e })}
            />
            <TextField label="Street" placeholder="street"
                value={obj.address.street}
                onChange={(e) => setObj({ ...obj, address: { ...obj.address, street: e } })} />

            <TextField label="City" placeholder="city"
                value={obj.address.city}
                onChange={(e) => setObj({ ...obj, address: { ...obj.address, city: e } })} />

            <Checkbox
                label="Confirm Address:"
                checked={disable}
                onChange={() => setDisable(!disable)}
            />

            <TextField label="Street" placeholder="street"
                disabled={disable}
                value={disable ? obj.address.street : obj.caddress.street}
                onChange={(e) => setObj({ ...obj, caddress: { ...obj.caddress, street: e } })} />
            <TextField label="City" placeholder="city"
                disabled={disable}
                value={disable ? obj.address.city : obj.caddress.city}
                onChange={(e) => setObj({ ...obj, caddress: { ...obj.caddress, city: e } })}
            />
            <Button monochrome outline
                onClick={Check}>
                Save</Button>
               
        </section>
         <div className="table">
         <Table/>
     </div>
     </>   
    )
}

export default Logout;
