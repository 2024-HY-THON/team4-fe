import ActionTimer from "@components/ActionPage/ActionTimer";
import { styled } from "styled-components";

export default function ActionPage() {
  return (
    <Layout>
      <ActionTimer />
    </Layout>
  );
}

const Layout = styled.div`
  height: 100vh;
`;
