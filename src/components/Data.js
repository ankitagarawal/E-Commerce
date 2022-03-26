import React, { useEffect, useState } from 'react'
import Items from './Items'

function Data(props) {

    const [result, setResult] = useState([]);
    console.log(result);



    const fetchData = async () => {
        const url = `https://fakestoreapi.com/products${props.fetchUrl}`;
        let data = await fetch(url);
        let res = await data.json();
        console.log(res);
        setResult(res);

    }

    useEffect(() => {
        fetchData();
    }, [])




    return (
        <div className='container my-5'>
            {/* 
            <h2 style={{
                textAlign: "center",
                marginBottom: "40px",
                color: "#6f968e"
            }}>Apki Apni Dukan</h2> */}
            <div className="row">
                {result.map((element) => {
                    return (
                        <>
                            <div className="col-md-3">
                                <Items image={element.image} description={element.description} price={element.price} title={element.title} />
                            </div>
                        </>
                    )

                })}

            </div>

        </div>
    )
}

export default Data