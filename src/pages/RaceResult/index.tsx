import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_URL } from "../../variables";
import Loading from "../../components/Loading";

function RaceResult() {
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [raceResult, setRaceResult] = useState([]);

    const getRaces = async () => {
        try {
            const response = await axios.get(`${API_URL}/races/result`, { params: params });
            setIsLoading(false);
            setRaceResult(response.data.races);
        } catch (error: any) {
            if (error.response.data) return error.response.data;
            else return { success: false, message: error.message };
        }
    };
    useEffect(() => {
        getRaces();
    }, []);

    if (isLoading) return <Loading />;

    return (
        <div>
            <div className="py-8">
                <div className="md:px-10">
                    <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 text-xs text-gray-600 font-medium px-[26px] bg-gray-300 border-b-2 border-gray-800">
                        <div className="col-span-1 px-5 pt-[18px] pb-[14px]">POS</div>
                        <div className="col-span-1 px-5 pt-[18px] pb-[14px] hidden md:block">NO</div>
                        <div className="col-span-2 px-5 pt-[18px] pb-[14px]">DRIVER</div>
                        <div className="col-span-4 px-5 pt-[18px] pb-[14px] hidden lg:block">CAR</div>
                        <div className="col-span-1 px-5 pt-[18px] pb-[14px] hidden md:block">LAPS</div>
                        <div className="col-span-2 px-5 pt-[18px] pb-[14px]">TIME/RETIRED</div>
                        <div className="col-span-1 px-5 pt-[18px] pb-[14px]">PTS</div>
                    </div>
                    {raceResult.map((race: any, index: number) => {
                        return (
                            <div
                                key={index}
                                className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 text-xs font-medium px-[26px] [&:nth-child(odd)]:bg-[#f4f4f4] border-b-2 border-gray-800"
                            >
                                <div className="col-span-1 px-5 pt-[18px] pb-[14px] text-gray-500">{race.pos}</div>
                                <div className="col-span-1 px-5 pt-[18px] pb-[14px] text-gray-500 hidden md:block">
                                    {race.no}
                                </div>
                                <div className="col-span-2 px-5 pt-[18px] pb-[14px]">{race.driver}</div>
                                <div className="col-span-4 px-5 pt-[18px] pb-[14px] hidden lg:block">{race.car}</div>
                                <div className="col-span-1 px-5 pt-[18px] pb-[14px] hidden md:block">{race.laps}</div>
                                <div className="col-span-2 px-5 pt-[18px] pb-[14px]">{race.time}</div>
                                <div className="col-span-1 px-5 pt-[18px] pb-[14px]">{race.pts}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default RaceResult;
