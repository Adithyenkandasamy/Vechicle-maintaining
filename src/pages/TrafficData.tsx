import React from 'react';
import { ArrowLeft, Car, Clock, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function TrafficData() {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="min-h-screen bg-orange-500"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="p-4">
        <button
          onClick={() => navigate('/dashboard')}
          className="text-white flex items-center"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          Back
        </button>
      </div>

      <motion.div
        className="max-w-md mx-auto px-4 py-8"
        variants={containerVariants}
      >
        <motion.h1
          className="text-2xl font-bold text-white mb-8"
          variants={itemVariants}
        >
          Traffic Data
        </motion.h1>

        <motion.div
          className="bg-white rounded-lg p-6 mb-6"
          variants={itemVariants}
        >
          <h2 className="text-xl font-bold mb-4">Current Traffic Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Traffic Density</span>
              <span className="font-bold text-green-500">Low</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Average Speed</span>
              <span className="font-bold">45 mph</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-4 mb-6"
          variants={containerVariants}
        >
          <motion.div
            className="bg-white rounded-lg p-4 text-center"
            variants={itemVariants}
          >
            <Car className="w-6 h-6 mx-auto mb-2 text-blue-500" />
            <div className="text-sm text-gray-600">Vehicles</div>
            <div className="font-bold">127</div>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg p-4 text-center"
            variants={itemVariants}
          >
            <Clock className="w-6 h-6 mx-auto mb-2 text-green-500" />
            <div className="text-sm text-gray-600">Avg. Wait</div>
            <div className="font-bold">2m</div>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg p-4 text-center"
            variants={itemVariants}
          >
            <AlertTriangle className="w-6 h-6 mx-auto mb-2 text-red-500" />
            <div className="text-sm text-gray-600">Incidents</div>
            <div className="font-bold">0</div>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg p-6"
          variants={itemVariants}
        >
          <h2 className="text-xl font-bold mb-4">Route Suggestions</h2>
          <div className="space-y-4">
            <motion.div
              className="p-4 bg-green-50 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="font-bold text-green-700">Recommended Route</div>
              <div className="text-sm text-gray-600">Via Highway 101</div>
              <div className="text-sm text-green-600">15 mins faster</div>
            </motion.div>
            <motion.div
              className="p-4 bg-gray-50 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="font-bold text-gray-700">Alternative Route</div>
              <div className="text-sm text-gray-600">Via Main Street</div>
              <div className="text-sm text-gray-600">+10 mins</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
