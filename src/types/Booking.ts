export type Booking = {
    id: number;
    userId: number;
    booksId: ProductInCart[];
    bookingDate: string;
    totalPrice: number;
}

export type ProductInCart = {
    bookId: number;
    quantity: number;
}
