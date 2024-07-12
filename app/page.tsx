"use client";
import Shortly from "@/src/components/Common/Shortly";
import { Layout } from "antd";

export default function Home() {
  const { Content } = Layout;
  return (
    <Content>
      <Shortly />
    </Content>
  );
}
