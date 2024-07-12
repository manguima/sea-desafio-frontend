import { Flex } from "antd";
import useToken from "antd/es/theme/useToken";
import Title from "antd/es/typography/Title";

export default function EmployeesPage() {
  const [token, colors] = useToken();

  return (
    <Flex
      justify="center"
      align="center"
      style={{
        height: "55px",
        width: "100%",
        borderRadius: "20px",
        background: colors.colorPrimary,
      }}
    >
      <Title
        style={{
          color: colors.colorWhite,
          margin: 0,
          padding: 0,
        }}
      >
        Funcionarios
      </Title>
    </Flex>
  );
}
