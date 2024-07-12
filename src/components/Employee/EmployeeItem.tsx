import React, { useState } from "react";
import { Badge, Button, Dropdown, Flex, Typography } from "antd";
import { Employee } from "@/src/types/employee";
import useToken from "antd/es/theme/useToken";
import { IconDots } from "@tabler/icons-react";
import PopupAlert from "../Common/PopupAlert";

interface EmployeeItemProps {
  employee: Employee;
  onSelect: () => void;
}

const { Title } = Typography;

const EmployeeItem: React.FC<EmployeeItemProps> = ({ employee, onSelect }) => {
  const [token, theme] = useToken();

  // ALERTA DE USUARIO EXLCUIDO
  const [alertDeleteUser, setAlertDeleteUser] = useState(false);

  return (
    <Flex
      gap={"8px"}
      vertical
      style={{
        cursor: "pointer",
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
        background: employee.isActive ? "#649FBF20" : "#F2F2F2",
      }}
    >
      <Flex align="start" justify="space-between">
        <Flex vertical style={{ padding: "20px", gap: "10px" }}>
          <Title style={{ margin: 0 }}>{employee.fullName}</Title>
          <Flex gap={"16px"}>
            <Button shape="round" size="small" type="primary">
              {employee.cpf}
            </Button>
            <Button shape="round" size="small" type="primary">
              {employee.isActive ? "Ativo" : "Inativo"}
            </Button>
            <Button shape="round" size="small" type="primary">
              {employee.position}
            </Button>
          </Flex>
        </Flex>
        <Flex
          justify="center"
          align="center"
          style={{
            height: "100%",
            width: "48px",
            position: "absolute",
            background: theme.colorPrimary,
            right: 0,
            top: 0,
          }}
        >
          <Dropdown
            placement="bottomRight"
            menu={{
              style: {
                background: theme.colorWhite,
              },
              items: [
                {
                  key: "1",
                  label: "Editar",
                  onClick: onSelect,
                },
                {
                  key: "2",
                  label: "Excluir",
                  onClick: () => {
                    setAlertDeleteUser(true);
                  },
                },
              ],
            }}
          >
            <IconDots color={theme.colorWhite} />
          </Dropdown>
        </Flex>
      </Flex>
      <PopupAlert
        open={alertDeleteUser}
        setOpen={setAlertDeleteUser}
        message="Usuário excluído com sucesso!"
      />
    </Flex>
  );
};

export default EmployeeItem;
