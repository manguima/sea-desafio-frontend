import { IconPlus } from "@tabler/icons-react";
import { Button, Card, Flex, Image, Input, Switch, Typography } from "antd";
import useToken from "antd/es/theme/useToken";
import EmployeeList from "../../Employee/EmployeeList";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { StepProps } from "../Company.types";
import PopupAlert from "../../Common/PopupAlert";
import { setSelectedEmployee } from "@/src/redux/slices/employeesSlice";
import EmployeeForm from "../../Employee/EmployeeForm";

const { Text, Title } = Typography;

const CompanyStepOne = ({
  handleChangeStepCompany,
  stepCompany,
}: StepProps) => {
  const [token, theme] = useToken();
  const dispatch = useDispatch();

  // FUNCIONARIOS
  const [showActive, setShowActive] = useState(false);
  const { employees, selectedEmployee } = useSelector(
    (state: RootState) => state.employees
  );

  // ETAPA CONCLUIDA
  const [stepFinished, setStepFinished] = useState(false);

  const handleEdit = (id: number) => {
    const employee = employees.find((emp) => emp.id === id);
    if (employee) {
      dispatch(setSelectedEmployee(employee)); // Seleciona o funcionário para edição
    }
  };

  const handleBack = () => {
    dispatch(setSelectedEmployee(null)); // Reseta o funcionário selecionado
  };

  return (
    <Flex vertical style={{ width: "100%" }} gap={"30px"}>
      <Flex justify="start" align="start" gap={"32px"}>
        <Card
          style={{
            width: "35%",
            padding: "24px",
            background: theme.colorWhite,
            border: "unset",
            borderRadius: "20px",
            boxShadow: "0 0 20px 1px #00000010",
          }}
        >
          <Flex
            vertical
            style={{
              gap: "32px",
            }}
          >
            <Text style={{ fontSize: theme.fontSize }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              suscipit suscipit porttitor. Suspendisse ex lorem, rhoncus nec
              ante eu, venenatis aliquam turpis. Nulla facilisi. Curabitur nec
              mattis dolor. Nulla finibus bibendum ligula tempus vehicula. Ut at
              tristique libero, nec efficitur dui. Aliquam erat volutpat. Fusce
              quam sem, tempus nec justo eget, luctus scelerisque velit. Nam
              sollicitudin purus urna, vitae ornare neque tincidunt vel. Proin
              ac lacinia erat, et commodo felis. Phasellus tempor tellus eu
              vulputate tempus.
            </Text>
            <Image width={142} src="/profile/UserVector.png"></Image>
          </Flex>
        </Card>
        <Flex vertical style={{ width: "65%" }}>
          {selectedEmployee ? (
            <Flex gap={"20px"} style={{ width: "100%" }} vertical>
              <Button onClick={handleBack} style={{ marginBottom: 16 }}>
                Voltar para a lista de usuários
              </Button>
              <EmployeeForm employee={selectedEmployee} />
            </Flex>
          ) : (
            <Flex
              style={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 0 20px 1px #00000010",
                background: theme.colorWhite,
                border: "unset",
                padding: 0,
                margin: 0,
                overflow: "hidden",
                gap: "16px",
              }}
              vertical
            >
              <div style={{ background: theme.colorPrimary, padding: "10px" }}>
                <Title style={{ margin: 0, color: theme.colorWhite }}>
                  Funcionários
                </Title>
              </div>
              <Flex
                align="start"
                justify="start"
                style={{ padding: "24px" }}
                vertical
                gap={"16px"}
              >
                <Button
                  style={{
                    height: "66px",
                    width: "100%",
                    fontSize: theme.fontSize,
                    borderRadius: "10px",
                    borderColor: theme.colorPrimary,
                    color: theme.colorPrimary,
                  }}
                  icon={<IconPlus />}
                >
                  Adicionar Funcionário
                </Button>

                <Flex
                  style={{ width: "100%" }}
                  justify="space-between"
                  align="center"
                >
                  <Flex gap={"24px"}>
                    <Button
                      style={{
                        fontSize: theme.fontSizeSM,
                        borderRadius: "10px",
                        width: "192px",
                        borderColor: !showActive ? theme.colorPrimary : "#000",
                        color: !showActive ? theme.colorPrimary : "#000",
                      }}
                      onClick={() => setShowActive(true)}
                    >
                      Ver apenas ativos
                    </Button>

                    <Button
                      onClick={() => setShowActive(false)}
                      style={{
                        fontSize: theme.fontSizeSM,
                        borderRadius: "10px",
                        width: "192px",
                        borderColor: showActive ? theme.colorPrimary : "#000",
                        color: showActive ? theme.colorPrimary : "#000",
                      }}
                    >
                      Limpar Filtro
                    </Button>
                  </Flex>

                  <Text style={{ fontSize: theme.fontSizeSM }}>
                    Ativos{" "}
                    {
                      employees.filter((values) => values.isActive === true)
                        .length
                    }
                    /{employees.length}
                  </Text>
                </Flex>
                <EmployeeList
                  setShowActive={setShowActive}
                  showActive={showActive}
                />
                <Flex style={{ width: "100%" }} justify="end">
                  <Flex gap={"10px"}>
                    <Text style={{ fontSize: theme.fontSizeSM }}>
                      A etapa está conclída ?
                    </Text>

                    <Switch
                      checked={stepFinished}
                      checkedChildren="Sim"
                      unCheckedChildren="Não"
                      onChange={() => {
                        setStepFinished(!stepFinished);
                      }}
                    />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
      <Flex
        justify="end"
        style={{ width: "100%" }}
        onClick={() => handleChangeStepCompany(stepCompany + 1)}
      >
        <Button size="large" type="primary">
          Próximo passo
        </Button>
      </Flex>
    </Flex>
  );
};

export default CompanyStepOne;
