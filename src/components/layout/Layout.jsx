import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { GlobalStyle } from "../../styles/globalStyles";
import styled from "styled-components";
import Header from "./Header";
import SideMenu from "./SideMenu";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <LayoutWrapper>
        <SideMenu />
        <MainContent>{children}</MainContent>
      </LayoutWrapper>
    </ThemeProvider>
  );
}

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: calc(100vh - ${theme.layout.headerHeight});
  overflow: hidden;
`;

export const MainContent = styled.main`
  background-color: #fafafa;
  flex: 1;
  max-width: calc(100vw - ${theme.layout.sidebarWidth});
`;
