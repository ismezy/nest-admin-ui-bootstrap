export interface FileInfo {
  path?: string;
  name?: string;
  icon?: string;
  isFolder: boolean,
  children?: FileInfos | undefined,
  createTime?: Date;
  updateTime?: Date;
}

export type FileInfos = FileInfo[];
