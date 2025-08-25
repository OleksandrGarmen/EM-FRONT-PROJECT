import './style.css'
import LayoutPage from '../../../layout/layoutPage'

const NotFoundPage = () => {
    return (
        <LayoutPage>
            <div>
               <p className='main-text'>Your link is wrong</p>
               <img className='main-photo' src='https://render.fineartamerica.com/images/rendered/default/flat/puzzle/images/artworkimages/medium/2/thinking-cat-douglas-sacha.jpg?&targetx=-62&targety=0&imagewidth=1125&imageheight=750&modelwidth=1000&modelheight=750&backgroundcolor=FFFFFF&orientation=0&producttype=puzzle-18-24&brightness=765&v=6'></img>
            </div>
        </LayoutPage>
    )
}

export default NotFoundPage
