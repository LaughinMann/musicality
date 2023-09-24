import { useSession } from "next-auth/react";
import styles from "./center.module.css";
import React, {useEffect, useState} from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "@/app/components/draggable/draggable";
import { Droppable } from "@/app/components/droppable/droppable";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";

export default function Center() {
  const { data: session } = useSession();
  const genres = [
    {
      name: "Pop",
      color: "#4F34CA",
    },
    {
      name: "Rap",
      color: "#FB536A",
    },
    {
      name: "Hip Hop",
      color: "#e1d529",
    },
    {
      name: "Urban Latino",
      color: "#48eac4",
    },
    {
      name: "Trap Latino",
      color: "#19CC59",
    },
    {
      name: "Dance Pop",
      color: "#8419cc",
    },
    {
      name: "Reggaeton",
      color: "#1937cc",
    },
    {
      name: "Pop Rap",
      color: "#ba19cc",
    },
    {
      name: "Modern Rock",
      color: "#19cc8d",
    },
    {
      name: "Latin Pop",
      color: "#199ccc",
    },
    {
      name: "Classic Rock",
      color: "#9019cc",
    },
    {
      name: "Trap",
      color: "#75cc19",
    },
    {
      name: "K-pop",
      color: "#1928cc",
    },
    {
      name: "EDM",
      color: "#cc19a2",
    },
    {
      name: "Country",
      color: "#2bcc19",
    },
    {
      name: "Sleep",
      color: "#cc4f19",
    },
    {
      name: "Rain",
      color: "#cc1949",
    },
    {
      name: "Indie",
      color: "#3a9d83",
    },
  ];

  const DroppedGenre = (props) => {
    const style = {
      backgroundColor: props.color,
      width: 150,
      height: 40,
      paddingTop: 6,
      color: "white",
      textAlign: "center",
      borderRadius: 10,
      userSelect: "none"
    }

    return (
        <div style={style}>
          {props.name}
        </div>
    );
  }

  const [items, setItems] = useState(
    genres.map((genre) => {
      return [genre.name, genre.color];
    }),
  );

  const [parent, setParent] = useState(null);
  const [selectedGenres, setSelectedGenres] = useState([]);

  return (
    <div className={styles.centerContainer}>
      <h1 className="text-3xl leading-loose">
        Hey <span className={styles.greetingName}>{session?.user?.name}</span>,
        start creating your musical journey!
      </h1>

      <DndContext
        autoScroll={false}
        modifiers={[restrictToWindowEdges]}
        onDragEnd={handleDragEnd}
      >
        <div className="flex flex-wrap justify-center gap-8 mx-auto w-1/2 mt-6">
          {items.map(function (genre, index) {
            return (
              <Draggable key={index + 1} id={index + 1} name={genre[0]} color={genre[1]}/>
            );
          })}
        </div>
        <h2 className={"text-xl mt-16"}>Drag your genres from <strong>above</strong> into the box in the order of how you want them to transition, afterwards click "Generate Musical Journey" to create a musical journey!</h2>
        <Droppable id={"drop"}>
          {selectedGenres.map(index => {
            return (
                <DroppedGenre key={"dropped" + index} name={genres[index - 1].name} color={genres[index - 1].color}></DroppedGenre>
            )
          })}
        </Droppable>
      </DndContext>
      <h2 className={"text-xl mt-16 mb-4"}>Select how long the transitions in between each genre should be: </h2>
      <div className={"flex gap-5 mb-8"}>
          <input type="radio" value="short" name="transition" checked={true} /> Short Transition
          <input type="radio" value="medium" name="transition" /> Medium Transition
          <input type="radio" value="long" name="transition" /> Long Transition
      </div>

      <button className={styles.greenBtn}>
        Generate Musical Journey
      </button>
      <button className={styles.greenBtn}>
        Reset Journey
      </button>
    </div>
  );

  function handleDragEnd(event) {
    const other = event;
    if (event.over && event.over.id === "droppable") {
      setSelectedGenres(prevState => [...prevState, other.active.id])
    }
  }
}
