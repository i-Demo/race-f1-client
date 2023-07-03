import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
import { API_URL } from "../../variables";
import Chart from "./Chart";

function Teams() {
    const [teams, setTeams] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [year, setYear] = useState(2023);
    const [isShowChart, setIsShowChart] = useState(false);

    const getTeams = async (year: number) => {
        try {
            const response = await axios.get(`${API_URL}/team`, { params: { year: year } });
            setIsLoading(false);
            setTeams(response.data.teams);
        } catch (error: any) {
            if (error.response.data) return error.response.data;
            else return { success: false, message: error.message };
        }
    };

    const handleFilter = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        getTeams(year);
    };

    useEffect(() => {
        getTeams(year);
    }, []);

    if (isLoading) return <Loading />;
    return (
        <div className="py-8">
            <div className="flex justify-between px-10">
                <form onSubmit={handleFilter} method="get" className="mb-6 flex gap-8">
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
                <button
                    className="px-6 h-12 bg-red-600 rounded-lg hover:opacity-95"
                    onClick={() => setIsShowChart(true)}
                >
                    View Chart
                </button>
            </div>

            <div className="md:px-10">
                <div className="grid grid-cols-7 text-xs text-gray-600 font-medium px-[26px] bg-gray-300 border-b-2 border-gray-800">
                    <div className="col-span-1 px-5 pt-[18px] pb-[14px]">POS</div>
                    <div className="col-span-5 px-5 pt-[18px] pb-[14px]">TEAM</div>
                    <div className="col-span-1 px-5 pt-[18px] pb-[14px]">PTS</div>
                </div>
                {teams.map((team: any, index: number) => {
                    return (
                        <div
                            key={index}
                            className="grid grid-cols-7 text-xs font-medium px-[26px] [&:nth-child(odd)]:bg-[#f4f4f4] border-b-2 border-gray-800"
                        >
                            <div className="col-span-1 px-5 pt-[18px] pb-[14px]">{index + 1}</div>
                            <div className="col-span-5 px-5 pt-[18px] pb-[14px]">{team.team}</div>
                            <div className="col-span-1 px-5 pt-[18px] pb-[14px]">{team.pts}</div>
                        </div>
                    );
                })}
            </div>
            {isShowChart && <Chart data={teams} setIsShowChart={setIsShowChart} />}
        </div>
    );
}

export default Teams;
