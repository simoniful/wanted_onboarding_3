import styled from 'styled-components';

export const layouts = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,

  Body: styled.body`
    width: 100%;
    display: flex;
    /* background-color: #dddddd; */
    background-color: white;
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
};
