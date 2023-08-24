import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import imagePlaceholder from '../../assets/image_placeholder.png';
import userPlaceholder from '../../assets/user_placeholder.png';


function PostItem(props) {
  return (
    <div className='col-sm-12 col-lg-7'>
      <div className='card m-3'>
        <div className="card-body">
          <h4 className="card-title fw-bold my-2">{props.postData.post_title}</h4>
          <h6 className="fw-semibold my-2">{props.postData.date_posted}</h6>
          <div className='my-3'>
            {props.postData.post_content}
          </div>
          <hr />
          {/* <div>
            <h6 className="fw-semibold text-center">Blog posted by</h6>
            <div className='d-flex align-items-center justify-content-center'>
              <div style={{ width: "140px", height: "140px", margin: "20px" }}>
                <div className='img-responsive-container'>
                  <img src={userPlaceholder} />
                </div>
              </div>
              <div>
                <a className='my-1 py-1' style={{ display: "block" }} href='#'>@{props.postData.username}</a>
                <p className='my-1 py-1'>{props.postData.firstname} {props.postData.lastname}</p>
              </div>
            </div>
          </div> */}
          <AboutUser firstname={props.postData.firstname} lastname={props.postData.lastname} username={props.postData.username} />
        </div>
      </div>
    </div>
  );
}



function AboutUser(props) {
  return (
    <div>
      <h6 className="fw-semibold text-center my-3 fs-3">Blog posted by</h6>
      <div className='d-flex flex-wrap align-items-center justify-content-center ms-3 me-3'>
        <div style={{ width: "35%", margin: "20px"}}>
          <div className='img-responsive-container'><img src={userPlaceholder} /></div>
        </div>
        <div>
          <a className='my-1 py-1 text-decoration-none' href='#'>@{props.username}</a>
          <p className='my-1 py-1 display-6' style={{width: "calc(65%-25px)"}}>{props.firstname} {props.lastname}</p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quibusdam aspernatur ea sapiente dolorem quisquam debitis! Quibusdam in earum aliquam neque modi sequi, voluptatem nam?
      </p>
    </div>
  );
}



function StickySidebar(props) {
  return (
    <div className='col-lg-5 sticky-sidebar'>
      <div className="card m-3">
        <div className="card-body">
          <div className="input-group my-3 mx-1">
            <input className='form-control' type="text" placeholder='Search topics' />
            <button className='btn btn-success' type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
          {props.featured.length > 0 && <div className="my-3 mx-1">
            <h6 className='mb-2'>Featured posts</h6>
            <ul className='list-group'>
              {
                props.featured.map((post) => {
                  return (
                    <Link to={`/posts/${post.postid}`} key={post.postid} className='list-group-item list-group-item-action p-1'>
                      <div className="d-flex align-items-center flex-wrap">
                        <div style={{ width: "35%", margin: "10px", flexGrow: "0", flexShrink: "0", flexBasis: "auto" }}>
                          <div className="img-responsive-container">
                            <img src={imagePlaceholder} />
                          </div>
                        </div>
                        <p className='line-clamp-webkit-2' style={{ display: "inline-flex", width: "calc(65% - 50px)" }}>{post.post_title}</p>
                      </div>
                    </Link>
                  );
                })
              }
            </ul>
          </div>}
        </div>
      </div>
    </div>
  );
}


function LoadingSpinner() {
  return (
    <div style={{ height: "70vh" }} className="d-flex align-items-center justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}



function PostSpecific() {
  const params = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({});
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  if (!params.postid) navigate(`/`);

  useEffect(() => {
    setLoading(true);
    let url = `http://localhost:7000/api/posts/get-post/${params.postid}/`;
    let controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((resPromise) => { return resPromise.json() })
      .then(res => {
        setLoading(false);
        setPost(res.result[0]);
        setFeaturedPosts(res.recommended);
      })
      .catch(err => console.warn(err));

    return () => {
      controller.abort();
    }

  }, [params.postid]);

  return (
    <div className='container'>
      {isLoading === true ? <LoadingSpinner /> : <div className="row justify-content-center align-items-start">
        <PostItem postData={post} />
        <StickySidebar featured={featuredPosts} />
      </div>}
    </div>
  )
}

export default PostSpecific
