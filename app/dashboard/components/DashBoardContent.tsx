import React from 'react'
import DashboardLayout from "@/app/dashboard/DashboardLayout";
import { DashBoardButtons } from '@/constants';
import CustomNavButton from "@/components/CustomNavButton"
import { title } from 'process';
import { BarChart } from 'lucide-react';
const DashBoardContent = () => {
    return (
        <DashboardLayout>

            <div className='m-32 '>
                <h1 className='font-9xl font-black   font-sans  tracking-wider'>My DashBoard</h1>
                <div className='flex flex-row mt-8 mx-4'>
                    {
                        DashBoardButtons.map((button) => {
                            return (
                                <div className='mx-2'>
                                    <CustomNavButton title={button} />

                                </div>

                            )
                        })
                    }
                </div>

                <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-blue-500 mt-4">
                    <div className="p-6 flex flex-row  justify-between">
                        <h2 className="text-xl font-bold mb-2">Revenue Flow</h2>
                        <button>View All</button>
                    </div>
                    <div className="max-2-lg h-48 bg-blue-500 flex items-center justify-center text-white">
                        {/* This is the styled div */}
                        {/* <div className="w-full h-full flex items-center justify-center">
                            Full Width and Height Div
                        </div> */}
                        <BarChart />
                    </div>
                </div>
                <div className='flex flex-row'>

                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-blue-500 mt-4">
                        <div className="p-6 flex flex-row  justify-between">
                            <h2 className="text-xl font-bold mb-2">Revenue Flow</h2>
                            <button>View All</button>
                        </div>
                        <div className="w-full h-48 bg-blue-500 flex items-center justify-center text-white">
                            {/* This is the styled div */}
                            <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center">
            <h3 className="text-3xl font-semibold">$5,000</h3>
            <p className="text-md">Revenue: +12%</p>
          </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='flex flex-col'> */}

                    <div className="flex flex-row ">
      {/* Income Card */}
      <div className=" rounded-lg overflow-hidden shadow-lg bg-green-500 mt-4 mx-2">
        <div className="p-6 flex flex-row justify-between">
          <h2 className="text-xl font-bold mb-2">Income</h2>
          <button className="text-white hover:underline">View All</button>
        </div>
        <div className="w-full h-48 bg-green-500 flex items-center justify-center text-white">
          {/* Income Amount */}
          <div className="text-center">
            <h3 className="text-3xl font-semibold">$5,000</h3>
            <p className="text-md">This Week's Income: +12%</p>
          </div>
        </div>
      </div>

      {/* Expense Card */}
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-red-500 mt-4 mx-2">
        <div className="p-6 flex flex-row justify-between">
          <h2 className="text-xl font-bold mb-2">Expenses</h2>
          <button className="text-white hover:underline">View All</button>
        </div>
        <div className="w-full h-48 bg-red-500 flex items-center justify-center text-white">
          {/* Expense Amount */}
          <div className="text-center">
            <h3 className="text-3xl font-semibold">$2,500</h3>
            <p className="text-md">This Week's Expenses: +5%</p>
          </div>
        </div>
      </div>
    </div>

                    </div>
                </div>
            {/* </div> */}
        </DashboardLayout>
    )
}
export default DashBoardContent
