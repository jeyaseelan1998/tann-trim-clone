import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Radio } from 'react-loader-spinner'
import axios from 'axios'

import FilterGroup from '../FilterGroup'
import Breadcrumb from '../Breadcrumb'
import ProductCard from '../ProductCard'

import apiStatuses from '../../utils/apiStatuses'

import './index.css'

const Home = () => {
    const { category } = useParams()

    const [response, setResponse] = useState({
        apiStatus: apiStatuses.initial,
        data: []
    })

    const fetchProducts = async () => {
        setResponse(prev => ({ apiStatus: apiStatuses.initial, ...prev }))
        const url = "https://products-api-86e0.onrender.com/products"
        const apiResponse = await axios.get(url)

        if (apiResponse.status === 200) {
            const data = apiResponse.data.filter(each => each.category.toLocaleLowerCase() === category.toLocaleLowerCase())
            setResponse(() => ({
                apiStatus: apiStatuses.success,
                data: data
            }))
        }
        else {
            setResponse(prev => ({ apiStatus: apiStatuses.failure, ...prev }))
        }
    }

    useEffect(() => {
        fetchProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])

    const emptyView = () => (
        <div className='empty-msg-view d-flex justify-content-center align-items-center'>
            <h3 className='empty-msg'>No Items Available</h3>
        </div>
    )

    const renderProducts = () => {
        const { data } = response

        if (!data.length)
            return emptyView()

        return (
            <ul className='products-list row p-0'>
                {
                    data.map(eachItem => <ProductCard key={eachItem.id} productDetails={eachItem} />)
                }
            </ul>
        )
    }

    const renderLoadingView = () => (
        <div className='loading-view d-flex justify-content-center align-items-center'>
            <Radio
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="radio-loading"
            />
        </div>
    )

    const renderViews = () => {
        const { apiStatus } = response

        switch (apiStatus) {
            case apiStatuses.success:
                return renderProducts()

            default:
                return renderLoadingView()
        }
    }


    return (
        <>
            <FilterGroup />
            <div className='home-container'>
                <div className='d-flex flex-wrap align-items-center justify-content-between mt-3 mb-3'>
                    <Breadcrumb />

                    <div className='div-container d-flex flex-wrap align-items-center justify-content-between'>
                        <p>{response.data.length} Products</p>
                        <img
                            alt='icon'
                            src="https://res.cloudinary.com/dj5c1rxzz/image/upload/v1713193948/tann-trim/exit.svg"
                            className='ms-2'
                        />
                    </div>
                </div>

                {renderViews()}
            </div>
        </>
    )
}

export default Home