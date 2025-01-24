import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import ProtectedRoute from './ProtectedRoute'
import Login from "./Pages/Login"
import CreateAccount from "./Pages/CreateAccount"
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'
import Post from './Pages/Post'
import Portfolio from './Pages/Portfolio'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {AuthContextProvider} from './Hooks/AuthContext'
import { IDContextProvider } from './Hooks/userContext';
import Create from './Pages/Create';
import Social from './Pages/Social';
import NotesDashboard from './Pages/Notes/NotesDashboard';
import NotesList from './Pages/Notes/NotesList';
import NoteViewer from './Pages/Notes/NoteViewer';
import CreateNote from './Pages/Notes/CreateNote';
import BookReader from './Pages/Notes/BookReader';
import ReadingRoomContextProvider from './Hooks/ReadingRoomContextProvider';
import PublicNotes from './Pages/Notes/PublicNotes';
import EditNote from './Pages/Notes/EditNote';
import RAGBot from './Pages/Chatbots/RAGBot';
import MyOrders from "./Pages/MyOrders";

function App() {
  return (
    <AuthContextProvider>
      <IDContextProvider>
        <ReadingRoomContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/create"
                element={
                  <ProtectedRoute>
                    <Create />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/social"
                element={
                  <ProtectedRoute>
                    <Social />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/post/:id"
                element={
                  <ProtectedRoute>
                    <Post />
                  </ProtectedRoute>
                }
              />
              <Route path="/portfolio/:id" element={<Portfolio />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/marketplace" element={<MyOrders />} />
              <Route path="/orders" element={<MyOrders />} />
              <Route
                path="/notes"
                element={
                  <ProtectedRoute>
                    <NotesDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/mynotes"
                element={
                  <ProtectedRoute>
                    <NotesList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/note-viewer/:id"
                element={
                  <ProtectedRoute>
                    <NoteViewer />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/notes-create"
                element={
                  <ProtectedRoute>
                    <CreateNote />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/notes-pdf"
                element={
                  <ProtectedRoute>
                    <BookReader />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/notes-public"
                element={
                  <ProtectedRoute>
                    <PublicNotes />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/note/edit/:id"
                element={
                  <ProtectedRoute>
                    <EditNote />
                  </ProtectedRoute>
                }
              />

              <Route path="/rag-bot" element={<RAGBot />} />
            </Routes>
          </BrowserRouter>
        </ReadingRoomContextProvider>
      </IDContextProvider>
    </AuthContextProvider>
  );
}

export default App;
