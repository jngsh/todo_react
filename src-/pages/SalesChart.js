import DailySalesBarChart from "../charts/DailySalesBarChart";
import DailySalesLineChart from "../charts/DailySalesLineChart";
import HourlySalesLineChart from "../charts/HourlySalesLineChart";
import MonthlySalesLineChart from "../charts/MonthlySalesLineChart";
import WeeklySalesLineChart from "../charts/WeeklySalesLineChart";
import YearlySalesLineChart from "../charts/YearlySalesLineChart";
import './SalesChart.css';

function SalesChart(){
    return(
        <div className="SalesChart">
            <HourlySalesLineChart className="HourlySalesLineChart" />
            <DailySalesLineChart className="DailySalesLineChart" />
            <DailySalesBarChart className="DaliySalesBarChart" />
            <WeeklySalesLineChart className="WeeklySalesLineChart" />
            <MonthlySalesLineChart className="MonthlySalesLineChart" />
            <YearlySalesLineChart className="YearlySalesLineChart" />
        </div>
    );
}

export default SalesChart;