import { useEffect } from 'react'
import SitebarButton from '../SitebarButton/index'
import { HeaderFixture } from '../../../../fixture/HeaderFixture'
import type { HeaderFixtureType } from '../../../../types/HeaderType'
import { FilteredHeader } from '../../../../utils/FiltredHeaderMenu';
import './style.css'
import LogoutButton from '../../../Common/Buttons/Logout';
import SubmitButton from '../../../Common/Buttons/SubmitButton';

const Sitebar = () => {
    let headerData:HeaderFixtureType[] = HeaderFixture
    const isAuthenticated = !!localStorage.getItem('isAuthenticated')

    const SingIn = () => {

    }

    const JoinUs = () => {

    }

    useEffect(() => {
        const hamMenu = document.querySelector(".ham-menu")
        const offScreenMenu = document.querySelector(".off-screen-menu")

        if (hamMenu && offScreenMenu) {
            const toggleMenu = () => {
                hamMenu.classList.toggle("active")
                offScreenMenu.classList.toggle("active")
            }

            hamMenu.addEventListener("click", toggleMenu)

            return () => {
                hamMenu.removeEventListener("click", toggleMenu)
            }
        }
    }, [])

    return (
        <div style={{ display: 'flex' }}>
            <div className="ham-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="off-screen-menu">
                <SitebarButton items={FilteredHeader()}/>
                <div className="logout-wrapper">
                    {!isAuthenticated && <>
                        <SubmitButton text='Sing in'/>
                        <SubmitButton text='Join us'/>
                    </>}
                    {isAuthenticated && <LogoutButton />}
                </div>
            </div>
        </div>
    )
}

export default Sitebar
