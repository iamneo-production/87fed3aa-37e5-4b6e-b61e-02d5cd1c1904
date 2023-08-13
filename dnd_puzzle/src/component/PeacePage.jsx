import '../styles/PeacesPage.css';
import { useDrag } from "react-dnd";




export const PeaceComponent = ({ setpuzzlePeaces,id, url, backgroundPosition }) => {


    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: {id:id,url:url},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    return (
        <div id={id}
        ref={drag}
            style={
                {
                    backgroundSize: `202px 204px`,
                    backgroundPosition: `${backgroundPosition}`,
                    backgroundImage: isDragging? null:`url(${url})`,
                    border: isDragging ? "5px white" : "0px",
                    // cursor:isDragging ? "grab": "default",

                }

            }>
        </div>
    );
}

