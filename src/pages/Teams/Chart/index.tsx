import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

interface ChartType {
    data: Array<any>;
    setIsShowChart: any;
}
function Chart({ data, setIsShowChart }: ChartType) {
    const newData = data.map((item) => {
        return {
            label: `${item.team}`,
            value: `${item.pts}`,
        };
    });
    charts(FusionCharts);
    const dataSource = {
        chart: {
            caption: `Constructor Standings`,
            yaxisname: "Point (pts)",
            subcaption: `[${data[0].year}]`,
            numbersuffix: " pts",
            rotatelabels: "0",
            setadaptiveymin: "1",
            theme: "candy",
        },
        data: newData,
    };
    return (
        <div
            className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-[#000] bg-opacity-80"
            onClick={() => setIsShowChart(false)}
        >
            <div className="w-[70%] h-[70%]" onClick={(e: any) => e.stopPropagation()}>
                <ReactFusioncharts
                    type="column3d"
                    dataFormat="JSON"
                    width="100%"
                    height="100%"
                    dataSource={dataSource}
                    className="w-full h-full"
                    onClick={(e: any) => e.stopPropagation()}
                />
            </div>
        </div>
    );
}

export default Chart;
