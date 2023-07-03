import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
import { API_URL } from "../../variables";

function Awards() {
    const [awards, setAwards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [year, setYear] = useState(2023);

    const getAwards = async (year: number) => {
        try {
            const response = await axios.get(`${API_URL}/fastest-lap`, { params: { year: year } });
            setIsLoading(false);
            setAwards(response.data.fastestLap);
        } catch (error: any) {
            if (error.response.data) return error.response.data;
            else return { success: false, message: error.message };
        }
    };

    const handleFilter = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        getAwards(year);
    };

    useEffect(() => {
        getAwards(year);
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
                <div className="grid grid-cols-12 text-xs text-gray-600 font-medium px-[26px] bg-gray-300 border-b-2 border-gray-800">
                    <div className="col-span-4 px-5 pt-[18px] pb-[14px]">GRAND PRIX</div>
                    <div className="col-span-3 px-5 pt-[18px] pb-[14px]">DRIVER</div>
                    <div className="col-span-3 px-5 pt-[18px] pb-[14px]">CAR</div>
                    <div className="col-span-2 px-5 pt-[18px] pb-[14px]">TIME</div>
                </div>
                {awards.map((award: any, index: number) => {
                    return (
                        <div
                            key={index}
                            className="grid grid-cols-12 text-xs font-medium px-[26px] [&:nth-child(odd)]:bg-[#f4f4f4] border-b-2 border-gray-800"
                        >
                            <div className="col-span-4 px-5 pt-[18px] pb-[14px] text-gray-600">{award.grandPrix}</div>
                            <div className="col-span-3 px-5 pt-[18px] pb-[14px]">{award.driver}</div>
                            <div className="col-span-3 px-5 pt-[18px] pb-[14px]">{award.car}</div>
                            <div className="col-span-2 px-5 pt-[18px] pb-[14px]">{award.time}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Awards;
