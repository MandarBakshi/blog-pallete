import {useParams} from 'react-router-dom';

function PostSpecific() {
  const params = useParams();
  return (
    <div>Your params are: {JSON.stringify(params)}</div>
  )
}

export default PostSpecific
