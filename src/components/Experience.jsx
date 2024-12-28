import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'

const CircularProgress = ({ score }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 10) * circumference;

  return (
    <div className="relative w-15 h-24">
      <svg className="absolute top-0 left-0" width="100%" height="100%" viewBox="0 0 100 100">
        <circle
          className="text-red-500"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
        <motion.circle
          className="text-purple-500"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference - progress,
          }}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - progress }}
          transition={{ duration: 1 }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-1xl font-bold">
        {score}/10
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
      whileInView={{ opacity:1, y: 0}}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className='my-20 text-center text-4xl'>Academics</motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div 
            whileInView={{ opacity:1, x: 0}}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='w-full lg:w-1/4 text-center'>
                <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                <CircularProgress score={experience.score} />
            </motion.div>
            <motion.div 
            whileInView={{ opacity:1, x: 0}}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semibold'>
                    {experience.sem}  {" "}
                    <span className='text-sm text-purple-100'>
                        {experience.company}
                    </span>
                </h6>
                <p className='mb-4 text-neutral-400'>{experience.description}</p>
                {experience.technologies.map((tech, index) => (
                    <span
                        key={index}
                        className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                            {tech}
                    </span>
                ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
