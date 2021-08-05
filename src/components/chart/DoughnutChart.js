import { layouts as S } from 'styles/layouts';
import { Doughnut } from 'react-chartjs-2';
import { color } from '../../styles/styles';

const DoughnutChart = () => {
  const options = {
    maintainAspectRatio: false,

    plugins: {
      datalabels: {
        display: true,
        align: 'bottom',
        backgroundColor: '#ccc',
        borderRadius: 3,
        font: {
          size: 18,
        },
      },
    },
  };

  const data = {
    labels: ['뉴욕시', '부산시', '서울시'],
    datasets: [
      {
        data: [100, 300, 200],
        backgroundColor: [`${color.AgreyDarker}`, `${color.AgreyLighter}`, `${color.AgreyDarker}`],
      },
    ],
    hoverOffset: 4,
  };
  return( 
    <S.ChartWrap>
      <Doughnut data={data} options={options} height={200} />
    </S.ChartWrap>
  )
};

export default DoughnutChart;
