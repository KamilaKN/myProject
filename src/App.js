import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from "./page/HomePage/HomePage"
import PostsPage from "./page/PostsPage/PostsPage"
import SinglePostPage from "./page/SinglePostPage/SinglePostPage"
import AboutPage from "./page/AboutPage/AboutPage"
import ProfilePage from "./page/ProfilePage/ProfilePage"
import RegisterPage from "./page/RegisterPage/RegisterPage"
import LoginPage from "./page/LoginPage/LoginPage"
import Footer from './components/Footer/Footer';
import CartPage from "./page/CartPage/CartPage"
import AddPostPage from './page/AddPostPage/AddPostPage';
import MyPostsPage from './page/MyPostsPage/MyPostsPage';

function App() {
  return (
    <>
    <Header/>
     <Routes>
        <Route path='' element={<HomePage/>}/>
        <Route path='/posts' element={<PostsPage/>}/>
        <Route path='/post/:id' element={<SinglePostPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/add' element={<AddPostPage/>}/>
        <Route path='/myposts' element={<MyPostsPage/>}/>
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
