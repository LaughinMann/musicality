import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import { useSortable } from "@dnd-kit/sortable";
import styles from "@/app/components/center/center.module.css";

export function Draggable(props) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.id,
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;


    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <div
                className={`${styles.genreDiv}`}
                style={{ backgroundColor: `${props.color}` }}
                key={props.id}
            >
                {props.name}
            </div>
        </div>
    );
}