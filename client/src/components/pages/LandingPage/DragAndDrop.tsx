import styles from "../../styles/draganddrop.module.scss"
import { DndContext, DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";
import { arrayMove, rectSortingStrategy, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

interface ElementI {
    id:number,
    heading: string,
    content: string,
}

function Element ({id, heading, content}:ElementI) {
 
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
            
            <h3>{ heading }</h3>
            <p>{ content }</p>
        </div>  
    )
}



function DraggableComponent () {
    const [items,setItems] = useState([
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
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
                                <Element id={e.id} content="uh" heading={`Element-${e.id}`} />
                            ))
                        }
                    </div>
                </SortableContext>
            </DndContext>
        )
    }

export default DraggableComponent;