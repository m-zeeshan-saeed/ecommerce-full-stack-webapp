"use client";
import { useState, useEffect } from "react";

const CountDown = () => {
    const deadline = "Jan 10, 2026 23:59:59";
    const [days, setDays] = useState(0);
    const [timer, setTimer] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const currentDate = new Date();
            const targetDate = new Date(deadline);
            const timeLeft = targetDate.getTime() - currentDate.getTime();

            if (timeLeft <= 0) {
                setDays(0);
                setTimer({ hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const d = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
            const h = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
            const m = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
            const s = Math.floor((timeLeft % (60 * 1000)) / 1000);

            setDays(d);
            setTimer({ hours: h, minutes: m, seconds: s });
        };

        calculateTimeLeft();
        const intervalId = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(intervalId);
    }, [deadline]);

    return (
        <div className="p-5 flex flex-col   min-h-[160px]">
            <div>
                <div className=" font-extrabold text-lg text-gray-900 leading-tight">Deals and offers</div>
                <div className="text-gray-500 text-lg mt-1">Hygiene equipments</div>
            </div>


            <div className="flex gap-1.5 mt-4">
                {[
                    { label: "Days", value: days },
                    { label: "Hours", value: timer.hours },
                    { label: "Minutes", value: timer.minutes },
                    { label: "Seconds", value: timer.seconds },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-gray-700  text-white text-center w-11 h-12 rounded flex flex-col justify-center"
                    >
                        <div className="font-bold  text-sm leading-none mb-1px">{item.value}</div>
                        <div className="text-[10px]  text-gray-200">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CountDown;
