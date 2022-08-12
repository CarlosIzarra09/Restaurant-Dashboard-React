import {useState} from "react";

export const useHandleSidebar = () => {

    const [isExpanded, setIsExpanded] = useState(() =>{
        const saved = localStorage.getItem("isExpanded");
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });



    const toggle = () => {
        if(window.innerWidth > 1300)
        {
            setIsExpanded(!isExpanded)
        }
    }

    const autoCloseSidebar = () => {
        setIsExpanded(false)
    }

    const autoOpenSidebar = () => {
        //setIsExpanded(true)
    }

    return {
        isExpanded,
        toggle,
        autoCloseSidebar,
        autoOpenSidebar
    }
}