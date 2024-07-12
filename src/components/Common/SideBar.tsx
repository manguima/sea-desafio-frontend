"use client";
import React, { useEffect, useState } from "react";
import { Badge, Flex, Layout, Menu } from "antd";
import useToken from "antd/es/theme/useToken";
import { listMenu } from "@/src/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedKey } from "@/src/redux/slices/menuSlice";
import { RootState } from "@/src/redux/store";
import { usePathname, useRouter } from "next/navigation";

const { Sider } = Layout;

const Sidebar = () => {
  const router = useRouter();

  const path = usePathname();

  const [token, theme] = useToken();

  const dispatch = useDispatch();
  const selectedKey = useSelector((state: RootState) => state.menu.selectedKey);

  useEffect(() => {
    listMenu.find((value, index) => {
      value.href === path.split("/")[1] &&
        dispatch(setSelectedKey([String(index)]));
    });
  }, []);

  const handleMenuClick = (e: string[]) => {
    dispatch(setSelectedKey(e));
  };

  return (
    <Sider
      collapsedWidth={"56px"}
      width={"auto"}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        background: "transparent",
      }}
    >
      <Menu
        mode="inline"
        theme="light"
        style={{
          height: "100vh",
          width: "56px",
          position: "relative",
          borderRadius: "0 20px 20px 0",
          borderRight: 0,
          background: theme.colorPrimary,
          top: 0,
          alignContent: "center",
        }}
        selectedKeys={selectedKey}
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
            const {
              content,
              icon: Icon,
              href,
              badge,
              badgeIcon: BadgeIcon,
            } = navigate;

            return (
              <Flex
                onMouseEnter={() =>
                  !selectedKey.find((value, i) => i !== 0) &&
                  handleMenuClick([...selectedKey, String(index)])
                }
                onMouseLeave={() =>
                  handleMenuClick([
                    ...selectedKey.filter((value, i) => i === 0),
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
                    background:
                      selectedKey &&
                      selectedKey.find((value) => String(index) === value)
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
                      <BadgeIcon size={15} color={theme.colorPrimary} />
                    ) : null
                  }
                >
                  <Menu.Item
                    style={{
                      padding: 0,
                      margin: 0,
                      width: "32px",
                      height: "32px",
                      background:
                        selectedKey &&
                        selectedKey.find((value) => String(index) === value)
                          ? "#fff"
                          : "#ffffff80",
                    }}
                    // SELECIONA ITEM DO MENU
                    onClick={() => {
                      handleMenuClick([String(index)]);
                      router.push(`/${navigate.href}`);
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
                      <Icon size={22} color={theme.colorPrimary} />
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
