import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import LoginAccount from "./Components/Accounts/Login/Login"
import Home from './Components/Accounts/Dashboard/Home/Home';
import Register from "./Components/Accounts/Register/Register"
import { UserAuthContextProvider } from './Components/Accounts/ContextAPI/UserAuthContext';
import { BlogDetailsProvider } from './Components/Accounts/ContextAPI/BlogContext';
import ProtectedRoute from "./Components/Accounts/ContextAPI/ProtectedRoute";
import Blogs from './Components/Blogs/Blogs/Blogs'
import Blog from './Components/Blogs/Blog/Blog';
import AddBlog from './Components/Accounts/Dashboard/AddBlog/AddBlog';
import Loader from './Components/Accounts/ContextAPI/Loader';
import ViewBlog from './Components/Accounts/Dashboard/ViewBlog/ViewBlog';
import PreviewBlogs from './Components/Accounts/Dashboard/PreviewBlog/PreviewBlogs';
import DeleteBlog from './Components/Accounts/Dashboard/DeleteBlog/DeleteBlog';
import Profile from './Components/Accounts/Dashboard/Profile/Profile';

function App() {

  return (
    <div>
      <UserAuthContextProvider>
        <BlogDetailsProvider>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/account" element={<LoginAccount />} />
              <Route exact path='/dashboard' element={<ProtectedRoute><Loader><Home /></Loader></ProtectedRoute>} />
              <Route exact path="/dashboard/create-blog" element={<ProtectedRoute><Loader><AddBlog /></Loader></ProtectedRoute>} />
              <Route exact path="/dashboard/view-blogs" element={<ProtectedRoute><Loader><ViewBlog /></Loader></ProtectedRoute>} />
              <Route exact path="/dashboard/delete-blogs" element={<ProtectedRoute><Loader><DeleteBlog /></Loader></ProtectedRoute>} />
              <Route exact path="/preview-blog/:blog_id" element={<ProtectedRoute><Loader><PreviewBlogs /></Loader></ProtectedRoute>} />
              <Route exact path="/:user_id" element={<ProtectedRoute><Loader><Profile/></Loader></ProtectedRoute>} />
              

              <Route exact path='/register' element={<Register />} />


              <Route exact path='/blogs' element={<Blogs />} />
              <Route exact path='/blogs/:blog_id' element={<Blog />} />

            </Routes>
          </BrowserRouter>
        </BlogDetailsProvider>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;