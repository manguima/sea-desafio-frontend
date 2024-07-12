import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import { ConfigProvider, Flex, Layout } from "antd";
import { theme } from "@/src/utils/constants";
import Sidebar from "@/src/components/Common/SideBar";

export const metadata: Metadata = {
  title: "Sea - Desafio",
  description: "Teste de vaga desenvolvedor frontend Sea Tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <Layout style={{ minHeight: "100vh", background: "#f2f2f2" }}>
              <Sidebar />
              <Flex style={{ width: "100%", padding: "30px" }}>{children}</Flex>
            </Layout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
