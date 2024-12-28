import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { MdLocalPhone } from 'react-icons/md'
import { SiGmail } from 'react-icons/si'
import { PiDiamondsFourThin } from 'react-icons/pi'
const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl'>
            Contact Me
        </motion.h1>
        <div className='text-center tracking-tighter'>
            <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='my-4 flex items-center justify-center gap-2'>
                <PiDiamondsFourThin className='text-2xl text-orange-500'/>
                {CONTACT.address}
            </motion.p>
            <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='my-4 flex items-center justify-center gap-2'>
                <FaWhatsapp className='text-2xl text-green-500'/>
                <MdLocalPhone className='text-2xl'/>
                {CONTACT.phoneNo}
            </motion.p>
            <a 
            href="mailto:chaitanyadeepchellu5510@gmail.com" 
            className='flex items-center justify-center gap-2'>
                <SiGmail className='text-2xl text-[#D93025] bg-white w-8'/>
                <u>{CONTACT.email}</u>
            </a>
        </div>
    </div>
  )
}

export default Contact
