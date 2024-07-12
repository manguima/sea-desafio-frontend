"use client";
import Shortly from "@/src/components/Common/Shortly";
import { Layout } from "antd";

const { Content } = Layout;

export default function Home() {
  return (
    <Content>
      <Shortly />
    </Content>
  );
}
