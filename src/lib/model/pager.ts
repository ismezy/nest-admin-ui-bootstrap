/**
 * 分页请求
 */
import type { Domain } from '$lib/model/domain';

export interface Pager extends Domain {
  pageIndex: number;
  pageSize: number;
}

/**
 * 排序条件
 */
export interface Order extends Domain {
  property: string;
  ascending: boolean;
}

export declare type Orders = Order[];

/**
 * 分页数据
 */
export interface PagerRecords<T extends Domain> extends Domain {
  records: T[] | undefined;
  totalCount: number;
  pager: Pager | undefined;
  valueCounts: ValueCounts;
}

/**
 * 全文搜索计数
 */
export interface ValueCount extends Domain {
  value: string;
  count: number;
}

export declare type ValueCounts = { [key: string]: ValueCount };
