"use client";
import { useState, useEffect } from "react";

const CountDown = () => {
    const deadline = "Jan 25, 2026 23:59:59";
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
        <div className="p-5 flex flex-col min-h-[250px] justify-start items-start col-span-2">
            <div>
                <div className=" font-extrabold text-[25px] text-gray-900 leading-tight">Deals and offers</div>
                <div className="text-gray-500 text-[20px] mt-1">Hygiene equipments</div>
            </div>


            <div className="flex gap-1.5 mt-4 w-full items-center">
                {[
                    { label: "Days", value: days },
                    { label: "Hours", value: timer.hours },
                    { label: "Minutes", value: timer.minutes },
                    { label: "Seconds", value: timer.seconds },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-gray-700 text-white text-center min-w-11 w-[25%] aspect-square rounded-lg flex flex-col justify-center"
                    >
                        <div className="font-bold text-lg leading-none mb-1px">{item.value}</div>
                        <div className="text-xs  text-gray-200">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CountDown;
