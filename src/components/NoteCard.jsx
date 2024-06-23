import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoteCard = ({ id, title, content, onDelete }) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/edit?id=${id}`);
    };

    return (
        <div className="card w-75 mb-2 cursor-pointer rounded h-100" role="button" onClick={handleEdit}>
            <div className="card-body d-flex flex-column">
                <div className='d-flex justify-content-between'>
                    <h5 className="card-title">{title}</h5>
                    <button type="button" className="btn-close" aria-label="Close" onClick={(e) => { e.stopPropagation(); onDelete(id); }}></button>
                </div>
                <p className="card-text mt-auto">{content.length > 30 ? `${content.substring(0, 30)}...` : content}</p>
            </div>
        </div>
    );
};

export default NoteCard;