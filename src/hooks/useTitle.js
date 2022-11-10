import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Cloud Kitchen`;
    },[title ])
};

export default useTitle;
