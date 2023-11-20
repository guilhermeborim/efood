import styles from 'styled-components'

export const FooterContainer = styles.footer`
  background-color: #FFEBD9;

`

export const FooterContent = styles.section`
  padding: 40px 0;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  div img {
    width: 125px;
  }
  article {
    display: flex; 
    justify-content: center;
    gap: 8px;
    padding-top: 32px;
    padding-bottom: 80px;
    width: 24px;
  }


  p {
    color: #E66767;
    font-size: 12px;
    font-weight: 400;
    line-height: 14.06px;
    text-align: center;
    width: 480px;
    margin: 0 auto;
  }
`
