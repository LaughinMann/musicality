import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props) {
    const {isOver, setNodeRef} = useDroppable({
        id: "droppable",
    });
    const style = {
        border: '5px dashed #2EB949',
        marginTop: 35,
        marginBottom: 35,
        display: "flex",
        alignItems: "center",
        paddingLeft: 5,
        gap: 10,
        borderRadius: 12,
        minHeight: 65,
        backgroundColor: isOver ? "#d7d7d7" : "#eaeaea"
    };


    return (
        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    );
}