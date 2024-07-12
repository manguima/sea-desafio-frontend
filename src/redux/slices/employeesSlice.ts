import { Employee } from "@/src/types/employee";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface EmployeesState {
  employees: Employee[];
  selectedEmployee: Employee | null;
  loading: boolean;
}

const initialState: EmployeesState = {
  employees: [],
  selectedEmployee: null,
  loading: false,
};

export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async (isActive?: boolean) => {
    const response = await axios.get("http://localhost:3001/employees", {
      params: isActive !== undefined ? { isActive } : {},
    });
    return response.data;
  }
);

export const updateEmployee = createAsyncThunk(
  "employees/updateEmployee",
  async (employee: Employee) => {
    const response = await axios.put(
      `http://localhost:3001/employees/${employee.id}`,
      employee
    );
    return response.data;
  }
);

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setSelectedEmployee(state, action: PayloadAction<Employee | null>) {
      state.selectedEmployee = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchEmployees.fulfilled,
      (state, action: PayloadAction<Employee[]>) => {
        state.loading = false;
        state.employees = action.payload;
      }
    );
    builder.addCase(fetchEmployees.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(
      updateEmployee.fulfilled,
      (state, action: PayloadAction<Employee>) => {
        const index = state.employees.findIndex(
          (emp) => emp.id === action.payload.id
        );
        if (index !== -1) {
          state.employees[index] = action.payload;
        }
      }
    );
  },
});

export const { setSelectedEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
