import { DisplayText, Page, TextField,Heading, TextStyle} from "@shopify/polaris";
import { useState, useEffect,} from "react";
function Typing() {
    const [value, setValue] = useState("")
    const [text, setText] = useState("")
    const [time, setTime] = useState(0)
    const [word, setword] = useState("")
    const[error,setError]=useState("")
    const [timerOn, setTimerOn] = useState(false);
    useEffect(() => {
        var randomSentence = require('random-sentence');
        setValue(randomSentence())
    }, [])

   useEffect(()=>{
       
    let oldText = value.split("")
    let currentText = text.split("")
    currentText.forEach((value, index) => { 
        if (oldText[index]===(currentText[index])) {
            setError(" ")
        }
        else{
            setError("false")
        }
    })
    if (value.length === text.length) {
            setTimerOn(false)
           
        }
   },[text,value])

    function check1(e) {
        setTimerOn(false)
        setText(e)
        let c = value.length;
        console.log(c)
        let totalword = text.split(" ")
        let wpm = totalword.length;
        let min = time / 60;
        let total = wpm / min;
        setword(Math.round(total))
        setTimerOn(true)
        
    }
    useEffect(() => {

        let interval = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (!timerOn) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerOn,text]);
   
    return (

        <Page>
             <Page>
                <Heading>
                {value}
                </Heading>
                </Page>
            <Page> 
                <TextField
                    multiline={5}
                    value={text}
                    onChange={(e) => check1(e)}>
                </TextField>
                <TextStyle variation="negative"> {error}</TextStyle>
                </Page>
            <Page>
                <DisplayText>
                    {time}</DisplayText>
                <TextStyle variation="positive">
                    <Heading> {"Word Per Minute-" + word}</Heading>
                </TextStyle>
            
               
            </Page>

        </Page>
    )
} export default Typing;