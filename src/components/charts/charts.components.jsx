import ReactApexChart from 'react-apexcharts';

const ApexChartExample = ({height, type}) => {
  // Example data and options
  const chartOptions = {
    // ApexCharts options here
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
  };

  const chartData = [
    {
      name: 'Visitors',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 100, 130, 140],
    },
  ];

  return (
    <div>
      
      <ReactApexChart options={chartOptions} series={chartData} type={type} height={height} />
    </div>
  );
};

export default ApexChartExample;