import { CheckCircle, Clock, Monitor, PlayCircleIcon, TrendingUp } from "lucide-react"
import image from "./assets/image.png"
const Hero = () => {
  return (
    <div className="h-screen w-screen flex mt-10 p-4 justify-around">
        <div className="flex flex-col ">
            <h1 className="text-blue-600 font-bold">INDUSTRIAL ANALYTIC PLATFORM</h1>
            <h1 className="text-7xl">Optimize Your <br></br> Production<br></br> <span className="text-blue-600 font-bold">In Real Time</span></h1>
            <p className="mt-3 font-medium">ProLine Analytics helps manufactures monitor operations,<br></br> reduce downtime and make data driven-decision</p>
            <div className="flex gap-3 mt-4">
                <button className="bg-blue-500 py-2 px-4 rounded text-white font-medium hover:scale-105 cursor-pointer transition-all">Request Demo</button>
                <button className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-all border-blue-500 border px-4 rounded hover:bg-blue-400 hover:text-white ">
                    <PlayCircleIcon></PlayCircleIcon>
                    Watch Overview
                </button>
            </div>
            <div className="flex gap-5 mt-6">
                <div className="flex items-center gap-2">
                <Clock></Clock>
                <h1>Real-time Monitoring</h1>
                </div>
                <div className="flex items-center gap-2">
               <Monitor></Monitor>
               Centralized Management
                </div>
                <div className="flex items-center gap-2">
                <TrendingUp></TrendingUp>
                Data-driven insights
                </div>
            </div>
            <div className="flex mt-4 flex-col gap-5">
                <h1 className="text-3xl font-medium">Built for modern manufacturing</h1>
                <p>ProLine Analytics is designed to adapt to your <br></br> operations and  scale with your business.</p>
                <div className="flex gap-2 items-center">
                    <CheckCircle className="text-blue-400" ></CheckCircle>
                    Reduce downtime
                </div>
                 <div className="flex gap-2 items-center">
                    <CheckCircle className="text-blue-400" ></CheckCircle>
                   Improve efficiency
                </div>
                 <div className="flex gap-2 items-center">
                    <CheckCircle className="text-blue-400" ></CheckCircle>
                    Increase productivity
                </div>
                 <div className="flex gap-2 items-center">
                    <CheckCircle className="text-blue-400" ></CheckCircle>
                    Make data-drived decisions
                </div>
            </div>
        </div>
        <div className="flex   ">
          
                <img src={image} className="w-200 h-200 rounded-2xl  " />
          
        </div>
    </div>
  )
}
export default Hero