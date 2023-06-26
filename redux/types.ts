export interface SectionType {
  id: string;
  title: string;
  taskIds: string[];
}

export interface SectionDataType {
  allIds: string[];
  byId: {
    [id: string]: SectionType;
  };
}

export interface TaskType {
  id: string;
  parentTaskId?: string | null;
  title: string;
  completed: boolean;
  likesCount: number;
  liked?: boolean;
  cover?: string;
  startDate?: Date;
  endDate?: Date;
  assigneeIds?: string[];
  subTaskIds?: string[];
  commentIds?: string[];
}

export interface TaskDataType {
  [id: string]: TaskType;
}

export interface UserType {
  id: string;
  avatar: string;
  name: string;
}

export interface CommentType {
  id: string;
  author: string;
  body: string;
  date: Date;
}
