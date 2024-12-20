import { ProductResponse } from "../../domain/product.domain";
import { TEXTS } from "./textContants";

export const filterProducts = (products: ProductResponse[], searchTerm: string, selectedCategory: string): ProductResponse[] => {
  return products.filter((product) => {
    const matchesSearch = product.title?.toLowerCase().includes(searchTerm.toLowerCase()) || false;
    const matchesCategory =
      selectedCategory === TEXTS.defaultCategory || product.category?.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });
};
