export interface ProductModel {
  name: string;
  price: number;
  previousPrice: number;
  description: string;
  categoryId: number;
  category: Category;
  imageUrl: string;
  unit: number;
  productImages: any[];
  id: number;
  createdOn: string;
}

export interface ProductCartModel extends ProductModel {
  orderedUnit: number;
}

export interface Category {
  name: string;
  description: null;
  id: number;
  createdOn: string;
}

// Generated by https://quicktype.io

export interface IApiResponseModel {
  message: string;
  status: string;
  data: object;
}

export interface IPagerModel {}

export interface ProductsApiModel extends IApiResponseModel {
  data: IProductPage;
}
// Generated by https://quicktype.io

export interface IProductPage extends IPagerResponse {
  data: ProductModel[];
}
export interface IPagerResponse {
  data: object;
  pager: IPage;
}

export interface IPage {
  pageNumber: number;
  pageCount: number;
  pageSize: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  firstItemOnPage: number;
  lastItemOnPage: number;
  totalItemCount: number;
}