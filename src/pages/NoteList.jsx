import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import NoteCard from '../components/NoteCard';

const NoteList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        let storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        storedNotes.sort((a, b) => b.id - a.id);
        setNotes(storedNotes);
    }, []);

    const handleDeleteNote = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    };

    return (
        <>
            <Navbar />
            <section className="mt-3 p-2">
                <div className="container d-flex flex-column align-items-center">
                    <h1 className="text-center mb-3">Your Notes</h1>
                    {notes.map(note => (
                        <NoteCard key={note.id} id={note.id} title={note.title} content={note.content} onDelete={handleDeleteNote} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default NoteList;