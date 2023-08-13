import { useState, useEffect } from "react";
import '../styles/PuzzlePage.css';

export const PuzzleComponent = () => {

    const [puzzlePeaces,setpuzzlePeaces] = useState([]);

    useEffect(() => {
        let data;
        async function InitialImage() {
           let res= await fetch('https://ide-dfadcecfdbdededffebfebeececeacfebbcedbfff.premiumproject.examly.io/proxy/8080/api')
            data= await res.json();
            setpuzzlePeaces(data)
            }           

            InitialImage();
            console.log(data)
    }, [])


return (
    <>
        <div className="jigsaw-puzzle-main">


            <div className="part" id="part1"></div>
            <div className="part" id="part2"></div>
            <div className="part" id="part3"></div>
            <div className="part" id="part4"></div>
            <div className="part" id="part5"></div>
            <div className="part" id="part6"></div>
            <div className="part" id="part7"></div>
            <div className="part" id="part8"></div>
            <div className="part" id="part9"></div>



        </div>
    </>
);

}