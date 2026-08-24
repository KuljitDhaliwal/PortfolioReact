import { education, experience } from '../StaticData/Journey.js'
import { PiBooksThin } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";

function Journey() {
    return (
        <div className="relative">
            <h2 className='md:text-3xl text-2xl orbitron text-red-400'>My Journey</h2>
            <div className="relative grid gap-4">
                <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-700">
                </div>
                <div className="grid grid-cols-2">
                    <div></div>
                    <div className="rounded-l-3xl rounded-r-3xl bg-red-400 text-white w-fit ml-4 flex items-center gap-2">
                        <div className="rounded-full p-2 bg-red-600">
                            <PiBooksThin />
                        </div>
                        <p className='pr-4'>Qualification</p>
                    </div>
                </div>
                <div>
                    {education.map((item, key) => {
                        const Icon = item.icon
                        return <div className="grid grid-cols-2">
                            {key % 2 === 0 && (<div></div>)}
                            <div className={`card flex md:flex-row flex-col gap-4 py-4 ${key % 2 === 0 ? 'pl-4' : 'pr-4'}`}>
                                <div className={` text-red-400 shrink-0 ${key % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                    <Icon className={`${!key % 2 === 0 ? 'ml-auto' : ''}`} />
                                    <p className={`shrink-0 text-[12px] mt-2 ${key % 2 === 0 ? 'text-left' : 'text-right shrink-0'}`}>{item.year}</p>
                                </div>
                                <div className={`grid ${!key % 2 === 0 ? 'md:order-1 text-right' : 'md:order-2'}`}>
                                    <p className='font-semibold'>{item.title}</p>
                                    <p className='text-[12px]'>{item.institution}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className="grid grid-cols-2">
                    <div></div>
                    <div className="rounded-l-3xl rounded-r-3xl bg-red-400 text-white w-fit ml-4 flex items-center gap-2">
                        <div className="rounded-full p-2 bg-red-600">
                            <BsPersonWorkspace />
                        </div>
                        <p className='pr-4'>Experience</p>
                    </div>
                </div>
                                <div>
                    {experience.map((item, key) => {
                        const Icon = item.icon
                        return <div className="grid grid-cols-2">
                            {key % 2 === 0 && (<div></div>)}
                            <div className="card flex md:flex-row flex-col gap-4 py-4">
                                <div className={` text-red-400 shrink-0 ${key % 2 === 0 ? 'md:order-1 pl-4' : 'md:order-2 pr-4'}`}>
                                    <Icon className={`${key % 2 !== 0 ? 'ml-auto' : 'mr-0'}`} />
                                    <p className={`shrink-0 text-[12px] mt-2 ${key % 2 === 0 ? 'text-left' : 'text-right shrink-0'}`}>{item.period}</p>
                                </div>
                                <div className={`grid ${key % 2 !== 0 ? 'md:order-1 text-right pr-4' : 'md:order-2 text-left pl-4'}`}>
                                    <p className='font-semibold'>{item.title}</p>
                                    <p className='text-[12px]'>{item.company}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Journey