import styles from "../../styles/draganddrop.module.scss"
import { DndContext, DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";
import { arrayMove, rectSortingStrategy, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ReactElement, useState } from "react";
import { motion } from "framer-motion";
import { ChartColumn, Earth, Heart, Hourglass, LibraryBig, Lightbulb, Puzzle, Target } from "lucide-react";

interface ElementI { id:number, text:string, img: ReactElement }

function Element ({id, text, img}:ElementI) {
    
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id});
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }
    return (
        <motion.div 
             drag
             dragElastic={1}
             dragConstraints={{left:0, right:0, top: 0, bottom: 0}}
             dragTransition={{bounceDamping: 10, bounceStiffness: 100}}
             key={ id }
             ref={setNodeRef}
             style={style}
             {...attributes}
             {...listeners}
             className={styles["element-container"]}>
                {img}
                <p>{text}</p>
        </motion.div>  
    )
}



function DraggableComponent () {
    const [items,setItems] = useState([
        {id: 1, text: "Introverted Thinking", img: <Puzzle size={80}/>},
        {id: 2, text: "Extraverted Thinking", img: <ChartColumn size={80} />},
        {id: 3, text: "Introverted Feeling", img: <Heart size={80} />},
        {id: 4, text: "Extraverted Feeling", img: <Earth size={80} />},
        {id: 5, text: "Introverted Sensing", img: <LibraryBig size={80} />},
        {id: 6, text: "Extraverted Sensing", img: <Target size={80} />},
        {id: 7, text: "Introverted Intuition", img:  <Hourglass size={80} />},
        {id: 8, text: "Extraverted Intuition", img: <Lightbulb size={80} />},
    ]);
    const getItemPosition = (id:UniqueIdentifier) => items.findIndex(item => item.id === id);
    
    const onDragEnd = (event:DragEndEvent) => {
        const {active, over} = event;
    
        if(active.id === over!.id) { return };
        setItems(_ => {
            const originalPosition = getItemPosition(active.id);
            const newPosition = getItemPosition(over!.id);
            const newArray = arrayMove(items, originalPosition, newPosition); 
            return newArray;
        })
    }

    return (
            <DndContext onDragEnd={onDragEnd}>
                <SortableContext items={items} strategy={rectSortingStrategy}>
                    <div className={styles["drag-component-container"]}>
                        {
                            items.map((e,i) => (
                                <Element key={i} id={e.id} text={e.text} img={e.img} />
                            ))
                        }
                    </div>
                </SortableContext>
            </DndContext>
        )
    }

export default DraggableComponent;