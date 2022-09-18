import React, { useEffect, useState } from "react";
import axios from "axios";
import {accessCode} from '../../api/apiAccess'

interface videoList_Interface {
    name: string
    pictures: {
        active: boolean
        base_link: string
        default_picture: boolean
        resource_key: string
        sizes: {
            height: number
            link: string
            width: number
        }[]
    }
    type: string
    uri: string
}

const Videos = () => {
    const [videoList, setVideoList] = useState<videoList_Interface[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`https://api.vimeo.com/users/${accessCode.userid}/videos`, {
                headers: {
                    Authorization: `bearer ${accessCode.accessToken}`
                }
            })
            setVideoList(data.data)
        }
        fetchData();
    }, [])

    return (
        <>
            <div className="video-container">
                <div className="video-div">
                    {videoList.map((value, index) => {
                        return (
                            <div className="video-item" key={index}>
                                <img className='video-img' src={value.pictures.sizes[4].link} alt='video-img' />

                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Videos;