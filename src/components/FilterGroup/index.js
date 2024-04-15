import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel } from 'swiper/modules';

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
                        <img
                            className='filter-grp-icon'
                            src="https://res.cloudinary.com/dj5c1rxzz/image/upload/v1713193083/tann-trim/all-bags.svg"
                            alt='filter icon'
                        />
                        <p>All Bags</p>
                    </button>
                </SwiperSlide>
                <SwiperSlide >
                    <button type='button'>
                        <img
                            className='filter-grp-icon'
                            src="https://res.cloudinary.com/dj5c1rxzz/image/upload/v1713193930/tann-trim/vanity-pouch.svg"
                            alt='filter icon'
                        />
                        <p>Vanity Pouch</p>
                    </button>
                </SwiperSlide>
                <SwiperSlide >
                    <button type='button'>
                        <img
                            className='filter-grp-icon'
                            src="https://res.cloudinary.com/dj5c1rxzz/image/upload/v1713193101/tann-trim/tote-bag.svg"
                            alt='filter icon'
                        />
                        <p>Tote Bag</p>
                    </button>
                </SwiperSlide>
                <SwiperSlide >
                    <button type='button'>
                        <img
                            className='filter-grp-icon'
                            src="https://res.cloudinary.com/dj5c1rxzz/image/upload/v1713193118/tann-trim/duffle-bag.svg"
                            alt='filter icon'
                        />
                        <p>Duffle Bag</p>
                    </button>
                </SwiperSlide>
                <SwiperSlide >
                    <button type='button'>
                        <img
                            className='filter-grp-icon'
                            src="https://res.cloudinary.com/dj5c1rxzz/image/upload/v1713193139/tann-trim/laptop-sleeve.svg"
                            alt='filter icon'
                        />
                        <p>Laptop Sleeve</p>
                    </button>
                </SwiperSlide>
                <SwiperSlide >
                    <button type='button'>
                        <img
                            className='filter-grp-icon'
                            src="https://res.cloudinary.com/dj5c1rxzz/image/upload/v1713193877/tann-trim/messenger-bag.svg"
                            alt='filter icon'
                        />
                        <p>messenger Bags</p>
                    </button>
                </SwiperSlide>
                <SwiperSlide >
                    <button type='button'>
                        <img
                            className='filter-grp-icon'
                            src="https://res.cloudinary.com/dj5c1rxzz/image/upload/v1713193895/tann-trim/slings-bag.svg"
                            alt='filter icon'
                        />
                        <p>Slings Bags</p>
                    </button>
                </SwiperSlide>
                <SwiperSlide >
                    <button type='button'>
                        <img
                            className='filter-grp-icon'
                            src="https://res.cloudinary.com/dj5c1rxzz/image/upload/v1713193913/tann-trim/handbag.svg"
                            alt='filter icon'
                        />
                        <p>handbags</p>
                    </button>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default FilterGroup