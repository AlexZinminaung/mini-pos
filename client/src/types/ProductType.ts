


interface ProductType {
    id: number,
    name: string,
    category: string,
    price: number,
    cost: number,
    stock: number,
    imageUrl?: string;
    imageBlob?: Blob;
}

export type { ProductType };