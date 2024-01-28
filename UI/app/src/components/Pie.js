import React, { useEffect, useState } from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { getPieChartData } from '../api';
import './Pie.css'
import { alignProperty } from '@mui/material/styles/cssUtils';

function Pie() {
    const [pieData, setPieData] = useState([])
    useEffect(() => {
        getPieChartData()
            .then(res => {
                console.log("Pie chart data")
                console.log(res)
                setPieData(res)
            })
        return () => { }
    }, [])
    return (
        <PieChart
            colors={['#D0FFD0', '#C0FEC0', '#B0FAB0', '#A0F4A0', '#90EE90']} // Use palette
            series={[{ data: pieData }]}
            width={320}
            height={450}
            title='none'
            margin={{ top: -150, right: 20, bottom: 20, left: 20 }}
            // slots={}
            slotProps={{
                legend: {
                    direction: 'column',
                    position: {
                        horizontal: 'left',
                        vertical: 'bottom',
                    },
                    itemMarkWidth: 10,
                    itemMarkHeight: 10,
                    markGap: 5,
                    itemGap: 10,
                }
            }}
        />
    )
}

export default Pie