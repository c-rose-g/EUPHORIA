import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { productDetails } from '../../store/products';

const UpdateReviewForm = () =>{
  const [loaded, setLoaded] = useState(false)
	const { product_id } = useParams();

  const dispatch = useDispatch()

  useEffect(() =>{
    productDetails(product_id).then(() => setLoaded(true))
  })
  return(
    <>

    <div>
      <form>
        <label>Update your review</label>
      </form>
    </div>
    </>
  )
}
