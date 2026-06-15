import logo from "./assets/logo.png"

const Header = () => {
  return (
    <div className="w-full p-5   flex justify-between border border-b-blue-100 items-center">
        <div className="flex items-center gap-2 ">
        <img src={logo} alt="logo" className="w-7 h-7 object-contain" />
        <h1 className="font-bold text-3xl">ProLine Analytics</h1>
        </div>
        <div className="flex gap-20 cursor-pointer mt-2">
            <h2 className="font-medium hover:-translate-y-2 transition-all hover:text-blue-400">Feature</h2>
            <h2 className="font-medium hover:-translate-y-2 transition-all hover:text-blue-400">Solutions</h2>
            <h2 className="font-medium hover:-translate-y-2 transition-all hover:text-blue-400">Contact</h2>
        </div>
        <button className="bg-blue-500 py-2 px-4 rounded text-white font-medium hover:scale-105 cursor-pointer transition-all">Request Demo</button>
    </div>
  )
}
export default Header