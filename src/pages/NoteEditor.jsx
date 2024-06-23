import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import EditBar from '../components/EditBar';
import NoteContainer from '../components/NoteContainer';

const NoteEditor = () => {
    const [searchParams] = useSearchParams();
    const noteId = parseInt(searchParams.get('id'), 10);

    const [title, setTitle] = useState("New Note");
    const [content, setContent] = useState("");
    const [id, setId] = useState(noteId || null);

    useEffect(() => {
        if (id) {
            const notes = JSON.parse(localStorage.getItem('notes')) || [];
            const note = notes.find(note => note.id === id);
            if (note) {
                setTitle(note.title);
                setContent(note.content);
            }
        }
    }, [id]);

    return (
        <>
            <EditBar title={title} content={content} />
            <NoteContainer title={title} setTitle={setTitle} content={content} setContent={setContent} id={id} setId={setId} />
        </>
    );
};

export default NoteEditor;