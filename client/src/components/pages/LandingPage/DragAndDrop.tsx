import styles from "../../styles/draganddrop.module.scss"
import { DndContext, DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";
import { arrayMove, rectSortingStrategy, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

interface ElementI {
    id:number,
    heading: string,
    img: string
}

function Element ({id, heading, img}:ElementI) {
 
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id});
    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }

    return (
        <div key={ id }
             ref={setNodeRef}
             style={style}
             {...attributes}
             {...listeners}
             className={styles["element-container"]}>
            <img src={img} alt="" />
            <h3>{ heading }</h3>
        </div>  
    )
}



function DraggableComponent () {
    const [items,setItems] = useState([
        {id: 1, heading: "Introverted Feeling"},
        {id: 2, heading: "Extraverted Feeling"},
        {id: 3, heading: "Introverted Thinking"},
        {id: 4, heading: "Extraverted Thinking"},
        {id: 5, heading: "Introverted Intuition"},
        {id: 6, heading: "Extraverted Intuition"},
        {id: 7, heading: "Introverted Sensing"},
        {id: 8, heading: "Extraverted Sensing"},
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
                                <Element key={i} id={e.id} heading={e.heading} img="" />
                            ))
                        }
                    </div>
                </SortableContext>
            </DndContext>
        )
    }

export default DraggableComponent;