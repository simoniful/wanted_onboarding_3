import { layouts as S } from 'styles/layouts';
import { Doughnut } from 'react-chartjs-2';
import { COLOR_STYLES } from '../../styles/styles';

const DoughnutChart = ({ chartList }) => {
  const labelList = Object.keys(chartList);
  const dataList = Object.values(chartList);
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
    labels: labelList,
    datasets: [
      {
        data: dataList,
        backgroundColor: [
          `${COLOR_STYLES.AgreyDarker}`,
          `${COLOR_STYLES.AgreyLighter}`,
          `${COLOR_STYLES.AgreyDarker}`,
        ],
      },
    ],
    hoverOffset: 4,
  };
  return (
    <S.ChartWrap>
      <Doughnut data={data} options={options} height={200} />
    </S.ChartWrap>
  );
};

export default DoughnutChart;
