import React from 'react';
import iconDownload from '../../assets/icon-downloads.png'
import iconStar from '../../assets/icon-star.png'

const AppCart = (a) => {
    
    // console.log(a.singleApp.companyName);
    const {image,title,downloads,ratingAvg} = a.singleApp

    return (
        <div className='m-4'>
            <div className='bg-gray-200 w-full h-30 flex justify-between items-center p-4'>
                <div className='flex gap-5'>
                    <img className='h-full' src={image} alt="" />
                    <div><h1>{title}</h1>
                    <div className='flex gap-6 mt-8'>
                        <div className="flex"><img className='h-5' src={iconDownload} alt="" /><span className='font-bold text-[#00D390]'>{downloads}</span></div>
                          <div className="flex"><img className='h-[16px]'src={iconStar} alt="" /><span className='font-bold text-[#FF8811]'>{ratingAvg}</span></div>
                    </div>
                    </div>
                    
                </div>
                <button className="btn btn-success px-5 py-2 text-white">Uninstall</button>
            </div>
        </div>
    );
};

export default AppCart;



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