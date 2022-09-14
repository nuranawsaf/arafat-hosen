import React ,{useState} from 'react';
import imgdata from './imgdata';
import Image from 'next/image';


function Gallery() {

  const [urls,setUrl]  = useState(imgdata)

  const allItem =()=>{
    const finalData = imgdata.filter((value)=>{
      return value;
    })
    setUrl(finalData)
  }

  const onlyAcrylic =(categoryItem)=>{
    const finalData = imgdata.filter((value)=>{
      return value.category == categoryItem
    })

    setUrl(finalData)
  }
  const onlyWatercolor =(categoryItem)=>{
    const finalData = imgdata.filter((value)=>{
      return value.category == categoryItem
    })

    setUrl(finalData)
  }
  const onlySketches =(categoryItem)=>{
    const finalData = imgdata.filter((value)=>{
      return value.category == categoryItem
    })
    setUrl(finalData)
  }

  const onlyPortraits =(categoryItem)=>{
    const finalData = imgdata.filter((value)=>{
      return value.category == categoryItem
    })
    setUrl(finalData)
  }

  const onlyDigital =(categoryItem)=>{
    const finalData = imgdata.filter((value)=>{
      return value.category == categoryItem
    })
    setUrl(finalData)
  }

  const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (url) => {
        setTempImgSrc(url);
        setModel(url);
        console.log({url});
        
    }

  
  
  return (
    <>

      <div className={model? "model open" : "model"}>
            <img src={tempImgSrc} alt="" />
            <div  className='svg'>
              <img onClick={() => setModel(false)} src="https://res.cloudinary.com/ddtyi1hm8/image/upload/v1661787061/images/close_qztzzl.png" alt="" />
            </div>
        </div>


    <div className='gallery-bg h-[279px] md:h-[409px] lg:h-[819px]'>
      <h1></h1>
    </div>

    <div className="container my-3 mt-20 " >
      <div className="row grid grid-cols-3 lg:grid-cols-6 ">
        <div className="">
        <button className='text-gray-700  text-[17px]  font-medium filter-hover' onClick={allItem}>All</button>
        </div>

         <div className="">
        <button className='text-gray-700 text-[17px] font-medium filter-hover' onClick={()=>onlyAcrylic('Acrylic Paintings')}>Acrylic</button>
        </div>
        
        <div className="c">
        <button className='text-gray-700 text-[17px] font-medium filter-hover' onClick={()=>onlyWatercolor('Watercolor')}>Watercolor</button>
        </div>

        <div className="c">
        <button className='text-gray-700 text-[17px] font-medium filter-hover' onClick={()=>onlySketches('Sketches')}>Sketches</button>
        </div>

        <div className="c">
        <button className='text-gray-700 text-[17px] font-medium filter-hover' onClick={()=>onlyPortraits('Portraits')}>Portraits</button>
        </div>

        <div className="c">
        <button className='text-gray-700 text-[17px] font-medium filter-hover' onClick={()=>onlyDigital('Digital Arts')}>Digital Arts</button>
        </div>

      </div>
    </div>



    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16 mb-80">
        {
          urls.map((value,index)=>{
            return (
             <div onClick={() => {
              console.log("Hello....");
              
              getImg(value.url)
            }
              
              } key={index} className="gallery-border  relative group h-[130px] md:h-[230px] lg:h-[350px]">
              <div className='gallery-hover '>
                <h4 className='text-2xl h-full text-left mt-40 md:mt-72 lg:mt-[230px] ml-20  gap-y-2'>{value.info} <br/>{value.info2} <br/> {value.info3}</h4>
              </div>

                <div 
                >

                  <Image 
                    src={value.url} 
                    blurDataURL={value.url}
                    className='object-cover '
                    placeholder="blur"
                    layout="fill"
                  />
                </div>
                
             </div>
            );
          })
        }
      </div>
    </div>
    </>


  );
}

export default Gallery;


