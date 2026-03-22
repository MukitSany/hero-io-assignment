import React, { use } from 'react';
import iconDownload from '../../assets/icon-downloads.png'
import iconStar from '../../assets/icon-ratings.png'

const App = ({singleApp}) => {
    // const data = use(appPromise);
    // console.log(data);
    // console.log(singleApp);

    const {companyName,downloads,image,ratingAvg,description } = singleApp;

    return (
        <div className='grid grid-cols-4 gap-4'>
            <div className="card bg-base-100 w-96 shadow-sm ">
  <figure className='bg-[#D9D9D9] h-[316px]'>
    <img className='h-[150px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title  font-bold">
      {companyName}: {description}
      {/* <div className="badge badge-secondary">NEW</div> */}
    </h2>
    {/* <p>{description}</p> */}
    <div className="card-actions justify-between">
      <div className="badge bg-gray-100"><img className='h-[16px]' src={iconDownload} alt="" /><span className='font-bold text-[#00D390]'>{downloads}</span></div>
      <div className="badge bg-gray-100"><img className='h-[16px]'src={iconStar} alt="" /><span className='font-bold text-[#FF8811]'>{ratingAvg}</span></div>
    </div>
  </div>
</div>   
        </div>
    );
};

export default App; 