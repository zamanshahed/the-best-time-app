import React from 'react';
import MainDataArea from './Components/MainDataArea';
import Topbar from './Components/Topbar';

export default function Home() {
    // const { mainData } = useGeneralStore();
    return (
        <div className="flex flex-col  bg-slate-700 h-screen">
            <div className="p-5">
                <Topbar />
            </div>
            <div className="m-5">
                <MainDataArea />
            </div>
        </div>
    )
}
