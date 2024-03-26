import React , {useContext, useState} from 'react'
import SaleBoxs from '../../Components/SaleBoxs/SaleBoxs'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import Tooltip from '../../Components/Tooltip/Tooltip'
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import WineBarIcon from '@mui/icons-material/WineBar';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MarginIcon from '@mui/icons-material/Margin';
import DateLong from '../../Context/DataDefualtLongContext';
import Chart from '../../Components/Chart/Chart';
import Comments from '../../Components/Comments/Comments';
import TimeLine from '../../Components/TimeLine/TimeLine';
import PopalurProduct from '../../Components/PopularProducts/PopularProducts';



export default function Home() {

    const [isShowTooltip , setIsShowTooltip] = useState(false)
    const [showTooltipForWhat , setShowTooltipForWhat] = useState(null)
    const datelong = useContext(DateLong)

    
    
  return (
    <>
    <div className="boxs bg-black px-3 py-2 flex gap-2 justify-center flex-wrap md:flex-nowrap ">
    <SaleBoxs tooltipTitle={'Total sales amount'}  >
    <div className="flex flex-col gap-2 ">
      <div className="relative">
      <div className="flex w-12 h-12 p-4 items-center justify-center rounded-full bg-blue-500">
       <CalendarTodayOutlinedIcon className='text-white' />
      </div>
      <div className="flex gap-2 ">
        <span className="text-zinc-500 span">Period: {datelong.defaultRecordLong } / Sales</span>
        <i className="fa-solid fa-exclamation text-zinc-500 text-sm cursor-pointer " onMouseEnter={() => {
          setShowTooltipForWhat('Sales')
          setIsShowTooltip(true)
        }} onMouseLeave={() => setIsShowTooltip(false) }></i>
        {showTooltipForWhat == 'Sales' ? (
          <Tooltip TooltipTitle={'Total sales amount'} isShowTooltip={isShowTooltip} />
        ) : ''}         
      </div>
      <div className="text-3xl font-semibold text-white text-left">238K</div>
      <div className="flex">
        <div
          data-component-name="Balance"
          className="flex items-center gap-2 bg-zinc-950/5 p-2 dark:bg-zinc-950/50 rounded-lg"
        >
         <MovingIcon className="text-emerald-500" />
          <span className="text-emerald-500 span">32%</span>
          <span className="text-zinc-500 span">Balance</span>
        </div>
      </div>
      </div>
    </div>
    </SaleBoxs>
    <SaleBoxs>
    <div className="flex flex-col gap-2 ">
      <div className="relative">
      <div className="flex w-12 h-12 p-4 items-center justify-center rounded-full bg-emerald-500">
       <WineBarIcon className='text-white' />
      </div>
      <div className="flex gap-2 "> 
        <span className="text-zinc-500 span">Period: {datelong.defaultRecordLong } / Campaigns</span>
        <i className="fa-solid fa-exclamation text-zinc-500 text-sm cursor-pointer " onMouseEnter={() => {
          setShowTooltipForWhat('Campaigns')
          setIsShowTooltip(true)
        }} onMouseLeave={() => setIsShowTooltip(false) }></i>
        {
          showTooltipForWhat == 'Campaigns' ? (
            <Tooltip TooltipTitle={'Total ad campaigns '} isShowTooltip={isShowTooltip}/>
          ) : ''
        }          
      </div>
      <div className="text-3xl font-semibold text-white text-left">325</div>
      <div className="flex">
        <div
          data-component-name="Balance"
          className="flex items-center gap-2 bg-zinc-950/5 p-2 dark:bg-zinc-950/50 rounded-lg"
        >
         <TrendingDownIcon className="text-red-500" />
          <span className="text-red-500 span">41%</span>
          <span className="text-zinc-500 span">Balance</span>
        </div>
      </div>
      </div>
    </div>
    </SaleBoxs>
    <SaleBoxs>
    <div className="flex flex-col gap-2 ">
      <div className="relative">
      <div className="flex w-12 h-12 p-4 items-center justify-center rounded-full bg-amber-500">
       <RocketLaunchIcon className='text-white' />
      </div>
      <div className="flex gap-2 ">
        <span className="text-zinc-500 span">Period: {datelong.defaultRecordLong } / Shipping</span>
        <i className="fa-solid fa-exclamation text-zinc-500 text-sm cursor-pointer " onMouseEnter={() => {
         setShowTooltipForWhat('Shipping')
         setIsShowTooltip(true)
        }} onMouseLeave={() => setIsShowTooltip(false) }></i>
        {
          showTooltipForWhat == 'Shipping' ? (
            <Tooltip TooltipTitle={'Total sales amount'} isShowTooltip={isShowTooltip}/>  
          ) : ''
        }        
      </div>
      <div className="text-3xl font-semibold text-white text-left">4128</div>
      <div className="flex">
        <div
          data-component-name="Balance"
          className="flex items-center gap-2 bg-zinc-950/5 p-2 dark:bg-zinc-950/50 rounded-lg"
        >
         <SwapHorizIcon className="text-blue-500" />
          <span className="text-blue-500 span">0%</span>
          <span className="text-zinc-500 span">Balance</span>
        </div>
      </div>
      </div>
    </div>
    </SaleBoxs>
    <SaleBoxs>
    <div className="flex flex-col gap-2 ">
      <div className="relative">
      <div className="flex w-12 h-12 p-4 items-center justify-center rounded-full bg-violet-500">
       <MarginIcon className='text-white' />
      </div>
      <div className="flex gap-2 ">
        <span className="text-zinc-500 span">Period: {datelong.defaultRecordLong } / Coupons</span>
        <i className="fa-solid fa-exclamation text-zinc-500 text-sm cursor-pointer " onMouseEnter={() => {
         setShowTooltipForWhat('Coupons')
         setIsShowTooltip(true)
        }} onMouseLeave={() => setIsShowTooltip(false) }></i>
        {
          showTooltipForWhat == 'Coupons' ? (
            <Tooltip TooltipTitle={'Total sales amount'} isShowTooltip={isShowTooltip}/>
          ) : ''
        }          
      </div>
      <div className="text-3xl font-semibold text-white text-left">86</div>
      <div className="flex">
        <div
          data-component-name="Balance"
          className="flex items-center gap-2 bg-zinc-950/5 p-2 dark:bg-zinc-950/50 rounded-lg"
        >
         <TrendingDownIcon className="text-red-500" />
          <span className="text-red-500 span">41%</span>
          <span className="text-zinc-500 span">Balance</span>
        </div>
      </div>
      </div>
    </div>
    </SaleBoxs>
    </div>
    <div className='bg-black  px-3 flex gap-2 items-center flex-wrap '>
    <Chart />
    <Comments />
    </div>
    <div className='bg-black px-3 py-2 flex gap-2  flex-wrap xl:flex-nowrap'>
      <PopalurProduct />
       <TimeLine />
    </div>
    </>
  )
}
