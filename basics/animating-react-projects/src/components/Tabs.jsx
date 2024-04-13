import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Tabs({title, isActiveFunction, isActive}){

    console.log(`title: ${title}`);

    return (
        <li style={{listStyleType: "none"}}>
            <button
                style={{ width: "200px", height: "30px", backgroundColor: "cyan", border: "none"}}
                onClick={() => isActiveFunction(title)}>
                {title}
            </button>
           {isActive &&  <motion.div layoutId="tab-underline" style={{width: "200px", height: "2px", backgroundColor: "white" }}/>}
        </li>
    )
}