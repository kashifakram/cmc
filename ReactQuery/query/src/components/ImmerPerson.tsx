import React from "react";
import { useImmer } from "use-immer";

const ImmerPerson = () => {

    let nextId = 3;
    const initialList = [
        { id: 0, title: 'Big Bellies', seen: false },
        { id: 1, title: 'Lunar Landscape', seen: false },
        { id: 2, title: 'Terracotta Army', seen: true },
    ];

    const initialPerson = {
        name: 'Niki de Saint Phalle',
        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    }

    const [person, updatePerson] = useImmer(initialPerson)
    const [list, updateList] = useImmer(initialList)

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {updatePerson(draft => {draft.artwork.title = e.target.value})}
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {updatePerson(draft => {draft.name = e.target.value})}
    const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {updatePerson(draft => {draft.artwork.city = e.target.value})}
        
  return (
    <>
        <label>
            Name: <input type="text" value={person.name} onChange={handleNameChange} name="" id="" />
        </label>
        <label>
            Title: <input type="text" value={person.artwork.title} onChange={handleTitleChange} name="" id="" />
        </label>
        <label>
            City: <input type="text" value={person.artwork.city} onChange={handleCityChange} name="" id="" />
        </label>
        <p>
            {person.artwork.title} by {person.name} is located at {person.artwork.city}
        </p>
        <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  )
}

export default ImmerPerson