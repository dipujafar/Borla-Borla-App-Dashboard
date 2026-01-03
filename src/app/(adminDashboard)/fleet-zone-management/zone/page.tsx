"use client"
import { AddFileIcon } from "@/icon"
import { Button } from "antd"
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import UptownZoneTable from "./_components/UptownZoneTable";
import AddZIPCode from "@/components/(adminDashboard)/modals/user/AddZIPCode";

export default function page() {
    const [open, setOpen] = React.useState(false);
    const router = useRouter();
    return (
        <div className="space-y-5">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                    <div>
                        <ArrowLeft className="h-5 w-5" onClick={() => router.back()} />
                    </div>
                    <div>
                        <h4 className="text-2xl text-[#111827] font-bold">Uptown Zone</h4>
                        <p className="text-[#6B7280]">Manage ZIP codes and coverage areas</p>
                    </div>
                </div>
                <div>
                    <Button onClick={() => setOpen(true)} icon={<AddFileIcon className='mt-1' />} size='large' type='default' className='!bg-[#FFF9E6] !text-[#FEC400] !border-[#FEC400]' >Add ZIP Code</Button>
                </div>
            </div>


            <div className="flex items-center gap-x-2 ">
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50 min-w-[160px]">
                    <p className="text-muted-foreground text-sm mb-2">Total Area</p>
                    <p className="text-foreground text-2xl font-semibold">24</p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50 min-w-[160px]">
                    <p className="text-muted-foreground text-sm mb-2">Active Riders</p>
                    <p className="text-foreground text-2xl font-semibold">847</p>
                </div>
            </div>

            <UptownZoneTable />
            <AddZIPCode open={open} setOpen={setOpen} typeUser='zone' />
        </div>
    )
}
