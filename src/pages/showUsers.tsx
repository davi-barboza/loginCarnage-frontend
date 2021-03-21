import Head from 'next/head'
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { Container } from '../styles/pages/ShowUsers'

interface Users {
  id: string;
  email: string;
}

export default function showUsers() {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    api.get('users').then(response => {
      setUsers(response.data);
    });
  }, []);

  return (
    <Container>
      <Head>
        <title>Carnage | Home</title>
      </Head>

      <main>
        <h1>Carnage</h1>

        {users.map(users => {
          return (

            <div className="users" key={users.id}>
              <label htmlFor="">User: Id</label><p>{ users.id }</p>
              <label htmlFor="">User: E-mail</label><p>{users.email}</p>
            </div>
          );
        })}       
      </main>

    </Container>
  )
}
