"use client";
import React, { ReactNode } from "react";
import { Card, Flex } from "antd";
import { Icon, IconBuilding, IconProps } from "@tabler/icons-react";
import useToken from "antd/es/theme/useToken";
import Title from "antd/es/typography/Title";

type CompanyProps = {
  current: number;
  handleChange: (current: number) => void;
};

const CompanyList = ({ current, handleChange }: CompanyProps) => {
  const [token, theme] = useToken();

  return (
    <Card
      style={{
        background: theme.colorWhite,
        border: "unset",
        borderRadius: "20px",
        boxShadow: "0 0 20px 1px #00000010",
      }}
    >
      <Flex align="center" justify="space-between">
        {[...Array(9)].map((company, index) => {
          return (
            <>
              {index !== 0 && (
                <div
                  style={{
                    width: "100%",
                    height: "4px",
                    marginTop: "-32px",
                    background: `repeating-linear-gradient(
                    to right,
                    ${theme.colorPrimary} 0,
                    ${theme.colorPrimary} 10px, /* Largura do traço */
                    transparent 10px,
                    transparent 20px /* Largura do espaço entre os traços */
                  )`,
                  }}
                ></div>
              )}
              <Flex vertical key={index}>
                <Flex align="center" justify="center" gap={"8px"} vertical>
                  <Flex
                    style={{
                      width: "64px",
                      height: "64px",
                      background:
                        current >= index ? theme.colorPrimary : "#DBDBDB",
                      borderRadius: "20px",
                      border: current === index ? "2px solid #000" : undefined,
                      boxShadow: "0px 3px 6px 0px #00000030",
                    }}
                    align="center"
                    justify="center"
                  >
                    <IconBuilding size="45px" color={theme.colorWhite} />
                  </Flex>
                  <Title
                    style={{
                      fontSize: theme.fontSizeSM,
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Item {index + 1}
                  </Title>
                </Flex>
              </Flex>
            </>
          );
        })}
      </Flex>
    </Card>
  );
};

export default CompanyList;
