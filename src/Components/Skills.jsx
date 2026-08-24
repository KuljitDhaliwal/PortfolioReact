import { skills } from '../StaticData/Skills.js'


function Skills() {
    return (
        <div className="relative">
            <h2 className='md:text-3xl text-2xl orbitron text-red-400'>My Skills</h2>
            <div className="relative grid gap-4">
                <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-700">
                </div>
                <div className='grid gap-4'>
                    {skills.map((skill, key) => {
                        const HeadIcon = skill.icon
                        return <div key={skill.id} className='grid grid-cols-2'>
                            {key % 2 === 0 && <div></div>}
                            <div className='grid gap-6 p-4'>
                                <div className={`${key % 2 === 0 ? '' : 'ml-auto'} rounded-l-3xl rounded-r-3xl bg-red-400 text-white w-fit flex items-center gap-2`}>
                                    <div className="rounded-full p-2 bg-red-600">
                                        <HeadIcon />
                                    </div>
                                    <p className='pr-4'>{skill.title}</p>
                                </div>
                                <div className={`grid md:grid-cols-3 gap-6 ${key % 2 === 0 ? '' : 'ml-auto'} `}>
                                    {skill.items?.map((item, index) => {
                                        const Icon = item.icon ?? item.icon
                                        return <div key={item.id} className={`card flex gap-4 justify-center ${key % 2 !== 0 && index === 3 ? 'md:col-start-3' : '' }`}>
                                            <div className={``}>
                                                {item.icon ? (
                                                    <Icon className={`text-4xl m-auto`} style={{ color: item.color }} />

                                                ) : (
                                                    <img src={item.img} alt="images" className='h-8 m-auto' />
                                                )}
                                                <p className={`mt-2 text-center`}>{item.value}</p>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills