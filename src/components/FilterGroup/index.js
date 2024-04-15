import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel } from 'swiper/modules';

import allBags from '../../asserts/icons/all-bags.svg'
import vanityPouch from '../../asserts/icons/vanity-pouch.svg'
import toteBag from '../../asserts/icons/tote-bag.svg'
import duffleBag from '../../asserts/icons/duffle-bag.svg'
import laptopSleeve from '../../asserts/icons/laptop-sleeve.svg'
import messengerBag from '../../asserts/icons/messenger-bag.svg'
import slingsBag from '../../asserts/icons/slings-bag.svg'
import handbag from '../../asserts/icons/handbag.svg'

import breakpoints from '../../utils/filterGroupBreakpoints';

import './index.css'

const FilterGroup = () => {
    return (
        <div className='filter-group-container'>
            <Swiper
                slidesPerView={2}
                mousewheel={true}
                modules={[Mousewheel]}
                breakpoints={breakpoints}
            >
                <SwiperSlide >
                    <button type='button'>
                        <img className='filter-grp-icon' src={allBags} alt='filter icon' />
                        <p>All Bags</p>
                    </button>
                </SwiperSlide>
                <SwiperSlide >
                    <button type='button'>
                        <img className='filter-grp-icon' src={vanityPouch} alt='filter icon' />
                        <p>Vanity Pouch</p>
                    </button>
                </SwiperSlide>
                <SwiperSlide >
                    <button type='button'>
                        <img className='filter-grp-icon' src={toteBag} alt='filter icon' />
                        <p>Tote Bag</p>
                    </button>
                </SwiperSlide>
                <SwiperSlide >
                    <button type='button'>
                        <img className='filter-grp-icon' src={duffleBag} alt='filter icon' />
                        <p>Duffle Bag</p>
                    </button>
                </SwiperSlide>
                <SwiperSlide >
                    <button type='button'>
                        <img className='filter-grp-icon' src={laptopSleeve} alt='filter icon' />
                        <p>Laptop Sleeve</p>
                    </button>
                </SwiperSlide>
                <SwiperSlide >
                    <button type='button'>
                        <img className='filter-grp-icon' src={messengerBag} alt='filter icon' />
                        <p>messenger Bags</p>
                    </button>
                </SwiperSlide>
                <SwiperSlide >
                    <button type='button'>
                        <img className='filter-grp-icon' src={slingsBag} alt='filter icon' />
                        <p>Slings Bags</p>
                    </button>
                </SwiperSlide>
                <SwiperSlide >
                    <button type='button'>
                        <img className='filter-grp-icon' src={handbag} alt='filter icon' />
                        <p>handbags</p>
                    </button>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default FilterGroup