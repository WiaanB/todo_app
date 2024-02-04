import React, { useState, useEffect } from 'react';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const DayList: React.FC = () => {
    const [days, setDays] = useState<string[]>([]);
    const [selectedDay, setSelectedDay] = useState<number | null>(null);

    useEffect(() => {
        let dayArr = DAYS.slice(new Date().getDay(), 7);
        if (dayArr.length < 7) dayArr = dayArr.concat(DAYS.slice(0, 7 - dayArr.length))
        
        setDays(dayArr);
        setSelectedDay(0);
    },[])

    return <div>
        {days.at(selectedDay ?? 0)}
    </div>
};

export default DayList;