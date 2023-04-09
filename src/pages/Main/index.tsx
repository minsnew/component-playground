import { User } from '@/common/models/user'
import AppBar from '@/components/AppBar'
import ContentWrapper from '@/containers/ContentWrapper'
import { UserAPI } from '@/service/api/users'
import { useEffect, useState } from 'react'

const MainPage = () => {
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = async () => {
    try {
      const { data } = await UserAPI.getUsers()
      setUsers(data)
    } catch (error) {
      console.error('Failed to fetch users', error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      <AppBar />
      <ContentWrapper>
        <div className="p-4">
          {users.map((user) => (
            <div key={user.id}>{user.lastName}</div>
          ))}
        </div>
      </ContentWrapper>
    </>
  )
}

export default MainPage
