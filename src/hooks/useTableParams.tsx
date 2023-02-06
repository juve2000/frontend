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
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    console.log("sorter", sorter);
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
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
  };
};
