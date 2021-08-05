import styled from 'styled-components';

export const layouts = {
  Wrap: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,

  Container: styled.div`
    width: 70vw;
    margin: 0 auto;
  `,

  Section: styled.section`
    display: flex;
    flex: 6;
    width: 100%;
  `,

  Content: styled.div`
    padding: 10px;
  `,

  Aside: styled.aside`
    width: 100%;
    padding: 10px 10px;
    text-align: center;
  `,

  Sidebar: styled.div`
    width: 100%;
  `,

  ButtonBox: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    padding: 25px 10px 0 10px;
  `,

  AccountBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 27px auto;
  `,

  ChartWrap: styled.div`
    height: 160px;
  `,
};
