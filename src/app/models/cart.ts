export class Cart {
	cartToken: string;
	price: number;
	total: number;
	items: Item[];
}

class Item {
	title: string;
	price: number;
	url: string;
	quantity: number;
}