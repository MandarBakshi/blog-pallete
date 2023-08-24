import React from 'react';
import '../index.css';
import imagePlaceholder from '../assets/image_placeholder.png';

function Home() {
  return (
    <div className='container'>
      <div className="row align-items-start">
        <div className='col-sm-12 col-lg-7'>
          <div className="card m-3">
            <div className="card-body">
              <div className='img-responsive-container'>
                <img src={imagePlaceholder} />
              </div>
              <h6 className='fw-bold card-title line-clamp-webkit-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eaque, possimus voluptatum consequuntur aut dolorem odit assumenda consectetur fuga neque.
              </h6>
              <p className="card-text line-clamp-webkit-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam vel incidunt non magni facilis, provident tempora quasi doloremque sapiente modi debitis quas libero nostrum accusamus impedit porro illo dicta nihil.
              </p>
            </div>
          </div>

          <h4 className="fw-bold m-3">Featured Posts</h4>

          <div className="row">
            {
              [1, 2, 3, 4, 5, 6].map((post, index) => {
                return (
                  <div key={post} className="col-md-6">
                    <div className="card m-2">
                      <div className="card-body">
                      {/* <div className='img-responsive-main'><img src="https://fastly.picsum.photos/id/866/200/700.jpg?hmac=zCj49oVljZShOkxADpbu6xGWCFX_TWx3bX8Cz9GA7Io" /></div> */}
                      <div className='img-responsive-container'>
                        <img src={imagePlaceholder} />
                      </div>
                        <h6 className='fw-bold card-title line-clamp-webkit-2'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eaque, possimus voluptatum consequuntur aut dolorem odit assumenda consectetur fuga neque.
                        </h6>
                        <p className="card-text line-clamp-webkit-2">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam vel incidunt non magni facilis, provident tempora quasi doloremque sapiente modi debitis quas libero nostrum accusamus impedit porro illo dicta nihil.
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>

        </div>

        {/* sticky sidebar */}
        <div className='col-lg-5' style={{position: "sticky", top: "140px" }}>
          <div className="card m-3">
            <div className="card-body">
              <div className="input-group my-3 mx-1">
                <input className='form-control' type="text" placeholder='Search topics' />
                <button className='btn btn-success' type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
              </div>
              <div className="my-3 mx-1">
                <h6>Popular posts</h6>
                <div>
                  {
                    [1, 2, 3, 4].map((post, index) => {
                      return (
                        <div key={post} className='card m-1'>
                          <div className="card-body">
                            <h6 className="card-title line-clamp-webkit-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, totam!
                            </h6>
                            <p className='card-text line-clamp-webkit-2'>
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus inventore harum fugit placeat tenetur modi, magni temporibus in excepturi!
                            </p>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home
