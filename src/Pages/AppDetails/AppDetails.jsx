import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import { Download } from 'lucide-react';

const AppDetails = () => {
    const {id} = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const singleApp = data.find(app => app.appid === appId);
    // console.log(singleApp);
    const {image,title,companyName,description,size,reviews,ratingAvg,downloads,ratings} = singleApp;
    
    return (
        <div className='m-6'>
            <div className='flex'>
                <img className='h-[350px] w-[350px]' src={image} alt="" />
                <div>
                    <h1>{title}: {description}</h1>
                    <p>Develoved by {companyName}</p>
                    <div className="divider"></div>
                    <div className='flex justify-start gap-12'>
                        <div>
                            <img className='h-[40px] w-[40px]' src={downloadIcon} alt="" />
                            <p className='text-gray-500'>Downloads</p>
                            <h1 className='font-bold text-4xl'>{downloads}</h1>
                        </div>
                        <div>
                            <img className='h-[40px] w-[40px]' src={ratingIcon} alt="" />
                            <p className='text-gray-500 h-[24] w-[150]'>Average Ratings</p>
                            <h1 className='font-bold text-4xl'>{ratingAvg}</h1>
                        </div>
                        <div>
                            <img className='h-[40px] w-[40px]' src={reviewIcon} alt="" />
                            <p className='text-gray-500'>Average Reviews</p>
                            <h1 className='font-bold text-4xl'>{reviews}</h1>
                        </div>
                        
                    </div>
                    <button className="btn btn-accent w-[250px] h-[52px] mt-3 text-white font-bold text-lg">Install Now ({size}MB)</button>

                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default AppDetails;


// {
//     "appid": 1,
//     "image": "https://img.icons8.com/color/96/chat.png",
//     "title": "ChatPro",
//     "companyName": "TechSoft",
//     "description": "A fast and secure messaging app.",
//     "size": 45,
//     "reviews": 1200,
//     "ratingAvg": 4.5,
//     "downloads": "5M",
//     "ratings": [
//       { "name": "1 star", "count": 20 },
//       { "name": "2 star", "count": 40 },
//       { "name": "3 star", "count": 140 },
//       { "name": "4 star", "count": 400 },
//       { "name": "5 star", "count": 600 }
//     ]
//   }