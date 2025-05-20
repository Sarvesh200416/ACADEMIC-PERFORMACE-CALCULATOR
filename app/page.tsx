"use client"

import { useState } from "react"
import GpaCalculator from "@/components/gpa-calculator"
import CgpaCalculator from "@/components/cgpa-calculator"
import AttendanceCalculator from "@/components/attendance-calculator"
import { ThemeToggle } from "@/components/theme-toggle"
import { Calculator, GraduationCap, BarChart3, ArrowLeft, Sparkles, ChevronRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

type CalculatorType = "none" | "gpa" | "cgpa" | "attendance"

export default function Home() {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>("none")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {activeCalculator === "none" ? (
        /* Modern Front Page */
        <div className="flex flex-col min-h-screen">
          {/* Hero Section with Diagonal Split */}
          <section className="relative w-full min-h-screen overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-hero-gradient-light dark:bg-hero-gradient-dark opacity-30"></div>
              <div className="absolute top-0 left-0 w-1/2 h-screen bg-primary/5 dark:bg-primary/10 transform -skew-x-12"></div>
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

              {/* Decorative Circles */}
              <motion.div
                className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-primary/30 dark:bg-primary/40"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-1/3 left-1/3 w-12 h-12 rounded-full bg-secondary/30 dark:bg-secondary/40"
                animate={{
                  y: [0, 20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-2/3 right-1/3 w-6 h-6 rounded-full bg-accent/30 dark:bg-accent/40"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 md:py-0">
              <div className="flex flex-col md:flex-row min-h-screen">
                {/* Left Side - Title and Description */}
                <motion.div
                  className="md:w-5/12 flex flex-col justify-center py-12 md:py-0"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="space-y-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-gradient text-white text-sm font-medium">
                      <Sparkles className="h-3.5 w-3.5 mr-2" />
                      Academic Tools
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                      <span className="gradient-text">Academic</span> <br />
                      Performance <br />
                      Calculator
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-md">
                      A modern tool to track your academic progress, calculate GPA, CGPA, and monitor attendance.
                    </p>

                    <div className="pt-6">
                      <Button
                        className="group text-lg px-6 py-6 h-auto bg-primary-gradient hover:opacity-90 transition-opacity"
                        onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        Explore Tools
                        <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.div>

                {/* Right Side - 3D Floating Cards */}
                <motion.div
                  className="md:w-7/12 flex items-center justify-center py-12 md:py-0 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="relative w-full max-w-lg h-[500px]">
                    {/* Floating Cards */}
                    <motion.div
                      className="absolute top-0 left-0 w-64 h-64 glass-card rounded-2xl p-6 shadow-xl"
                      initial={{ y: 0, rotate: -5 }}
                      animate={{
                        y: [0, -20, 0],
                        rotate: [-5, -3, -5],
                      }}
                      transition={{
                        y: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                        rotate: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                      }}
                    >
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">GPA Calculator</h3>
                      <p className="text-sm text-muted-foreground">
                        Calculate your Grade Point Average based on course credits and grades.
                      </p>
                    </motion.div>

                    <motion.div
                      className="absolute top-1/4 right-0 w-64 h-64 glass-card rounded-2xl p-6 shadow-xl"
                      initial={{ y: 0, rotate: 5 }}
                      animate={{
                        y: [0, 20, 0],
                        rotate: [5, 3, 5],
                      }}
                      transition={{
                        y: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                        rotate: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                        delay: 0.5,
                      }}
                    >
                      <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                        <Calculator className="h-6 w-6 text-secondary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">CGPA Calculator</h3>
                      <p className="text-sm text-muted-foreground">
                        Track your Cumulative Grade Point Average across multiple semesters.
                      </p>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-0 left-1/4 w-64 h-64 glass-card rounded-2xl p-6 shadow-xl"
                      initial={{ y: 0, rotate: -2 }}
                      animate={{
                        y: [0, -15, 0],
                        rotate: [-2, 0, -2],
                      }}
                      transition={{
                        y: { duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                        rotate: { duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                        delay: 1,
                      }}
                    >
                      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                        <BarChart3 className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Attendance Tracker</h3>
                      <p className="text-sm text-muted-foreground">
                        Monitor your attendance and ensure you meet the minimum requirements.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-24 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Calculator</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Select the tool you need to track and improve your academic performance
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* GPA Card */}
                <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <div
                    className="relative overflow-hidden rounded-xl h-full cursor-pointer"
                    onClick={() => setActiveCalculator("gpa")}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/30 dark:to-primary/10 -z-10"></div>
                    <div className="p-8 flex flex-col h-full border border-primary/20 rounded-xl">
                      <div className="mb-6">
                        <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <GraduationCap className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">GPA Calculator</h3>
                      <p className="text-muted-foreground mb-6">
                        Calculate your Grade Point Average based on individual course credits and grades.
                      </p>
                      <ul className="space-y-2 mb-8 text-sm">
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                          Add multiple courses
                        </li>
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                          Assign credits and grades
                        </li>
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                          Get instant GPA calculation
                        </li>
                      </ul>
                      <div className="mt-auto">
                        <Button
                          className="w-full bg-primary-gradient hover:opacity-90 transition-opacity"
                          onClick={() => setActiveCalculator("gpa")}
                        >
                          Open GPA Calculator
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CGPA Card */}
                <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <div
                    className="relative overflow-hidden rounded-xl h-full cursor-pointer"
                    onClick={() => setActiveCalculator("cgpa")}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/5 dark:from-secondary/30 dark:to-secondary/10 -z-10"></div>
                    <div className="p-8 flex flex-col h-full border border-secondary/20 rounded-xl">
                      <div className="mb-6">
                        <div className="h-16 w-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                          <Calculator className="h-8 w-8 text-secondary" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">CGPA Calculator</h3>
                      <p className="text-muted-foreground mb-6">
                        Track your Cumulative Grade Point Average across multiple semesters.
                      </p>
                      <ul className="space-y-2 mb-8 text-sm">
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-secondary mr-2"></div>
                          Add multiple semesters
                        </li>
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-secondary mr-2"></div>
                          Include current semester
                        </li>
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-secondary mr-2"></div>
                          Calculate overall performance
                        </li>
                      </ul>
                      <div className="mt-auto">
                        <Button
                          className="w-full bg-secondary-gradient hover:opacity-90 transition-opacity"
                          onClick={() => setActiveCalculator("cgpa")}
                        >
                          Open CGPA Calculator
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Attendance Card */}
                <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <div
                    className="relative overflow-hidden rounded-xl h-full cursor-pointer"
                    onClick={() => setActiveCalculator("attendance")}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 dark:from-accent/30 dark:to-accent/10 -z-10"></div>
                    <div className="p-8 flex flex-col h-full border border-accent/20 rounded-xl">
                      <div className="mb-6">
                        <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                          <BarChart3 className="h-8 w-8 text-accent" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Attendance Tracker</h3>
                      <p className="text-muted-foreground mb-6">
                        Monitor your attendance and ensure you meet the minimum requirements.
                      </p>
                      <ul className="space-y-2 mb-8 text-sm">
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></div>
                          Track classes attended
                        </li>
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></div>
                          Calculate attendance percentage
                        </li>
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></div>
                          Plan to meet 75% requirement
                        </li>
                      </ul>
                      <div className="mt-auto">
                        <Button
                          className="w-full bg-accent-gradient hover:opacity-90 transition-opacity"
                          onClick={() => setActiveCalculator("attendance")}
                        >
                          Open Attendance Tracker
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      ) : (
        /* Active Calculator */
        <div className="flex flex-col min-h-screen">
          <div className="container mx-auto px-4 py-12 flex-grow">
            <div className="mb-6">
              <Button
                variant="ghost"
                className="flex items-center gap-2 hover:bg-background/50"
                onClick={() => setActiveCalculator("none")}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <div className="glass-card rounded-xl p-1">
                <div className="bg-card rounded-lg shadow-inner">
                  {activeCalculator === "gpa" && (
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-6 text-center gradient-text">GPA Calculator</h2>
                      <GpaCalculator />
                    </div>
                  )}

                  {activeCalculator === "cgpa" && (
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-6 text-center gradient-text">CGPA Calculator</h2>
                      <CgpaCalculator />
                    </div>
                  )}

                  {activeCalculator === "attendance" && (
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-6 text-center gradient-text">Attendance Calculator</h2>
                      <AttendanceCalculator />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  )
}
