import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './App.css'
import Product from './Product'

function Home() {
	const cartItems = useSelector((state) => state.cart.cart)
	const klavish =
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ157YS2XDD2qRnL9QBzQK4vd2yTq9sw77_yVyq8Gl1EQ&s'
	const mouse =
		'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSNIox8BN9d3Wo9I7bUqWwv7mLHDckJEViY5LKZX9FHdSgszW3-m-iNgNxCbnfy5kSUaehWMLbUGBipJnaMKN8GlDnuI8mJE2O8QFNcAnjM_xPT1ihF57TQ&usqp=CAc'
	const earpods =
		'data:image/webp;base64,UklGRu4DAABXRUJQVlA4IOIDAABwIgCdASqWAAYBPj0ejESiIaESO9TQIAPEtLdnz9v9m/2VlrUjJGcooZ9z3gUCI5YBZRRfwc8O2NG63gBIVLCWKNg6QpU7SdlFAzto0MLGZrYGVVJ0Tkmpi7waU823o6fga35QW0LeFK0C2LQLyxo8n5m0vWEsVjyuNXwCGXdNhStBdgneffiHS1vRRtcFVuSekwtfSc14+m2LFM1OLxUqnNcryw4PR4VQwud+tGQfzN5vfeD9cqSZE7lodn2AnIvEhXICLt9abcS1nqtsE23txc8pe9asYS2gACNEAjY7gSuIZCzEK08YdIQlDiY2nxY0PDZnVlvy1s6SP1s3DCigX9nPX6u7LaXK2rO3ZbS4OxT+xO/GfXmtcNF2AAD+/6kMIWOJHuOKSYhTpKDwJo9CzgVeZf+iuM1rF2fTamtuW8W/OqvBcUTVwL/pHxEj2Ww55ezSiQ7Z70h4MWFipefZkWn/hAf+2Te2NbK/+0bhbX3eZ/0//W/nUgzR4JCKrNRqKXWJWNOfNOzFT/LPrAvDrZ+cpW5z3cqhmAwU/aU6D4/J6s1CcyOgN0L0Xjm3oUpPYb6kGSi3Y65vD0bm8OQq4I5BvCeblZ4udLUIzzsFCsTpi6Penbv0MW2ykJEI81wvmzyHKV9UcDSRo1vQM99tSkMp/sAAOCPrB5GaD+9EMq9wTW98nn9yZ8IcjDH7UsmQcG+PWgK/veTeg6z5G+hiKcUV2BvCLvUj9SOZrIEgccBONDt59EMZs+5M3aufopTmvV46nw9DxqFXRNdj1YDhiHRW2ATH7NPe2drQSwG+s+Cy/CnP8js4TX41/+Nqgff4xfn8ODSO4v118Gvor1Ap1RhS5tJ7EK3jl429cw5xeIw5TDFtxRTU8vF1PXwFX0l4HbC75SUaBCuZR78V8mdEY27kk37OMQdUOs4Ig69LVwOO7+6GpVYhmNjKnYQT+mpYlx2T7m7VYwa+1VSSeHDMJ0B8RZAyHOFo9TaBNfLQ6FlYtxkQfopCofgt5NOP8qHHa5AgCSLtCkF6TlWrsJEBLwyIC0/12C9RdgL1stkYdG3dNgoV9eDr70euh4yYHZYE7LOuvdBr5Hbj2Xy2IYrtD6H30roI9kTxgwgAofOR6aHa56daYZV/OvuA1nH4ANzBl4I7coWxhKxyChw+wofcpRNPEbAOUrwaaLShTvAdKtauP7MRJy1GUQgR5hdzFm0FtMesJ69QgFbPN2+381Xmx52MxRGGZqK5dQu2/fkS22YWASPiPY+BFq/iRtMDRAQoT1m5CYLzOjXkfMnp0O7TJqcZBA8y0a41c6F22USDBAAA'
	return (
		<div className='w-100 d-flex flex-column'>
			<div className='d-flex justify-content-between px-4 bg-dark text-white align-items-center'>
				<h2>Code</h2>
				<Link to='/checkout'>
					<h4>
						Cart <small>{cartItems.length}</small>
					</h4>
				</Link>
			</div>
			<div className='container d-flex flex-wrap mt-5'>
				<div className='border w-50'>
					<Product id='1' title='KeyBoard' image={klavish} />
				</div>
				<div className='border w-50'>
					<Product id='2' title='Mouse' image={mouse} />
				</div>
				<div className='border w-50'>
					<Product id='3' title='EarPods' image={earpods} />
				</div>
			</div>
		</div>
	)
}

export default Home
