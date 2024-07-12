"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Flex, List, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEmployees,
  setSelectedEmployee,
} from "@/src/redux/slices/employeesSlice";
import { AppDispatch, RootState } from "@/src/redux/store";
import EmployeeItem from "./EmployeeItem";

type EmployeeListProps = {
  showActive: boolean;
  setShowActive: Dispatch<SetStateAction<boolean>>;
};

const EmployeeList = ({ showActive, setShowActive }: EmployeeListProps) => {
  const dispatch = useDispatch<AppDispatch>(); // Tipar o dispatch
  const { employees, loading } = useSelector(
    (state: RootState) => state.employees
  );

  useEffect(() => {
    dispatch(fetchEmployees(showActive ? true : undefined));
  }, [dispatch, showActive]);

  return (
    <Flex gap={"20px"} vertical style={{ width: "100%" }}>
      {loading ? (
        <Spin />
      ) : (
        employees.map((employee) => (
          <EmployeeItem
            employee={employee}
            onSelect={() => dispatch(setSelectedEmployee(employee))}
          />
        ))
      )}
    </Flex>
  );
};

export default EmployeeList;
