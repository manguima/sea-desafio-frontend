"use client";
import React, { useEffect, useState } from "react";
import { Badge, Flex, Layout, Menu } from "antd";
import useToken from "antd/es/theme/useToken";
import { listMenu } from "@/src/utils/constants";
import { useRouter } from "next/navigation";

const { Sider } = Layout;

const Sidebar = () => {
  const router = useRouter();

  const [token, colors] = useToken();

  const { Sider } = Layout;

  const [selectedMenu, setSelectedMenu] = useState<String[]>(["0"]);

  useEffect(() => {
    console.log(selectedMenu);
  }, [selectedMenu]);

  return (
    <Sider
      collapsedWidth={"56px"}
      width={"auto"}
      style={{ background: "transparent" }}
    >
      <Menu
        mode="inline"
        theme="dark"
        style={{
          height: "100vh",
          width: "56px",
          position: "relative",
          borderRadius: "0 20px 20px 0",
          borderRight: 0,
          background: colors.colorPrimary,
          alignContent: "center",
        }}
      >
        {/* REPRESENTACAO DE LOGO (ACREDITO  QUE É ISSO) */}
        <div
          style={{
            width: "100%",
            height: "41px",
            position: "absolute",
            top: "50px",
            left: 0,
            background: "#fff",
          }}
        ></div>
        {/* MENU */}

        <Flex
          vertical
          gap={"24px"}
          style={{ width: "100%" }}
          justify="center"
          align="center"
        >
          {listMenu.map((navigate, index) => {
            const { content, icon, href, badge, badgeIcon } = navigate;

            const Icon = icon;
            const BadgeIcon: any = badge ? badgeIcon : undefined;

            return (
              <Flex
                onMouseEnter={() =>
                  !selectedMenu.find((value, i) => i !== 0) &&
                  setSelectedMenu((prev) => [...prev, String(index)])
                }
                onMouseLeave={() =>
                  setSelectedMenu((prev) => [
                    ...prev.filter((value, i) => i === 0),
                  ])
                }
                style={{ width: "100%" }}
                justify="center"
                align="center"
              >
                {/* BARRA LATERAL APARECE QUANDO SELECIONADO */}
                <div
                  style={{
                    height: "32px",
                    width: "4px",
                    background: selectedMenu.find(
                      (value) => String(index) === value
                    )
                      ? "#fff"
                      : "transparent",
                    position: "absolute",
                    transition: "all ease 0.4s",
                    left: 0,
                  }}
                ></div>

                <Badge
                  offset={[0, 30]}
                  style={{
                    background: "#fff",
                    borderRadius: "4px",
                  }}
                  //  VALIDA BADGE SOMENTE PARA OS QUE POSSUEM
                  count={
                    badge ? (
                      <BadgeIcon size={15} color={colors.colorPrimary} />
                    ) : null
                  }
                >
                  <Menu.Item
                    style={{
                      padding: 0,
                      margin: 0,
                      width: "32px",
                      height: "32px",
                      background: selectedMenu.find(
                        (value) => String(index) === value
                      )
                        ? "#fff"
                        : "#ffffff80",
                    }}
                    // SELECIONA ITEM DO MENU
                    onClick={() => {
                      setSelectedMenu([String(index)]);
                      router.push(navigate.href);
                    }}
                    key={index}
                  >
                    <Flex
                      style={{
                        width: "100%",
                      }}
                      align="center"
                      justify="center"
                    >
                      <Icon size={22} color={colors.colorPrimary} />
                    </Flex>
                    {/* {content} */}
                  </Menu.Item>
                </Badge>
              </Flex>
            );
          })}
        </Flex>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
