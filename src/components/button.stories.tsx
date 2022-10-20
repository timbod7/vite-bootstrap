import { Button } from './button';
import styled from "styled-components";


export default {
  title: 'Button', 
  component: Button,
};

export const Buttons = () =>   (
  <Grid>
    <Button>Standard</Button>
    <Button $loading disabled={true}>Standard (loading)</Button>
    <Button disabled={true}>Standard (disabled)</Button>

    <Button primary>Primary</Button>
    <Button primary $loading disabled={true}>Primary (loading)</Button>
    <Button disabled={true} primary>Primary (disabled)</Button>

    <Button basic>Basic</Button>
    <Button basic $loading disabled={true}>Basic (loading)</Button>
    <Button disabled={true} basic>Basic (disabled)</Button>
  </Grid>
)


  const Grid = styled.div`
    display:grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  `;
