import { User } from '@/common/models/user'
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
    <div>
      <div className="text-3xl font-bold">Main Page</div>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.lastName}</div>
        ))}
      </div>
    </div>
  )
}

export default MainPage
