import { useDispatch } from 'react-redux'
import { addToCart } from './cartSlice'
function Product({ id, title, image }) {
	const dispatch = useDispatch()
	return (
		<div>
			<h3>{title}</h3>
			<img src={image} alt='' className='w-100' />
			<br />
			<button
				className='btn btn-warning '
				onClick={() => dispatch(addToCart({ id, title, image }))}>
				Add to Cart
			</button>
		</div>
	)
}

export default Product
