import { layouts as S } from 'styles/layouts';
import { Bar } from 'react-chartjs-2';
import { color } from '../../styles/styles';


const BarChart = () => {
  const options = {
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const data = {
    labels: ['1번 막대', '2번 막대', '3번 막대'],
    datasets: [
      {
        borderWidth: 1,
        data: [1, 2, 3],
        backgroundColor: [`${color.AgreyDarker}`, `${color.AgreyLighter}`, `${color.AgreyDarker}`],
      },
    ],
  };
  return(
    <S.ChartWrap>
      <Bar data={data} options={options} height={200} />
    </S.ChartWrap> 
  ) 
};

export default BarChart;
