import classNames from 'classnames'
import { useState } from 'react'
import { MdReorder } from 'react-icons/md'

const SideBar = () => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <>
      <button className="mr-2" onClick={handleClick}>
        <MdReorder className="w-6 h-6" />
      </button>
      {show && (
        <>
          <div
            className={classNames(
              'fixed top-0 left-0',
              'w-full h-full',
              'transition ease-in-out',
              'bg-gray-400 opacity-60'
            )}
            onClick={handleClick}
          />
          <div
            className={classNames(
              'fixed top-0 left-0',
              'w-[240px] h-full',
              'p-4',
              'bg-teal-600 text-white'
            )}
          >
            <div className="text-lg font-bold mb-2">Components</div>
            <div className="text-lg font-bold mb-2">Templates</div>
          </div>
        </>
      )}
    </>
  )
}

export default SideBar
