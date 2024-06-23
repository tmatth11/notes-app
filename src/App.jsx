import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import NoteList from './pages/NoteList';
import NoteEditor from './pages/NoteEditor';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<NoteList/>} />
                <Route path="/edit" element={<NoteEditor/>} />
                <Route path="*" element={<NotFoundPage/>} />
            </>
        )
    );

    return (
        <RouterProvider router={router} />
    )
}

export default App
