import type { Author } from "../types/AuthorType";
import type { Book, FullBookData } from "../types/BookType";
import type { Category } from "../types/CategoryType";
import type { Review } from "../types/Feedback";

export function saveToLocalStorage(key: string, value: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
}
function getFromLocalStorage<T>(key: string, defaultValue: T): T {
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

export function getFullBooksData(): FullBookData[] 
{
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