import { useQuery, gql } from "@apollo/client";
import ProductFragment from "../fragments/ProductFragment";
import SimpleProductPrice from "../fragments/SimpleProductPrice";

export const ALL_PRODUCTS_QUERY = gql`
  query AllProducts($limit: Int) {
    assortments {
      _id
      searchProducts {
        products(limit: $limit) {
          ...ProductDetails
          ...SimpleProductPrice
        }
      }
    }
  }
  ${ProductFragment}
  ${SimpleProductPrice}
`;

const useProducts = ({ limit = 50 } = {}) => {
  const { data, loading, error } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      limit,
    },
  });

  // Flatten products from all assortments and deduplicate
  const allProducts =
    data?.assortments?.reduce((acc, assortment) => {
      const products = assortment?.searchProducts?.products || [];
      products.forEach((product) => {
        if (!acc.find((p) => p._id === product._id)) {
          acc.push(product);
        }
      });
      return acc;
    }, []) || [];

  return {
    loading,
    error,
    products: allProducts,
  };
};

export default useProducts;
