import React, {useState, useEffect, useRef} from 'react';
export const useFetch = (url)=>{
    
    const isMounted =useRef(true)
    const [state, setstate] = useState({data:null, loading:true, error:null});
    useEffect(()=>{
        return ()=>{
            isMounted.current = false;
        }
    },[]);

    useEffect( ()=>{

        setstate({data:null, loading:true, error:null});
        fetch(url)
        .then(resp => resp.json())
        .then(data=>{
            setTimeout( ()=>{
                if(isMounted.current){
                    setstate({
                        loading:false,
                        error:null,
                        data:data
                    });
                }
                else{
                    console.log('Setstate no se llamó');
                }
            });
        })
        .catch(()=>{
            setstate({data:null, loading:false, error:'No se puedo generar la info'})
        })
    },[url]);
    return state;
}