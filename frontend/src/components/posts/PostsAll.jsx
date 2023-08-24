import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './post_item.css';
import userPlaceholder from '../../assets/user_placeholder.png';
import imagePlaceholder from '../../assets/image_placeholder.png';

function PostItem(props) {
  return (
    <div className="col-sm-8 col-md-6 col-lg-4">
      <div className="card m-3">
        <div className="card-header d-flex align-items-center">
          <img className="avatar ms-1 me-2 my-1" src={userPlaceholder} />
          <div>
            <a className="fw-semibold" style={{ display: "block" }} href="#">{props.postData.username}</a>
            <span style={{ display: "block" }}>{props.postData.date_posted}</span>
          </div>
        </div>
        <div className="card-body">
          <img className="img-responsive my-1 mx-1" src={imagePlaceholder} />
          <h6 className="card-title fw-semibold line-clamp-2">
            {props.postData.post_title}
          </h6>
          <p className="card-text line-clamp-2">
            {props.postData.post_content}
          </p>
        </div>
        <div className="card-footer d-flex justify-content-end">
          <Link className="btn btn-primary" to={`/posts/${props.postData.postid}`}>Read more</Link>
        </div>
      </div>
    </div>
  );
}


function LoadingSpinner() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{height: "70vh"}}>
      <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>
    </div>
  );
}


function PostsAll() {

  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let url = `http://localhost:7000/api/posts/get-posts/`;
    let controller = new AbortController();
    setLoading(true);

    fetch(url, { signal: controller.signal }).
      then(resPromise => resPromise.json()).
      then(res => {
        console.log(res);
        setLoading(false);
        setPosts(res.result);
      }).
      catch(err => console.warn(err));

  }, []);

  return (
    <div className='container'>
      {
        isLoading === true ? <LoadingSpinner /> : <div>
          <div className="row">
            {
              posts.map((post) => {
                return (
                  <PostItem key={post.postid} postData={post} />
                );
              })
            }
          </div>
        </div>
      }
    </div>
  )
}

export default PostsAll
