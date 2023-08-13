import { useState, useEffect } from "react";
import { PeaceComponent } from './PeacePage'
import { useDrop } from "react-dnd";
import '../styles/PuzzlePage.css';

export const PuzzleComponent = () => {


  
    const [puzzlePeaces, setpuzzlePeaces] = useState([]);
    const [dummyPeaces, setDummyPeaces] = useState([]);

  

    

    useEffect(() => {
        let data;
        async function InitialImage() {
            let res = await fetch('https://ide-dfadcecfdbdededffebfebeececeacfebbcedbfff.premiumproject.examly.io/proxy/8080/api')
            data = await res.json();
            setpuzzlePeaces(data);
            
            
        }

        InitialImage();
      

        return () => {
            InitialImage()
        }


    }, [])

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImage(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    const addImage = (item) => {
        console.log(puzzlePeaces)
        console.log(dummyPeaces);
        console.log(item);
        
    }


    return (
        <>

            <div className="body">


                <div className="jigsaw-puzzle-drop" ref={drop}>

                    <PeaceComponent />

                </div>

                <div className="jigsaw-puzzle-drag">

                    {   
                        puzzlePeaces.map((peaces) => {
                            // console.log(peaces)
                            return <PeaceComponent
                                setpuzzlePeaces={setpuzzlePeaces}
                                id={peaces.id}
                                url={peaces.url}
                                backgroundPosition={peaces.position}></PeaceComponent>
                        })
                    }

                </div>

            </div>




        </>
    );

}