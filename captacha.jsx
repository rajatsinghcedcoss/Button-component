import { Button, Toast, Frame, Page, TextField } from "@shopify/polaris";
import { useEffect, useState} from "react";

function Captacha() {
    const [value, setValue] = useState("")
    const [reload, setRelod] = useState("")
    const [refresh, setRefresh] = useState("")
    const [error, setError] = useState("")
    const [active, setActive] = useState(false);
    function make(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result
    }
    function validate() {
        if (value === "" || value !== refresh) {
            setError("Captacha Not Matched ")
            setActive(true)
        }
        else {
            setError("Captacha Matched")
            setActive(true)
        }
    }
    const handleChange = (e) => {
        e.preventDefault();
    };
    const toastMarkup = active ? (
        <Toast content={error} error={error==="Captacha  Matched"} onDismiss={()=>setActive(!active)} />
      ) : null;

    useEffect(() => {
     
        setRefresh(make(5))
    }, [reload])
    return (
        <Frame>
        <Page title=" CAPTCHA VERIFICATION">
            <textarea disabled value={refresh} onCopy={handleChange}></textarea>
            <Button onClick={(e) => setRelod(e)}primary>refresh</Button>
            <TextField value={value} onChange={(e) => setValue(e)}>
            </TextField>
            <Button onClick={validate} primary>save</Button>
            {toastMarkup}
        </Page>
       
        </Frame>
    )
} export default Captacha;