import { useParams, Link } from "react-router-dom";

function ProductDetailPage() {
  //how to get hold of url data
  const params = useParams();

  return (
    <>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
      {/* Returns back one level. Note it is a relative path but is fixed with relative attr */}
      <p><Link to=".." relative="path">Back</Link></p>
    </>
  );
}

export default ProductDetailPage;
