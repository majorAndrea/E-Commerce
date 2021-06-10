import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../firebase";

const useGetReviewsOfProduct = () => {
  const { superCategory, category, productId } = useParams();
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsBuffer = [];
      const reviewsRef = await firestore
        .collection("reviews")
        .where("productDetails.superCategory", "==", superCategory)
        .where("productDetails.category", "==", category)
        .where("productDetails.productId", "==", productId);
      const querySnapshot = await reviewsRef.get();
      await querySnapshot.forEach((doc) => {
        reviewsBuffer.push(doc.data());
      });
      setReviewsList(reviewsBuffer);
    };

    fetchReviews();
  }, [superCategory, category, productId]);

  return reviewsList;
};

export default useGetReviewsOfProduct;
