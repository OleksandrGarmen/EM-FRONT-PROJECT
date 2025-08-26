
type ENUM = {
    
}
export type BookType = {
  id: number;
  image: string;
  categoryId: number;
  title: string;
  authorId: number;
  shortDescription: string;
  description: string;
  price: number;
  discountPrice: number;
  children:React.ReactNode
  pageCount: number;
  status: ENUM
  createdAt: string;
  updatedAt: string

};