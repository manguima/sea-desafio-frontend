"use client";
import { Flex, Layout } from "antd";
import useToken from "antd/es/theme/useToken";
import Title from "antd/es/typography/Title";

const { Content } = Layout;

export default function ShortlyPage() {
  const [token, theme] = useToken();

  return (
    <Content>
      <Flex
        justify="center"
        align="center"
        style={{
          height: "55px",
          width: "100%",
          borderRadius: "20px",
          background: theme.colorPrimary,
        }}
      >
        <Title
          style={{
            color: theme.colorWhite,
            margin: 0,
            padding: 0,
          }}
        >
          Em breve
        </Title>
      </Flex>
    </Content>
  );
}
