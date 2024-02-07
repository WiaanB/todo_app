import React, { useState, useEffect } from 'react';

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const DayList: React.FC = () => {
    const [days, setDays] = useState<string[]>([]);
    const [selectedDay, setSelectedDay] = useState<number | null>(null);

    useEffect(() => {
        let dayArr = DAYS_OF_WEEK.slice(new Date().getDay(), 7);
        if (dayArr.length < 7) dayArr = dayArr.concat(DAYS_OF_WEEK.slice(0, 7 - dayArr.length));
        
        setDays(dayArr);
        setSelectedDay(0);
    },[])

    // const handleDayClick = (index: number) => {
    //     setSelectedDay(index);
    // };

    return <div>
        <p>The selected day is: {days[selectedDay ?? 0]}</p>
    </div>
};

export default DayList;