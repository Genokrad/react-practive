import PropTypes from 'prop-types';

export const User = ({ user: { name, email } }) => {
  // console.log(user);

  return (
    <>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
