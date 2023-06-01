import React, { useState } from "react";
import "./App.scss";
import { useQuery } from "@apollo/react-hooks";
import GET_PRODUCTS_IN_COLLECTION from "./gql/getCollection";
import { Card } from "./components/card";

const App = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS_IN_COLLECTION, {
    variables: {
      count: 10,
      handle: "skateboard",
    },
  });
 
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    if (error) {
      return null;
    }

    if (data?.collectionByHandle?.products?.edges) {
      setProducts(data?.collectionByHandle?.products?.edges);
    }
  }, [data, error]);

  if (loading) {
    // Data is still loading....
    return <div className="App">Loading....</div>;
  }

  const handleReverseProductOrder = () => {
    const reversedProducts = products.toReversed();
    setProducts(reversedProducts);
  };

  const handlePriceHighToLow = () => {
    const sortedHighToLow = [...products].sort((a, b) => b.node?.variants?.edges[0]?.node?.price - a.node?.variants?.edges[0]?.node?.price)
    setProducts(sortedHighToLow);
  };

  const handlePriceLowToHigh = () => {
    const sortedLowToHigh = [...products].sort((a, b) => a.node?.variants?.edges[0]?.node?.price - b.node?.variants?.edges[0]?.node?.price)
    setProducts(sortedLowToHigh);
  };

  const handleDisplayNineProducts = () => {
    if (products.length === 10) {
      const lastProductRemoved = [...products.slice(1)];
      setProducts(lastProductRemoved);
    }
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <div className="buttonGroup">
          <button onClick={handleReverseProductOrder}>
            Reverse Product Order
          </button>
          <button onClick={handlePriceHighToLow}>Price High to Low</button>
          <button onClick={handlePriceLowToHigh}>Price Low to High</button>
          <button onClick={handleDisplayNineProducts}>
            Display 9 products
          </button>
        </div>

        <div className="ProductList">
          <div className="grid-for-store">
            {products.map((product) => {

              const price = parseInt(product.node.variants.edges[0].node.price);

              return (
                <Card
                  key={product.node.id}
                  prodImage={product.node.images.edges[0].node.src}
                  agency={product.node.vendor}
                  title={product.node.title}
                  price={price}
                  buyText="Buy"
                  moreText="more"
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
