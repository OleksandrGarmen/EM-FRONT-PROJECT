import { getReview } from '../../../localstorage/localStorageHelper'
import LayoutPage from '../../../layout/layoutPage'
import { Review } from '../../../types/Feedback'
import { useParams } from 'react-router'
import './style.css'

const Comments = () => {
    const { id } = useParams<{ id: string }>()
    const reviews: Review[] = getReview()
    const review = reviews.find(r => r.id === Number(id))


    if (!review) return <p>Review not found</p>

    return (
        <LayoutPage>
            <div className='comments-title'>
                <h2>Our Reviews</h2>
            </div>
            <div className='comments-container'>
                <div className='comments-image-container'>
                    <img src={review.avatar_url} alt="User avatar" className='comments-image'/>
                </div>
                <h2>{review.full_name}</h2>
                <p>Rating: {review.rating}</p>
                <p className='comments-text'>{review.review_text}</p>
            </div>
        </LayoutPage>
    )
}

export default Comments
