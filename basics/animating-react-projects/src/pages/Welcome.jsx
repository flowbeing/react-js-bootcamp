import { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";

import { AnimatePresence, motion } from "framer-motion";
import html2canvas from "html2canvas";

import Tabs from "../components/Tabs";
import cityImg from '../assets/city.jpg';
import heroImg from '../assets/hero.png';
import cloudMan from "../assets/cloud-man.jpeg";

export default function WelcomePage() {

  const { data } = useQuery({
    queryKey: ['initialQuery', {id: 1}],
    queryFn: () => { fetch("http://somedomain.com")},
    enabled: true,
    staleTime: 1000
  });

  const elementToCaptureRef = useRef();

  function captureScreenshot() {
    var canvasPromise = html2canvas(elementToCaptureRef.current, {
      dpi: 23040, //11520, // 5760,
      scale: 10,
      useCORS: true
    });
    canvasPromise.then((canvas)=> {
      var dataURL = canvas.toDataURL("image/jpeg");
      
      // Create an image element from the data URL
      var img = new Image();
      img.src = dataURL;
      img.download = dataURL;
      // Create a link element
      var a = document.createElement("a");
      a.innerHTML = "DOWNLOAD";
      a.target = "_blank";
      // Set the href of the link to the data URL of the image
      a.href = img.src;
      // Set the download attribute of the link
      a.download = img.download;
      // Append the link to the page
      document.body.appendChild(a);
      // Click the link to trigger the download
      a.click();
    });

  }

  const [isActive, setIsActive] = useState({
    tabOne: true,
    tabTwo: false,
    tabThree: false
  });
    

  // useEffect(() => {
  //     if (title=="Success"){
  //         setIsActive(!isActive);
  //     }

  //     console.log(`isActive: ${isActive}`);

  // }, []);

  console.log(`isActive: ${isActive}`);

  function isActiveFunction(val){

    if(val == "Success"){

      setIsActive((prevValue) => {
        // const { tabOne, tabTwo, tabThree } = {...prevValue};
        return {...prevValue, tabOne:true, tabTwo:false, tabThree:false}
      });
      
    }

    if(val == "In Progress"){

      setIsActive((prevValue) => {
        // const { tabOne, tabTwo, tabThree } = {...prevValue};
        return {...prevValue, tabOne:false, tabTwo:true, tabThree:false}
      });
      
    }

    if(val == "Edit"){

      setIsActive((prevValue) => {
        // const { tabOne, tabTwo, tabThree } = {...prevValue};
        return {...prevValue, tabOne:false, tabTwo:false, tabThree:true}
      });
      
    }
  }

  const [listItems, setListItem] = useState(["itemOne", "itemTwo", "itemThree"]);

  function removeListItem(itemToRemove){

    setListItem(prevListItems => [...prevListItems].filter(item => item != itemToRemove));

  }


  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Tabs title={"Success"} isActiveFunction={isActiveFunction } isActive={isActive.tabOne}/>
        <Tabs title={"In Progress"} isActiveFunction={isActiveFunction} isActive={isActive.tabTwo}/>
        <Tabs title={"Edit"} isActiveFunction={isActiveFunction} isActive={isActive.tabThree}/>
      </div>

      <AnimatePresence>
        <ul style={{ width: "100vw" }}>
          {listItems.map((title) =>  
              <motion.li 
                key={title} 
                onClick={() => removeListItem(title)}
                drag={true}
                whileTap= {{opacity: [ 1, 0 ], x: [0, -300], transition: { duration: 0.25, bounce: false}}}
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  backgroundColor: "white", 
                  color: "black", 
                  listStyleType: "none", 
                  width: "20rem",
                  height: "3rem", 
                  margin: "1rem auto",
                  borderRadius: "0.4rem",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                    {title}
              </motion.li>
            )
          }
        </ul>
      </AnimatePresence>
      
      <main id="welcome-content">
        <section>
          <h2>There&apos;s never been a better time.</h2>
          <p>
            With our platform, you can set, track, and conquer challenges at
            your own pace. Whether it&apos;s personal growth, professional
            achievements, or just for fun, we&apos;ve got you covered.
          </p>
        </section>

        <section>
          <h2>Why Challenge Yourself?</h2>
          <p>
            Challenges provide a framework for growth. They push boundaries,
            test limits, and result in genuine progress. Here, we believe
            everyone has untapped potential, waiting to be unlocked.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Custom challenge creation: Set the rules, define your pace.</li>
            <li>
              Track your progress: See your growth over time with our analytics
              tools.
            </li>
            <li>
              Community Support: Join our community and get motivated by peers.
            </li>
          </ul>
        </section>

        <section>
          <h2>Join Thousands Embracing The Challenge</h2>
          <p>
            “I never realized what I was capable of until I set my first
            challenge here. It&apos;s been a transformative experience!” - Alex
            P.
          </p>
          {/* You can add more testimonials or even a carousel for multiple testimonials */}
        </section>
      </main>
    </>
  );
}
