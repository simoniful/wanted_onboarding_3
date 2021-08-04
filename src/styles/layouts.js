import styled from 'styled-components';

export const layouts = {
  Wrap: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,

  Body: styled.body`
    width: 95%;
    margin: 0 auto;
    display: flex;
    background-color: white;
    gap: 16px;
  `,

  Section: styled.section`
    width: 100%;
    flex: 8;
  `,

  Aside: styled.aside`
    width: 100%;
    flex: 2;
    text-align: center;
  `,

  AccountButtonBox: styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;
  `,
};
