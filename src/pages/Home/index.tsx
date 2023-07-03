import { Link } from "react-router-dom";
import Car from "../../components/Car";
import race from "@assets/images/race.avif";
import driver from "@assets/images/driver.avif";
import team from "@assets/images/team.jpeg";
import award from "@assets/images/award.avif";

function Home() {
    return (
        <div>
            <div className="bg-tertiary flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 py-16">
                <Link to="/races" className="col-span-1 relative flex justify-center items-center ">
                    <div className="group rounded-xl overflow-hidden cursor-pointer">
                        <img src={race} alt="Race" className="aspect-video group-hover:scale-105 transition-all" />
                    </div>
                    <h2 className="text-white text-3xl font-bold absolute bottom-8 text-center">Races</h2>
                </Link>
                <Link to="/drivers" className="col-span-1 relative flex justify-center items-center ">
                    <div className="group rounded-xl overflow-hidden cursor-pointer">
                        <img src={driver} alt="Driver" className="aspect-video group-hover:scale-105 transition-all" />
                    </div>
                    <h2 className="text-white text-3xl font-bold absolute bottom-8 text-center">Drivers</h2>
                </Link>
                <Link to="/teams" className="col-span-1 relative flex justify-center items-center ">
                    <div className="group rounded-xl overflow-hidden cursor-pointer">
                        <img
                            src={team}
                            alt="Team"
                            className="aspect-video group-hover:scale-105 transition-all w-[432px]"
                        />
                    </div>
                    <h2 className="text-white text-3xl font-bold absolute bottom-8 text-center">Teams</h2>
                </Link>
                <Link to="/awards" className="col-span-1 relative flex justify-center items-center ">
                    <div className="group rounded-xl overflow-hidden cursor-pointer">
                        <img src={award} alt="Award" className="aspect-video group-hover:scale-105 transition-all" />
                    </div>
                    <h2 className="text-white text-3xl font-bold absolute bottom-8 text-center">
                        DHL Fastest Lap Award
                    </h2>
                </Link>
            </div>
            <div className="h-96">
                <Car />
            </div>
        </div>
    );
}

export default Home;
