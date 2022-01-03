import { useEffect, useState } from "react";
import Table from "./tabbble";
import Checkbox from "./component2/checkbox";
function Movies() {
    const [data, setData] = useState([])
    const [q, setQ] = useState('');
    //const[check2,setCheck2]=useState([])
    // function check1(){
    //     setCheck(!check)
        
    //  }
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/top-rated-indian-movies-01.json`, {

        })
            .then(result => result.json())
            .then(json => {

                let arr = []
                json.forEach((i, f) => {
                    arr.push([
                       i.title,
                        i.year,
                        i.duration,
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <img src={i.posterurl} />
                    ])
                    
                })
                setData(arr)

            })
            
    }, []) 

   
    return (
        <>
      
            <Table
                columns={[
                               
                    'Title',
                    'Year',
                    'Duration',
                    'Image',
                ]}
                rows={data}
                checkbox={true}
            />
 
        </>
    )
} export default Movies;