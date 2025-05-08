import React, { useState } from 'react'
import Header from './header'
import Note from './note'
import Footer from './footer'
import notes from './notes'
import CreateArea from './create_area'
import './style.css'

function FetchNotes(notes){
    return(
        <div>
            <Note title = {notes.title} content = {notes.content}/>
        </div>
    )
}

function App(){
    const [notes, setNotes] = useState([])
    function addNote(newNote){
        setNotes(prevNotes=>{
            return [...prevNotes, newNote]
        })
    }

function deleteNote(id){
    setNotes(prevNotes=>{
        return prevNotes.filter((noteItem, index)=>{
            return index !== id
        })
    })
}   

    return(
        <div>
            <Header/>
            <CreateArea onAdd = {addNote}/>
            {notes.map((noteItem, index) => {
                return <Note key = {index} id = {index} title = {noteItem.title} content = {noteItem.content} onDelete = {deleteNote}/>
            })}
            <Footer/>
        </div>
    )
}

export default App