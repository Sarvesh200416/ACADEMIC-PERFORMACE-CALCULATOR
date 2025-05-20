"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { calculateAttendance } from "@/lib/calculations"
import { motion } from "framer-motion"

export default function AttendanceCalculator() {
  const [attended, setAttended] = useState<string>("0")
  const [total, setTotal] = useState<string>("0")
  const [result, setResult] = useState<{
    currentPercentage: number
    isMinimumMet: boolean
    classesNeeded: number
  } | null>(null)

  const handleCalculate = () => {
    const attendedNum = Number.parseInt(attended, 10) || 0
    const totalNum = Number.parseInt(total, 10) || 0
    const calculationResult = calculateAttendance(attendedNum, totalNum)
    setResult(calculationResult)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground mb-2">Enter your attendance details:</p>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-lg bg-card/50 hover:bg-card/80 transition-colors duration-200">
            <Label htmlFor="attended" className="text-sm mb-2 block">
              Classes Attended
            </Label>
            <Input
              id="attended"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={attended}
              onChange={(e) => {
                // Remove leading zeros
                const value = e.target.value.replace(/^0+/, "") || "0"
                setAttended(value)
              }}
              className="bg-background/50 focus:bg-background transition-colors duration-200"
            />
          </div>
          <div className="p-3 rounded-lg bg-card/50 hover:bg-card/80 transition-colors duration-200">
            <Label htmlFor="total" className="text-sm mb-2 block">
              Total Classes
            </Label>
            <Input
              id="total"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={total}
              onChange={(e) => {
                // Remove leading zeros
                const value = e.target.value.replace(/^0+/, "") || "0"
                setTotal(value)
              }}
              className="bg-background/50 focus:bg-background transition-colors duration-200"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleCalculate} className="bg-accent-gradient hover:opacity-90 transition-opacity">
          Calculate Attendance
        </Button>
      </div>

      {result && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 rounded-lg overflow-hidden"
        >
          <div className="p-6 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 backdrop-blur-sm border border-white/10 dark:border-gray-800/50 text-center">
            <p className="text-muted-foreground mb-2">Current Attendance</p>
            <p className="text-5xl font-bold gradient-text">
              {result.currentPercentage.toFixed(2).replace(/\.00$/, "")}%
            </p>
            <p
              className={`mt-3 inline-block px-3 py-1 rounded-full ${
                result.isMinimumMet
                  ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
                  : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
              }`}
            >
              {result.isMinimumMet
                ? "✅ Minimum attendance requirement met"
                : "❌ Below minimum attendance requirement"}
            </p>
          </div>

          {!result.isMinimumMet && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-4 bg-card border-t border-border"
            >
              <p className="text-center text-muted-foreground mb-2">To reach 75% attendance:</p>
              <p className="text-center font-medium">
                You need to attend{" "}
                <span className="font-bold text-accent inline-block px-2 py-1 bg-accent/10 rounded-md">
                  {result.classesNeeded}
                </span>{" "}
                more classes
              </p>
              <p className="text-xs text-center mt-2 text-muted-foreground">
                (Assuming no additional classes are scheduled)
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  )
}
