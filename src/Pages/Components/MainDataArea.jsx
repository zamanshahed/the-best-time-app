import React from 'react'
import Card from '../Card'
import ChartArea from './ChartArea'


function MainDataArea() {
    return (
        <Card>

            <div className="pb-5 text-4xl font-semibold">Dashboard</div>

            <div className="flex justify-between space-x-5">
                <div className='space-y-3 bg-gray-200 rounded-md p-5'>
                    <SidebarItem title="Dashboard" />
                    <SidebarItem title="Data Analysis" />
                    <SidebarItem title="Data Analysis" />
                    <SidebarItem title="Settings" />
                </div>

                {/* green: outlet */}
                <div className='bg-gray-200 rounded-md p-5 w-full'>
                    V-CHARTS
                    <ChartArea />
                </div>

            </div>
        </Card>
    )
}

export default MainDataArea

function SidebarItem({ title }) {
    return (
        <div className='w-[200px] capitalize bg-[#1565C0] text-white hover:bg-[#5b799c] text-base font-medium cursor-pointer select-none rounded-md px-3 py-2'>{title}</div>
    )
}