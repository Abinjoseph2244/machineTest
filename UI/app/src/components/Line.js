import React, { useEffect, useState } from 'react';
import { getLineData } from '../api';
import { LineChart } from '@mui/x-charts/LineChart';

function Line() {
    const [lineData, setLineData] = useState([]);
    const [yData, setYData] = useState([]);

    let xData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    const generateYaxisKey = (maxValue) => {
        let arr = [];
        for (let i = 0; i <= maxValue; i += 2) {
            arr.push(i);
        }
        return arr;
    };

    useEffect(() => {
        getLineData().then((res) => {
            setLineData(res);
        });
        return () => { };
    }, []);

    useEffect(() => {
        console.log('Graph data');
        console.log(lineData);

        // Create an array with 0 for each month
        const filledYData = Array.from({ length: 12 }, (_, index) => {
            const monthData = lineData.find((elem) => elem.x === xData[index]);
            return monthData ? monthData.y : 0;
        });

        setYData(filledYData);
    }, [lineData]);

    return (
        <LineChart
            height={450}
            series={[{ data: yData, },]}
            xAxis={[{ scaleType: 'band', data: xData }]}
            margin={{ top: 5, bottom: 20, left: 15,right:10 }}
        />
    );
}

export default Line;
