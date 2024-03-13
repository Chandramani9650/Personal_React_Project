import React, { useContext } from 'react'

import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from "react-icons/go";
import { IoIosMore } from 'react-icons/io';
import LineChart from '../component/Chart/LineChart';
import pie from '../component/Chart/Pie';
import SparkLine from '../component/Chart/SparkLine';
import Button from '../component/Button';
import product9 from '../data/product9.jpg';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { Valcontext } from '../context/AuthContext';
import Stacked from '../component/Chart/Stacked';

const Ecommerce = () => {
  const { currentColor, currentMode } = useContext(Valcontext)
  return (
    <div className='mt-24 '>
      <div className=' flex flex-wrap lg:flex-nowrap justify-center '>
        <div className='  bg-blue dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 '>
        <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        
      
      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
    
      </div>


      <div className= ' flex gap-10 flex-wrap justify-center'>
        <div className=" bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780    ">
          <div className=" p-3 flex justify-between">
          <p className="font-semibold text-xl">Revenue Updates</p>
          <div  className="flex items-center gap-4  ">
          <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                <GoDotFill />
                </span>
                <span>Budget</span>
              </p>

          </div>

          </div>
{/* ............................... */}
          <div className=''>
            <p className='mt-6'>
              <span className='text-2xl font-bold mr-2'>$93,438</span> <span className='bg-lime-600 p-2 rounded-full text-white font-bold'>23%</span>
            </p>
            <p>Budget</p>
          </div>
          <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
              </div>

              <div>
                <Button 
                  color="white"
                  bgColor={currentColor}
                  text="Download report"
                  borderRadius="10px"
                />
              </div>

        </div>
         <div className=''>
         <Stacked currentMode={currentMode} width="320px" height="360px" />
         </div>
      </div>
    </div>
  )
}

export default Ecommerce
