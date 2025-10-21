import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import './App.css';

function App() {
    // State untuk menyimpan semua notes
    const [notes, setNotes] = useState([]);

    // Load notes dari localStorage saat aplikasi dimulai
    useEffect(() => {
        const savedNotes = localStorage.getItem('keepNotes');
        if (savedNotes) {
            setNotes(JSON.parse(savedNotes));
        }
    }, []); // Array kosong berarti ini hanya jalan sekali saat mount

    // Simpan notes ke localStorage setiap kali notes berubah
    useEffect(() => {
        localStorage.setItem('keepNotes', JSON.stringify(notes));
    }, [notes]); // Jalan setiap kali array notes berubah

    // Fungsi untuk menambah note baru
    const addNote = (noteData) => {
        const newNote = {
            id: Date.now(), // ID unik simpel pakai timestamp
            title: noteData.title,
            content: noteData.content,
            createdAt: new Date().toISOString(),
        };
        // Tambah note baru ke awal array
        setNotes([newNote, ...notes]);
    };

    // Fungsi untuk update note yang ada
    const updateNote = (id, updatedNote) => {
        setNotes(notes.map(note =>
            note.id === id ? updatedNote : note
        ));
    };

    // Fungsi untuk menghapus note
    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <div className="app">
            <Header />
            <main className="app-main">
                <NoteForm addNote={addNote} />
                <NotesList
                    notes={notes}
                    updateNote={updateNote}
                    deleteNote={deleteNote}
                />
            </main>
        </div>
    );
}

export default App;