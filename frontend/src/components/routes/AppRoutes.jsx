import {Route, Routes} from 'react-router-dom';
import Home from '../Home';
import PageNotFound from '../misc/PageNotFound'
import PostsAll from '../posts/PostsAll';
import PostSpecific from '../posts/PostSpecific';
import About from '../extras/About';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/posts' element={<PostsAll />} />
      <Route path='/posts/:postid' element={<PostSpecific />} />

      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes
