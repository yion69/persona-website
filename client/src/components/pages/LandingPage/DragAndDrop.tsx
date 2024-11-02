import styles from "../../styles/draganddrop.module.scss"
import { DndContext, DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";
import { arrayMove, rectSortingStrategy, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { motion, useSpring } from "framer-motion";
import functions from "../../../assets/cognitive-functions/functions";

interface ElementI { id:number, img: string }

function Element ({id, img}:ElementI) {
    
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id});
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }
    return (
        <motion.div 
             drag
             dragElastic={0.8}
             dragConstraints={{left:0, right:0, top: 0, bottom: 0}}
             dragTransition={{bounceDamping: 10, bounceStiffness: 100}}
             key={ id }
             ref={setNodeRef}
             style={style}
             {...attributes}
             {...listeners}
             className={styles["element-container"]}>
            <img src={img}  alt="NI" />
        </motion.div>  
    )
}



function DraggableComponent () {
    const [items,setItems] = useState([
        {id: 1, img: functions.Fe},
        {id: 2, img: functions.Fi},
        {id: 3, img: functions.Ne},
        {id: 4, img: functions.Ni},
        {id: 5, img: functions.Te},
        {id: 6, img: functions.Ti},
        {id: 7, img: functions.Se},
        {id: 8, img: functions.Si},
    ]);
    const getItemPosition = (id:UniqueIdentifier) => items.findIndex(item => item.id === id);
    
    const onDragEnd = (event:DragEndEvent) => {
        const {active, over} = event;
    
        if(active.id === over!.id) { return };
        setItems(prev => {
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
                                <Element key={i} id={e.id} img={e.img} />
                            ))
                        }
                    </div>
                </SortableContext>
            </DndContext>
        )
    }

export default DraggableComponent;