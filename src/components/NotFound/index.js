import { RotatingLines } from 'react-loader-spinner'
import './index.css'

const NotFound = () => {
    return (
        <div className='not-found-container'>
            <RotatingLines
                // height="96"
                // width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperClass="loading-spinner"
            />

            <h2><i>To Be Implemented...</i></h2>
        </div>
    )
}

export default NotFound