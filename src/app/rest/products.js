import { create } from 'fans-rest';


const rest = create();

export const add = (id, userId) =>
  rest.patch(`/api/v1/user/${userId}`, {
    action: 'list.add',
    id,
  });

export const remove = (id, userId) =>
  rest.patch(`/api/v1/user/${userId}`, {
    action: 'list.remove',
    id,
  });
