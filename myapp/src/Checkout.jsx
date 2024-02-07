import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from './cartSlice'
function Checkout() {
	const cartItems = useSelector((state) => state.cart.cart)
	const dispatch = useDispatch()
	return (
		<div>
			<h2>Cart Items </h2>
			{cartItems.map((item, index) => {
				return (
					<div key={index} className='d-flex '>
						<img src={item.image} className='c-image ' alt='' />
						<div>
							<h4>{item.title}</h4>
							<button
								onClick={() => dispatch(removeFromCart({ id: item.id }))}
								className='btn btn-warning btn-sm '>
								Remove
							</button>
						</div>
					</div>
				)
			})}
		</div>
	)
}
export default Checkout
