import styled from 'styled-components';

export const layouts = {
  Wrap: styled.body`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,

  Container: styled.div`
    width: 90%;
    margin: 0 auto;
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
    width: 20%;
    margin-left: 30%;
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
    padding: 10px 8px;
    text-align: center;
  `,
  Sidebar: styled.div`
    width: 100%;
   `,
};
