import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions/users';

import CardComponent from './CardComponent';

function UsersComponent() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(
      getUsers([
        {
          id: 1,
          name: 'bread',
          company: {
            name: '빵빵빵',
            catchPhrase: 'Multi-layered client-server neural-net',
          },
        },
      ])
    );
  }, []);

  return (
    <>
      {users.length > 0 &&
        users.map((user) => <CardComponent user={user} key={user.id} />)}
      {users.length === 0 && <p>No users available!</p>}
    </>
  );
}

export default UsersComponent;
