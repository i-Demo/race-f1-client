import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { API_URL } from "../../variables";
function Races() {
    const [races, setRaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [year, setYear] = useState(2023);

    const getRaces = async (year: number) => {
        try {
            const response = await axios.get(`${API_URL}/races`, { params: { year: year, pos: "1" } });
            setIsLoading(false);
            setRaces(response.data.races);
        } catch (error: any) {
            if (error.response.data) return error.response.data;
            else return { success: false, message: error.message };
        }
    };

    const handleFilter = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        getRaces(year);
    };

    useEffect(() => {
        getRaces(year);
    }, []);

    if (isLoading) return <Loading />;
    return (
        <div className="py-8">
            <form onSubmit={handleFilter} method="get" className="mb-6 flex gap-8 px-10">
                <select
                    name="year"
                    id="year"
                    className="bg-gray-300 w-28"
                    value={year}
                    onChange={(e: any) => setYear(e.target.value)}
                >
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </select>
                <button type="submit" className="px-6 py-3 bg-emerald-600 rounded-lg hover:opacity-95">
                    Filter
                </button>
            </form>

            <div className="md:px-10">
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7 text-xs text-gray-600 font-medium px-[26px] bg-gray-300 border-b-2 border-gray-800">
                    <div className="col-span-1 px-5 pt-[18px] pb-[14px]">GRAND PRIX</div>
                    <div className="col-span-1 px-5 pt-[18px] pb-[14px] hidden md:block">DATE</div>
                    <div className="col-span-1 px-5 pt-[18px] pb-[14px]">WINNER</div>
                    <div className="col-span-2 px-5 pt-[18px] pb-[14px]">CAR</div>
                    <div className="col-span-1 px-5 pt-[18px] pb-[14px] hidden md:block">LAPS</div>
                    <div className="col-span-1 px-5 pt-[18px] pb-[14px] hidden lg:block">TIME</div>
                </div>
                {races.length === 0 ? (
                    <div className="flex justify-center mt-4 text-sm text-gray-500">Hiện tại chưa có dữ liệu nào.</div>
                ) : (
                    races.map((race: any, index: number) => {
                        return (
                            <div
                                key={index}
                                className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7 text-xs font-medium px-[26px] [&:nth-child(odd)]:bg-[#f4f4f4] border-b-2 border-gray-800"
                            >
                                <Link
                                    to={`/race-result/${race.year}/${race.grandPrix}`}
                                    className="col-span-1 px-5 pt-[18px] pb-[14px]"
                                >
                                    {race.grandPrix}
                                </Link>
                                <div className="col-span-1 px-5 pt-[18px] pb-[14px] text-gray-600 hidden md:block">
                                    {race.date}
                                </div>
                                <div className="col-span-1 px-5 pt-[18px] pb-[14px]">{race.driver}</div>
                                <div className="col-span-2 px-5 pt-[18px] pb-[14px]">{race.car}</div>
                                <div className="col-span-1 px-5 pt-[18px] pb-[14px] hidden md:block">{race.laps}</div>
                                <div className="col-span-1 px-5 pt-[18px] pb-[14px] hidden lg:block">{race.time}</div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default Races;
