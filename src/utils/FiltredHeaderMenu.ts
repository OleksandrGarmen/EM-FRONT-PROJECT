import { HeaderFixture } from '../../src/fixture/HeaderFixture'
import type { HeaderFixtureType } from '../../src/types/HeaderType.ts'


export const FilteredHeader = () => {
    let headerData:HeaderFixtureType[] = HeaderFixture
    const isAuthenticated = !!localStorage.getItem('isAuthenticated');

    const filteredMenu = headerData.filter((item) => {
    if (item.authOnly) {
        if (isAuthenticated) {
            return true
        } else {
            return false
        }
    } else {
        return true
    }})

    return filteredMenu
}

