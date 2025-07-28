// components/Popup.js
import { useEffect, useState } from "react"
import { FaGithub, } from "react-icons/fa"


function Popup() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 4000) // 3 seconds after load

    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-gray-100 rounded-xl p-6 w-[90%] max-w-md shadow-2xl relative animate-fadeIn">
        <button
          className="absolute top-3 right-3 text-xl text-gray-500 hover:text-gray-900 dark:hover:text-white"
          onClick={() => setShow(false)}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-2">Just a heads up 👋</h2>
        <p className="text-sm leading-relaxed">
          This is a <strong>portfolio project</strong> built to showcase my
          skills. It’s not a real product or company.
        </p>
        <p >You can visit my Gitub here: <a href="https://github.com/ahmadmujtaba2121/" ><FaGithub className="flex flex-row-reverse w-10" /></a></p>
      </div>
    </div>
  )
}

export default Popup
