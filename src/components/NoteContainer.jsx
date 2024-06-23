import React, { useState, useEffect } from 'react';

const NoteContainer = ({ title, setTitle, content, setContent, id, setId }) => {
    const [tempTitle, setTempTitle] = useState(title);

    useEffect(() => {
        if (id) {
            const notes = JSON.parse(localStorage.getItem('notes')) || [];
            const note = notes.find(note => note.id === id);
            if (note) {
                setTempTitle(note.title);
                setContent(note.content);
            }
        }
    }, [id, setContent]);

    const handleTitleChange = (event) => {
        setTempTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const submitNote = () => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        if (id) {
            const updatedNotes = notes.map(note => note.id === id ? { ...note, title: tempTitle, content } : note);
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
        } else {
            const newId = notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1;
            notes.push({ id: newId, title: tempTitle, content });
            localStorage.setItem('notes', JSON.stringify(notes));
            setId(newId);
        }
        setTitle(tempTitle);
    };

    return (
        <section className="mt-3 p-3">
            <div className="container d-flex flex-column align-items-center">
                <h1>{tempTitle}</h1>
                <input className="my-2" value={tempTitle} onChange={handleTitleChange} type="text" placeholder='Set Title' />
                <div className="w-75 p-2">
                    <textarea
                        className="form-control"
                        rows="15"
                        placeholder="Write your note here..."
                        value={content}
                        onChange={handleContentChange}
                    ></textarea>
                </div>
                <button onClick={submitNote} className="btn btn-primary mt-2">Save Note</button>
            </div>
        </section>
    );
};

export default NoteContainer;