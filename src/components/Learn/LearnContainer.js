import React from "react";
import LearnList from "./LearnList"
import AddLearn from "./AddLearn"
import Search from "./Search";
import {useState} from 'react';
import {useEffect } from 'react';
function LearnContainer() {
    const[ learnItems, setLearnItems ] = useState ([]);
    const[ searchTerm, setSearchTerm] = useState ('')
    const [sortBy, setSortBy] = useState("");

    const handleSort = (e) => {
        let newList = [...learnItems]
        setSortBy(e.target.value);
        setLearnItems((newList.sort((a,b) => 
          sortBy !== "name" ? a.name.localeCompare(b.name) : a.description.localeCompare(b.description)
        )))
      } 

    useEffect(() => {
        fetch("https://my-cool-projs.herokuapp.com/learnItems")
        .then ((res) => res.json())
        .then ((learnItemsArray ) => {
            setLearnItems (learnItemsArray)
        })
    }, []);
    function handleAddLearnItems(newLearnItem) {
        const updatedLearnItemsArray = [...learnItems, newLearnItem];
        setLearnItems(updatedLearnItemsArray);
    }
    const displayedLearnItems = learnItems.filter((learnItem) =>{
        return learnItem.description.toLowerCase().includes(searchTerm.toLowerCase())
    });
    return (
        <div className= "LearnContainer">
            <br /> <br />
            <AddLearn onAddLearn = {handleAddLearnItems}/>
            <Search searchTerm = {searchTerm} onSearchChange = {setSearchTerm} sortBy={sortBy} handleSort={handleSort} />
            <LearnList learnItems = {displayedLearnItems}/>
        </div>
    )
};
export default LearnContainer