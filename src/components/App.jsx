import { data } from 'data/users';
import { User } from './User/User';
import { UsersList } from './UsersList/UsersList';

export const App = () => {
  return (
    <>
      <UsersList users={data} />
      <User user={data[0]} />
    </>
  );
};
