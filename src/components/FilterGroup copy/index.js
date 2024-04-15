import allBags from '../../asserts/icons/all-bags.svg'
import vanityPouch from '../../asserts/icons/vanity-pouch.svg'
import toteBag from '../../asserts/icons/tote-bag.svg'
import duffleBag from '../../asserts/icons/duffle-bag.svg'
import laptopSleeve from '../../asserts/icons/laptop-sleeve.svg'
import messengerBag from '../../asserts/icons/messenger-bag.svg'
import slingsBag from '../../asserts/icons/slings-bag.svg'
import handbag from '../../asserts/icons/handbag.svg'

import './index.css'

const FilterGroup = () => {
    return (
        <div className='filter-group-container'>
            <ul className='p-0 d-flex flex-wrap justify-content-center'>
                <li className='ms-1 me-1 ms-sm-3 me-sm-3'>
                    <button type='button' className='btn'>
                        <img className='filter-grp-icon' src={allBags} alt='filter icon' />
                        <p>All Bags</p>
                    </button>
                </li>
                <li className='ms-1 me-1 ms-sm-3 me-sm-3'>
                    <button type='button' className='btn'>
                        <img className='filter-grp-icon' src={vanityPouch} alt='filter icon' />
                        <p>Vanity Pouch</p>
                    </button>
                </li>
                <li className='ms-1 me-1 ms-sm-3 me-sm-3'>
                    <button type='button' className='btn'>
                        <img className='filter-grp-icon' src={toteBag} alt='filter icon' />
                        <p>Tote Bag</p>
                    </button>
                </li>
                <li className='ms-1 me-1 ms-sm-3 me-sm-3'>
                    <button type='button' className='btn'>
                        <img className='filter-grp-icon' src={duffleBag} alt='filter icon' />
                        <p>Duffle Bag</p>
                    </button>
                </li>
                <li className='ms-1 me-1 ms-sm-3 me-sm-3'>
                    <button type='button' className='btn'>
                        <img className='filter-grp-icon' src={laptopSleeve} alt='filter icon' />
                        <p>Laptop Sleeve</p>
                    </button>
                </li>
                <li className='ms-1 me-1 ms-sm-3 me-sm-3'>
                    <button type='button' className='btn'>
                        <img className='filter-grp-icon' src={messengerBag} alt='filter icon' />
                        <p>messenger Bags</p>
                    </button>
                </li>
                <li className='ms-1 me-1 ms-sm-3 me-sm-3'>
                    <button type='button' className='btn'>
                        <img className='filter-grp-icon' src={slingsBag} alt='filter icon' />
                        <p>Slings Bags</p>
                    </button>
                </li>
                <li className='ms-1 me-1 ms-sm-3 me-sm-3'>
                    <button type='button' className='btn'>
                        <img className='filter-grp-icon' src={handbag} alt='filter icon' />
                        <p>handbags</p>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default FilterGroup