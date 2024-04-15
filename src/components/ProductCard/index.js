import bookmark from '../../asserts/icons/Bookmark-dark.svg'
import cartIcon from '../../asserts/icons/cart.svg'

import './index.css'

const ProductCard = ({ productDetails }) => {
    const {
        id,
        name,
        img_url,
        curr_price,
        mrp,
        category } = productDetails

    return (
        <li className='product-card col-sm-6 col-md-4 col-lg-3 mb-5'>
            <article>
                <img className='w-100 product-image' alt={name} src={img_url} />

                <p className='product-title mt-3 mb-2'>{name}</p>

                <div className='d-flex align-items-center justify-content-center ps-2 flex-wrap'>
                    <p className='product-price mb-0 me-1'>&#8377; {curr_price}</p>
                    <p className='product-mrp mb-0 me-1'> {mrp}</p>
                    <p className='discount mb-0'>({Math.round(((mrp - curr_price) / mrp) * 100)}&#37; Off)</p>

                    <button className='btn ms-auto ps-1 pe-1' >
                        <img loading='lazy' className='add-cart-icon' src={cartIcon} alt='add cart icon' />
                    </button>
                </div>

                <button className='btn product-card-bookmark-btn'>
                    <img alt='bookmark icon' src={bookmark} className='bookmark-icon' />
                </button>
            </article>
        </li>
    )
}

export default ProductCard