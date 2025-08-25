import { Home, Info, Book, Phone, User, ShoppingCart } from "lucide-react"

export const HeaderFixture = [
    { name: "Home", link: "/", authOnly: false, icon: Home },
    { name: "About us", link: "/about-us", authOnly: false, icon: Info },
    { name: "Books", link: "/books", authOnly: false, icon: Book },
    { name: "Contact us", link: "/contacts", authOnly: false, icon: Phone },
    { name: "Account", link: "/account", authOnly: true, icon: User },
    { name: "Cart", link: "/cart", authOnly: true, icon: ShoppingCart },
]
