import { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import type { FilterValue, SorterResult } from "antd/es/table/interface";

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue>;
}

export const useTableParams = (props: any) => {
  const { setData } = props;
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [tableParams, setTableParams] = useState<any>({
    pagination: {
      current: 1,
      pageSize: 20,
      pageSizeOptions: [20, 50, 100],
      showSizeChanger: true,
    },
  });

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const clearOrderFilters = () => {
    setTableParams((state: any) => {
      return { pagination: { ...state.pagination }, filters: {}, order: {} };
    });
  };

  const setCustomFilter = (filterName: any, filterValue: any) => {
    setTableParams((state: any) => {
      return {
        ...state,
        filters: {
          ...state.filters,
          [filterName]: filterValue,
        },
      };
    });
  };

  const clearCustomFilter = (filterName: any) => {
    setTableParams((state: any) => {
      return {
        ...state,
        filters: {
          ...state.filters,
          [filterName]: null,
        },
      };
    });
  };

  const clearOrder = () => {
    setTableParams((state: any) => {
      return {
        pagination: state.pagination,
        filters: state.filters,
      };
    });
  };

  const clearFilter = () => {
    setTableParams((state: any) => {
      return {
        ...state,
        filters: {},
      };
    });
  };

  const setSearchParam = (value: any) => {
    setTableParams({ ...tableParams, search: value });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    getCheckboxProps: (record: any) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
      columnWidth: "50px",
    }),
    // columnWidth: "50px",
    // type: "checkbox",
  };

  const hasFiltersOrOrder = useMemo(() => {
    let hasFilter = false;
    let hasOrder = false;
    for (let prop in tableParams.filters) {
      if (tableParams.filters[prop]) {
        hasFilter = true;
      }
    }
    for (let prop in tableParams) {
      if (tableParams[prop]?.field) {
        hasOrder = true;
      }
      if (prop === "order" && tableParams[prop]) {
        hasOrder = true;
      }
    }
    return hasFilter || hasOrder;
  }, [tableParams, setTableParams]);

  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    // if (pagination.pageSize !== tableParams.pagination?.pageSize) {
    //   setData([]);
    // }
  };

  const onSuccess = () => {
    setTableParams({
      ...tableParams,
      pagination: {
        ...tableParams.pagination,
        total: 200,
        // 200 is mock data, you should read it from server
        // total: data.totalCount,
      },
    });
  };

  return {
    tableParams,
    setTableParams,
    handleTableChange,
    onSuccess,
    rowSelection,
    clearOrderFilters,
    setSearchParam,
    hasFiltersOrOrder,
    clearOrder,
    clearFilter,
    setCustomFilter,
    clearCustomFilter,
  };
};
