import { ZoneCard } from "@/components/(adminDashboard)/cards/ZoneCard"


const ZONES_DATA = [
    { id: "uptown", name: "Uptown Zone", totalRiders: 24, activeNow: 18 },
    { id: "midtown", name: "Midtown", totalRiders: 24, activeNow: 18 },
    { id: "downtown", name: "Downtown", totalRiders: 24, activeNow: 18 },
]

export function FleetZoneManagementStat() {
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {ZONES_DATA.map((zone) => (
                <ZoneCard key={zone.id} name={zone.name} totalRiders={zone.totalRiders} activeNow={zone.activeNow} />
            ))}
        </div>
    )
}
