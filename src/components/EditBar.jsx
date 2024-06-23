import { Link } from 'react-router-dom';

const EditBar = ({ title, content }) => {
    const exportNote = () => {
        const blob = new Blob([`${content}`], { type: 'text/plain' });
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = `${title}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid px-3 d-flex justify-content-between">
                <Link to="/">
                    <button className="btn btn-outline-light" type="button">
                        <i className="bi bi-chevron-compact-left"></i>
                    </button>
                </Link>
                <div>
                    <button type="button" className="btn btn-secondary" onClick={exportNote}>Export Note</button>
                </div>
            </div>
        </nav>
    );
}

export default EditBar;