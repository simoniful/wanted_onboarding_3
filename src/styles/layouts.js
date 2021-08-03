import styled from 'styled-components';

export const layouts = {
  Wrap: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,

  Body: styled.body`
    width: 90%;
    margin: 0 auto;
    display: flex;
    border: 1px solid red;
    padding-top: 20px;
  `,

  Section: styled.section`
    width: 100%;
    flex: 6;
  `,

  Aside: styled.aside`
    width: 100%;
    flex: 4;
    text-align: center;
  `,

  AccountContainer: styled.div`
    width: 78%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  `,
};
