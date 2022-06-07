import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/statics/footer/Footer'
import Login from './pages/login/Login';
import RegisterUser from './pages/registerUser/RegisterUser';
import ListThemes from './components/themes/listThemes/ListThemes';
import ListPosts from './components/posts/listPosts/ListPosts';
import RegisterPosts from './components/posts/registerPosts/RegisterPosts';
import RegisterThemes from './components/themes/registerThemes/RegisterThemes';
import DeletePosts from './components/posts/deletePosts/DeletePosts';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/Store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/cadastrousuario" element={<RegisterUser />} />

          <Route path="/temas" element={<ListThemes />} />

          <Route path="/posts" element={<ListPosts />} />

          <Route path="/formularioPostagem" element={<RegisterPosts />} />

          <Route path="/formularioPostagem/:id" element={<RegisterPosts />} />

          <Route path="/formularioTema" element={<RegisterThemes />} />

          <Route path="/formularioTema/:id" element={<RegisterThemes />} />

          <Route path="/deletarPostagem/:id" element={<DeletePosts />} />

          <Route path="/deletarTema/:id" element={<DeletePosts />} />

        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
