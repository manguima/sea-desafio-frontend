"use client";

import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Upload,
  List,
  Space,
  Divider,
  Select,
  Checkbox,
} from "antd";
import { useDispatch } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";
import { Employee, EPI } from "@/src/types/employee";
import { updateEmployee } from "@/src/redux/slices/employeesSlice";
import { AppDispatch } from "@/src/redux/store";
import { Option } from "antd/es/mentions";

const EmployeeForm = ({ employee }: { employee: Employee }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [form] = Form.useForm();
  const [epis, setEpis] = useState<EPI[]>(employee.epis.list || []);
  const [certificates, setCertificates] = useState(
    employee.medicalCertificates || []
  );

  const onFinish = (values: Partial<Employee>) => {
    const updatedEmployee: Employee = {
      ...employee,
      ...values,
      epis: { list: epis },
      medicalCertificates: certificates,
    };
    dispatch(updateEmployee(updatedEmployee));
  };

  const handleAddEpi = () => {
    setEpis([...epis, { activity: "", epi: "", caNumber: "" }]);
  };

  const handleRemoveEpi = (index: number) => {
    const newEpis = epis.filter((_, i) => i !== index);
    setEpis(newEpis);
  };

  const handleEpiChange = (index: number, field: keyof EPI, value: string) => {
    const newEpis = [...epis];
    newEpis[index][field] = value;
    setEpis(newEpis);
  };

  const handleUploadChange = (info: any) => {
    if (info.file.status === "done") {
      setCertificates([
        ...certificates,
        { name: info.file.name, file: info.file.response.url },
      ]);
    }
  };

  return (
    <Form
      form={form}
      initialValues={employee}
      onFinish={onFinish}
      layout="vertical"
      style={{ gap: "20px" }}
    >
      {/* Dados Pessoais */}
      <Form.Item label="Nome" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="CPF" name="cpf" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Cargo" name="position" rules={[{ required: true }]}>
        <Select>
          {positionOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Status" name="isActive" valuePropName="checked">
        <Checkbox />
      </Form.Item>

      {/* EPIs */}
      <Divider orientation="left">EPIs</Divider>
      <List
        bordered
        dataSource={epis}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <Space>
              <Select
                placeholder="Atividade"
                value={item.activity}
                onChange={(value) => handleEpiChange(index, "activity", value)}
                style={{ width: 120 }}
              >
                {activityOptions.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
              <Select
                placeholder="EPI"
                value={item.epi}
                onChange={(value) => handleEpiChange(index, "epi", value)}
                style={{ width: 120 }}
              >
                {epiOptions.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
              <Input
                placeholder="Número CA"
                value={item.caNumber}
                onChange={(e) =>
                  handleEpiChange(index, "caNumber", e.target.value)
                }
              />
              <Button onClick={() => handleRemoveEpi(index)} danger>
                Remover
              </Button>
            </Space>
          </List.Item>
        )}
      />
      <Button
        type="dashed"
        onClick={handleAddEpi}
        style={{ width: "100%", marginBottom: 16 }}
      >
        Adicionar EPI
      </Button>

      {/* Atestados */}
      <Divider orientation="left">Atestados</Divider>
      <Upload
        action="http://localhost:3001/upload" // Endpoint para upload
        onChange={handleUploadChange}
        showUploadList={false}
      >
        <Button icon={<UploadOutlined />}>Adicionar Atestado</Button>
      </Upload>
      <List
        bordered
        dataSource={certificates}
        renderItem={(cert, index) => (
          <List.Item key={index}>
            <a href={cert.file} target="_blank" rel="noopener noreferrer">
              {cert.name}
            </a>
          </List.Item>
        )}
      />

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Salvar
        </Button>
      </Form.Item>
    </Form>
  );
};

const positionOptions = [
  { label: "Gerente", value: "Gerente" },
  { label: "Supervisor", value: "Supervisor" },
  { label: "Analista", value: "Analista" },
  { label: "Operador", value: "Operador" },
  { label: "Estagiário", value: "Estagiário" },
];

const activityOptions = [
  { label: "Soldagem", value: "Soldagem" },
  { label: "Pintura", value: "Pintura" },
  { label: "Montagem", value: "Montagem" },
  { label: "Manutenção", value: "Manutenção" },
  { label: "Inspeção", value: "Inspeção" },
];

const epiOptions = [
  { label: "Capacete", value: "Capacete" },
  { label: "Luva", value: "Luva" },
  { label: "Óculos de Proteção", value: "Óculos de Proteção" },
  { label: "Máscara", value: "Máscara" },
  { label: "Protetor Auricular", value: "Protetor Auricular" },
];

export default EmployeeForm;
