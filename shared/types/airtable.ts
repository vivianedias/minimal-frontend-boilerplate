export type Records = {
  id: string;
  createdTime: string;
  fields: Fields;
};

export type Fields = {
  name: string;
  notes: string;
  assignee: {
    email: string;
    name: string;
    id: string;
  };
  status: string;
};

export type Response = Array<
  {
    id: string;
    createdAt: string;
  } & Fields
>;
