"use client"
import { AddFileIcon } from '@/icon'
import { Button } from 'antd'
import React from 'react'
import { FleetZoneManagementStat } from './FleetZoneManagementStat'
import FleetZoneManagementTable from './FleetZoneManagementTable'
import AddZod from '@/components/(adminDashboard)/modals/user/AddZod'

export default function FleetZoneManagementContainer() {
    const [open, setOpen] = React.useState(false);
    return (
        <div className='space-y-5'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-2xl font-bold'>Fleet & Zone Management</h3>
                    <p className='text-[#6B7280]'>Monitor and manage delivery zones and rider assignments</p>
                </div>
                <Button onClick={() => setOpen(true)} icon={<AddFileIcon className='mt-1' />} size='large' type='default' className='!bg-[#FFF9E6] !text-[#FEC400] !border-[#FEC400]' >Add Zone</Button>
            </div>
            <div>
                <FleetZoneManagementStat />
            </div>
            <div>
                <FleetZoneManagementTable />
            </div>
            <AddZod open={open} setOpen={setOpen} typeUser='zone' />
        </div>
    )
}
