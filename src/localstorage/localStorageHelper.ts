import type { Author } from "../types/AuthorType";
import type { Book, FullBookData } from "../types/BookType";
import type { Category } from "../types/CategoryType";
import type { Review } from "../types/Feedback";
import type { UserType } from "../types/UserType";
import type { Booking } from "../types/Booking";
import type { ProductInCart } from "../types/Booking";

export function saveToLocalStorage(key: string, value: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
}

export function getFromLocalStorage<T>(key: string, defaultValue: T): T {
  try {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value) as T;
    }
  } catch (error) {
    console.error("Error getting from localStorage", error);
  }
  return defaultValue;
}

export function removeFromLocalStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing from localStorage", error);
  }
}

export function getCategories(): Category[] {
  return getFromLocalStorage<Category[]>("categories", []);
}

export function getBooks(): Book[] {
  return getFromLocalStorage<Book[]>("books", []) 
}

export function getAuthors(): Author[] {
  return getFromLocalStorage<Author[]>("authors", []) 
}

export function getReview(): Review[]{
  return getFromLocalStorage<Review[]>("review", [])
}

function getTextById(array:Author[] | Category[], id:number):string {
  const obj = array.find(value => value.id === id);

  return obj ? obj.name : "";
}

export function getFullBooksData(): FullBookData[] {
   const books = getBooks();

   if(!books)
    return [];

   const authors = getAuthors();
   let author:string = "";
   let lastId = 0;

   return books.map((book) => {
    const bookData:FullBookData = book; 

    if(book.authorId != lastId) {
      author = getTextById(authors, book.authorId);
      lastId = book.authorId;
    }

    bookData.authorName = author;
    return bookData;
   })

}

export function addBookToCart(bookId: number): void {
    const currentUser: UserType | null = getFromLocalStorage<UserType | null>("currentUser", null);

    if (!currentUser) {
        console.error("No user logged in");
        return;
    }

    const carts = getFromLocalStorage<Booking[]>("carts", []);
    let booking = carts.find(b => b.userId === currentUser.id);

    if (!booking) {
        booking = {
            id: carts.length ? Math.max(...carts.map(c => c.id)) + 1 : 1,
            userId: currentUser.id,
            booksId: [{bookId, quantity: 1}],
            bookingDate: new Date().toISOString(),
            totalPrice: 0
        };
        carts.push(booking);
    } else {
        const cartIndex = carts.findIndex(b => b.userId === currentUser.id);
        const existingBookIndex = carts[cartIndex].booksId.findIndex(b => b.bookId === bookId);

        if (existingBookIndex === -1) {
            carts[cartIndex].booksId.push({bookId, quantity: 1});
        } else {
            carts[cartIndex].booksId[existingBookIndex].quantity += 1;
        }
    }

    saveToLocalStorage("carts", carts);
    console.log("Book added to cart successfully");
}

export function getCurrentUser(): UserType | null {
    return getFromLocalStorage<UserType | null>("currentUser", null);
}

export function logoutUser(): void {
    removeFromLocalStorage("currentUser");
}

export function getBooksWithCart(): Book[] | null {
  const curentUser:UserType = localStorage.getFromLocalStorage("currentUser")

  if(!curentUser)
    return null

  const carts = getFromLocalStorage<Booking[]>("carts", []);
  const booking = carts.find(b => b.userId === curentUser.id);

  if(!booking)
    return null

  const books = getBooks()

  if(!books)
    return null

  return books.filter(b => booking.booksId.some(bc => bc.bookId === b.id))
}

export function clearCart(): void {
  const curentUser:UserType = localStorage.getFromLocalStorage("currentUser");
  if(!curentUser)
    return;
  let carts = getFromLocalStorage<Booking[]>("carts", []);
  carts = carts.filter(b => b.userId !== curentUser.id);
  
  saveToLocalStorage("carts", carts);
}

