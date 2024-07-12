import { Button, Flex } from "antd";
import Title from "antd/es/typography/Title";
import Shortly from "../../Common/Shortly";
import { StepProps } from "../Company.types";

const CompanyStepShortly = ({
  handleChangeStepCompany,
  stepCompany,
}: StepProps) => {
  return (
    <Flex vertical style={{ minHeight: "75vh" }} justify="space-between">
      <Shortly />

      <Flex justify="space-between" style={{ width: "100%" }}>
        <Button
          size="large"
          type="primary"
          onClick={() => handleChangeStepCompany(stepCompany - 1)}
        >
          Passo anterior
        </Button>
        {stepCompany < 8 && (
          <Button
            size="large"
            type="primary"
            onClick={() => handleChangeStepCompany(stepCompany + 1)}
          >
            Próximo passo
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default CompanyStepShortly;
