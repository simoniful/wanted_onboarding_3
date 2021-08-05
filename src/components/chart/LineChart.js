import { Line } from 'react-chartjs-2';
import { color } from '../../styles/styles';

const LineChart = () => {
  const options = {
    maintainAspectRatio: false,
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const a = ['hi', 'hello', 'bye'];
  const data = {
    labels: a,
    datasets: [
      {
        label: '나이',
        data: [1, 2, 3],
        lineTension: 0,
        backgroundColor: `${color.AgreyLighter}`,
        borderWidth: 1,
        borderColor: `${color.greyDarker}`,
        fill: true,
      },
    ],
  };
  return <Line data={data} options={options} height={200} />;
};

export default LineChart;
