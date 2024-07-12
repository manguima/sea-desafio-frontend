import { IconX } from "@tabler/icons-react";
import { Button, Card, Flex, Typography } from "antd";
import useToken from "antd/es/theme/useToken";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const { Title, Text } = Typography;

const PopupAlert = ({
  open,
  setOpen,
  message,
}: {
  open: boolean;
  message: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [token, theme] = useToken();

  return (
    open && (
      <Flex
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 99999,
          background: "#00000020",
        }}
        justify="center"
        align="center"
      >
        <Card
          style={{
            minWidth: "200px",
            boxShadow: "0 2px 10px 2px #00000030",
            border: "2px solid #DBDBDB",
            background: "#FFF",
            borderRadius: "20px",
          }}
        >
          <Flex vertical gap={"10px"}>
            <Flex justify="end">
              <Button
                type="text"
                style={{ color: theme.colorPrimary, padding: 0 }}
                onClick={() => setOpen(false)}
              >
                <IconX />
              </Button>
            </Flex>
            <Flex>
              <Title style={{ fontSize: theme.fontSizeHeading3 }}>
                {message}
              </Title>
            </Flex>
            <Flex justify="center">
              <Button
                type="text"
                style={{ color: theme.colorPrimary }}
                size="large"
                onClick={() => setOpen(false)}
              >
                OK
              </Button>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    )
  );
};

export default PopupAlert;
