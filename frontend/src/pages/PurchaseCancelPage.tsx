import { ArrowLeftCircleIcon, LucideXCircle } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
const PurchaseCancelPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-[rgba(44,44,84,1)] via-[rgba(44,44,84,0.9)] to-[rgba(44,44,84,0.8)]'>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className='max-w-md w-full bg-[rgba(47,47,111,0.95)] rounded-xl shadow-2xl overflow-hidden relative z-10'
  >
    <div className='p-6 sm:p-8'>
      {/* Cancelled Icon */}
      <div className='flex justify-center'>
        <LucideXCircle className='text-[rgba(255,69,58,0.9)] w-16 h-16 mb-4' />
      </div>

      {/* Heading */}
      <h1 className='text-2xl sm:text-3xl font-bold text-center text-[rgba(255,69,58,0.9)] mb-2'>
        Purchase Cancelled
      </h1>

      {/* Message */}
      <p className='text-[rgba(255,215,0,0.7)] text-center mb-6'>
        Your order has been cancelled. No charges have been made.
      </p>

      {/* Support Message */}
      <div className='bg-[rgba(44,44,84,0.8)] rounded-lg p-4 mb-6'>
        <p className='text-sm text-[rgba(255,215,0,0.7)] text-center'>
          If you encountered any issues during the checkout process, please contact our support team.
        </p>
      </div>

      {/* Return to Shop Button */}
      <div className='space-y-4'>
        <Link
          to={"/"}
          className='w-full bg-[rgba(44,44,84,0.8)] hover:bg-[rgba(44,44,84,0.7)] text-[rgba(255,215,0,0.9)] font-bold py-2 px-4 
          rounded-lg transition duration-300 flex items-center justify-center shadow-md focus:outline-none focus:ring-4 focus:ring-[rgba(255,215,0,0.8)]'
        >
          <ArrowLeftCircleIcon className='mr-2' size={18} />
          Return to Shop
        </Link>
      </div>
    </div>
  </motion.div>
</div>

  )
}

export default PurchaseCancelPage