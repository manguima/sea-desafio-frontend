"use client";
import CompanyList from "@/src/components/Company/CompanyList";
import CompanyStepOne from "@/src/components/Company/CompanySteps/CompanyStepOne";
import CompanyStepShortly from "@/src/components/Company/CompanySteps/CompanyStepShortly";
import { Flex, Layout } from "antd";
import useToken from "antd/es/theme/useToken";
import Title from "antd/es/typography/Title";
import { useState } from "react";

const { Content } = Layout;

export default function EmployeesPage() {
  const [token, theme] = useToken();

  // EMPRESA SELECIONADA
  const [stepCompany, setStepCompany] = useState<number>(0);
  const handleChangeStepCompany = (current: number) => {
    setStepCompany(current);
  };

  return (
    <Content>
      <Flex vertical gap={"32px"}>
        <CompanyList
          current={stepCompany}
          handleChange={handleChangeStepCompany}
        />
        {
          {
            0: (
              <CompanyStepOne
                handleChangeStepCompany={handleChangeStepCompany}
                stepCompany={stepCompany}
              />
            ),
            1: (
              <CompanyStepShortly
                handleChangeStepCompany={handleChangeStepCompany}
                stepCompany={stepCompany}
              />
            ),
            2: (
              <CompanyStepShortly
                handleChangeStepCompany={handleChangeStepCompany}
                stepCompany={stepCompany}
              />
            ),
            3: (
              <CompanyStepShortly
                handleChangeStepCompany={handleChangeStepCompany}
                stepCompany={stepCompany}
              />
            ),
            4: (
              <CompanyStepShortly
                handleChangeStepCompany={handleChangeStepCompany}
                stepCompany={stepCompany}
              />
            ),
            5: (
              <CompanyStepShortly
                handleChangeStepCompany={handleChangeStepCompany}
                stepCompany={stepCompany}
              />
            ),
            6: (
              <CompanyStepShortly
                handleChangeStepCompany={handleChangeStepCompany}
                stepCompany={stepCompany}
              />
            ),
            7: (
              <CompanyStepShortly
                handleChangeStepCompany={handleChangeStepCompany}
                stepCompany={stepCompany}
              />
            ),
            8: (
              <CompanyStepShortly
                handleChangeStepCompany={handleChangeStepCompany}
                stepCompany={stepCompany}
              />
            ),
            9: (
              <CompanyStepShortly
                handleChangeStepCompany={handleChangeStepCompany}
                stepCompany={stepCompany}
              />
            ),
          }[stepCompany]
        }
      </Flex>
    </Content>
  );
}
