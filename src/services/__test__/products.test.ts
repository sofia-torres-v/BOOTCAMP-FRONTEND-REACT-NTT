import { fetchCategories, fetchProducts } from "../api/product.service";

global.fetch = jest.fn();

describe("fetchProducts", () => {
    it("Debería retornar todos los objetos de productos al ser llamado", async () => {
        const mockData = {
            products: [
                {
                    availabilityStatus: "Low Stock",
                    brand: "Essence",
                    category: "beauty",
                    dimensions: {width: 23.17, height: 14.43, depth: 28.01},
                    discountPercentage: 7.17,
                    id: 1,
                },
            ],
        };

        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });

        const products = await fetchProducts();

        expect(products).toHaveLength(1);
        expect(products[0].id).toBe(1);
        expect(products[0].category).toBe("beauty");
    });
});


describe("fetchCategories", () => {
    it("Deberia retornar una objeto de categorías al ser llamado", async () => {
        const mockCategoryData = [
            {
                name: "Beauty",
                slug: "beauty",
                url: "https://dummyjson.com/products/category/beauty",
            },
        ];

        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockCategoryData,
        });

        const categories = await fetchCategories();

        expect(categories).toHaveLength(1);
        expect(categories[0].name).toBe("Beauty");
    });
});
