import { layouts as S } from 'styles/layouts';
import { Bar } from 'react-chartjs-2';
import { COLOR_STYLES } from '../../styles/styles';

const BarChart = ({ chartData }) => {
  const labelList = Object.keys(chartData);
  const dataList = Object.values(chartData);
  const options = {
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const data = {
    labels: labelList,
    datasets: [
      {
        borderWidth: 1,
        data: dataList,
        backgroundColor: [`${COLOR_STYLES.AgreyDarker}`, `${COLOR_STYLES.AgreyLighter}`],
      },
    ],
  };
  return (
    <S.ChartWrap>
      <Bar data={data} options={options} height={200} />
    </S.ChartWrap>
  );
};

export default BarChart;
