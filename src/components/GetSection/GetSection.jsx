import { useEffect, useState } from 'react';
import { BtnShow, Section, Title } from './GetSection.styled';
import { fetchUsers } from 'api';
import { Loader } from 'components/Loader';
import toast from 'react-hot-toast';

export const GetSection = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function getUsers() {
      try {
        setLoading(true);
        setError(false);
        const { users: fetchedUsers, total_pages: totalPages } =
          await fetchUsers({
            count: 6,
            offset: (currentPage - 1) * 6,
            page: currentPage,
          });
        if (fetchedUsers.length === 0) {
          toast.error('No more users to load.');
        } else {
          setUsers([...users, ...fetchedUsers]);
        }
        setTotalPages(totalPages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getUsers();
  }, [currentPage]);

  const handleShowMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Section id="get">
      <Title>Working with GET request</Title>
      {loading && <Loader />}
      {error && !loading && toast.error('Oops! Something went wrong!')}
      <>
        <ul>
          {users.map(({ id, name, email, phone, photo, position }) => (
            <li key={id}>
              <img src={photo} alt={name} loading="lazy" />
              <p>{name}</p>
              <p>{position}</p>
              <p>{email}</p>
              <p>{phone}</p>
            </li>
          ))}
        </ul>
        {currentPage < totalPages && (
          <BtnShow type="button" onClick={handleShowMore}>
            Show more
          </BtnShow>
        )}
      </>
    </Section>
  );
};
