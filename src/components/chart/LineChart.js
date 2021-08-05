import { layouts as S } from 'styles/layouts';
import { Line } from 'react-chartjs-2';
import { COLOR_STYLES } from '../../styles/styles';

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
        backgroundColor: `${COLOR_STYLES.AgreyLighter}`,
        borderWidth: 1,
        borderColor: `${COLOR_STYLES.greyDarker}`,
        fill: true,
      },
    ],
  };
  return (
    <S.ChartWrap>
      <Line data={data} options={options} height={200} />
    </S.ChartWrap>
  );
};

export default LineChart;
