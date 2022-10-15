import React from 'react'
import useGeneralStore from '../../App/Store/GeneralStore'
import Card from '../Card'
import ChartArea from './ChartArea'


function MainDataArea() {
    const {  setSelectedSection } = useGeneralStore();
    return (
        <Card>

            <div className="pb-5 text-4xl font-semibold">Dashboard: <span className='text-slate-500 text-3xl font-medium'>Gulshan 1 Circle, Dhaka</span></div>

            <div className="flex justify-between space-x-5">
                <div className='space-y-3 bg-gray-200 rounded-md p-5'>
                    <SidebarItem onClick={() => setSelectedSection("dashboard")} title="Dashboard" />
                    <SidebarItem onClick={() => setSelectedSection("data_analysis")} title="Data Analysis" />
                    <SidebarItem onClick={() => setSelectedSection("crowd_analysis")} title="Crowd Analysis" />
                    <SidebarItem onClick={() => setSelectedSection("settings")} title="Settings" />
                </div>

                {/* green: outlet */}
                <div className='bg-gray-200 rounded-md p-5 w-full'>
                    <ChartArea />
                </div>

            </div>
        </Card>
    )
}

export default MainDataArea

function SidebarItem({ title, onClick }) {
    return (
        <div onClick={onClick} className='w-[200px] capitalize bg-[#1565C0] text-white hover:bg-[#5b799c] text-base font-medium cursor-pointer select-none rounded-md px-3 py-2'>{title}</div>
    )
}