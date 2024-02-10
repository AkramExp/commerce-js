import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import GoToTop from "../GoToTop";

const StyledAppLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Outlet />
      <Footer />
      <GoToTop />
    </StyledAppLayout>
  );
}
