import classNames from 'classnames'
import SideBar from '../SideBar'

const AppBar = () => {
  return (
    <div
      className={classNames(
        'fixed top-0 left-0',
        'flex w-full p-4',
        'bg-white',
        'border-b border-gray-400'
      )}
    >
      <SideBar />
      <h1 className="text-[20px] font-bold">Component Playgound</h1>
    </div>
  )
}

export default AppBar
