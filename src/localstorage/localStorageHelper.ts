import type { Author } from "../types/AuthorType";
import type { Book, FullBookData } from "../types/BookType";
import type { Category } from "../types/CategoryType";
import type { Review } from "../types/Feedback";
import type { UserType } from "../types/UserType";
import type { Booking } from "../types/Booking";
import type { ProductInCart } from "../types/Booking";

type CartItemWithDetails = {
  bookId: number;
  quantity: number;
  book: Book;
  totalPrice: number;
}

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
  const currentUser: UserType | null = getFromLocalStorage<UserType | null>("currentUser", null);

  if(!currentUser)
    return null

  const carts = getFromLocalStorage<Booking[]>("carts", []);
  const booking = carts.find(b => b.userId === currentUser.id);

  if(!booking)
    return null

  const books = getBooks()

  if(!books)
    return null

  return books.filter(b => booking.booksId.some(bc => bc.bookId === b.id))
}

export function clearCart(): void {
  const currentUser: UserType | null = getFromLocalStorage<UserType | null>("currentUser", null);
  if(!currentUser)
    return;
  let carts = getFromLocalStorage<Booking[]>("carts", []);
  carts = carts.filter(b => b.userId !== currentUser.id);
  
  saveToLocalStorage("carts", carts);
}

export function getCartItemsWithDetails(): CartItemWithDetails[] {
  const currentUser = getCurrentUser()
  if (!currentUser) return []

  const carts = getFromLocalStorage<Booking[]>("carts", []);
  const userCart = carts.find(cart => cart.userId === currentUser.id);
  if (!userCart) return []

  const allBooks = getBooks()
  
  return userCart.booksId.map(cartItem => {
    const book = allBooks.find(b => b.id === cartItem.bookId);
    if (!book) return null;
    
    return {
      bookId: cartItem.bookId,
      quantity: cartItem.quantity,
      book: book,
      totalPrice: book.price * cartItem.quantity
    };
  }).filter(item => item !== null) as CartItemWithDetails[];
}

export function updateBookQuantityInCart(bookId: number, newQuantity: number): void {
  const currentUser = getCurrentUser()
  if (!currentUser) return

  const carts = getFromLocalStorage<Booking[]>("carts", [])
  const cartIndex = carts.findIndex(cart => cart.userId === currentUser.id)

  if (cartIndex < -1) return
  
  const bookIndex = carts[cartIndex].booksId.findIndex(item => item.bookId === bookId)
  
  if (bookIndex === -1) return

  if (newQuantity <= 0) {
    carts[cartIndex].booksId.splice(bookIndex, 1)
  } else {
    carts[cartIndex].booksId[bookIndex].quantity = newQuantity
  }

  saveToLocalStorage("carts", carts)
}


export function removeBookFromCart (bookId: number): void {
  const currentUser = getCurrentUser()
  if (!currentUser) return 

  const carts = getFromLocalStorage<Booking[]>("carts", [])
  const cartIndex = carts.findIndex(cart => cart.userId === currentUser.id)

  if (cartIndex < -1) return

  carts[cartIndex].booksId = carts[cartIndex].booksId.filter(item => item.bookId !== bookId)

  saveToLocalStorage("carts", carts)

}
