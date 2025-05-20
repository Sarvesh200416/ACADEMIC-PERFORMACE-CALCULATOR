"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trash2, Plus } from "lucide-react"
import { calculateGPA } from "@/lib/calculations"
import { motion } from "framer-motion"

interface Course {
  id: string
  credits: number
  grade: string
}

export default function GpaCalculator() {
  const [courses, setCourses] = useState<Course[]>([{ id: "1", credits: 3, grade: "A" }])
  const [gpa, setGpa] = useState<number | null>(null)

  const addCourse = () => {
    setCourses([...courses, { id: Date.now().toString(), credits: 3, grade: "A" }])
  }

  const removeCourse = (id: string) => {
    setCourses(courses.filter((course) => course.id !== id))
  }

  const updateCourse = (id: string, field: keyof Course, value: any) => {
    setCourses(courses.map((course) => (course.id === id ? { ...course, [field]: value } : course)))
  }

  const handleCalculate = () => {
    const result = calculateGPA(courses)
    setGpa(result)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-12 gap-4 items-center p-3 rounded-lg bg-card/50 hover:bg-card/80 transition-colors duration-200"
          >
            <div className="col-span-1 flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary text-sm font-medium">
              {index + 1}
            </div>
            <div className="col-span-4">
              <Label htmlFor={`credits-${course.id}`} className="text-xs mb-1 block">
                Credits
              </Label>
              <Input
                id={`credits-${course.id}`}
                type="number"
                min="0.5"
                max="5"
                step="0.5"
                value={course.credits}
                onChange={(e) => updateCourse(course.id, "credits", Number(e.target.value))}
                className="bg-background/50 focus:bg-background transition-colors duration-200"
              />
            </div>
            <div className="col-span-6">
              <Label htmlFor={`grade-${course.id}`} className="text-xs mb-1 block">
                Grade
              </Label>
              <Select value={course.grade} onValueChange={(value) => updateCourse(course.id, "grade", value)}>
                <SelectTrigger
                  id={`grade-${course.id}`}
                  className="bg-background/50 focus:bg-background transition-colors duration-200"
                >
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="S">S (10 points)</SelectItem>
                  <SelectItem value="A">A (9 points)</SelectItem>
                  <SelectItem value="B">B (8 points)</SelectItem>
                  <SelectItem value="C">C (7 points)</SelectItem>
                  <SelectItem value="D">D (6 points)</SelectItem>
                  <SelectItem value="E">E (5 points)</SelectItem>
                  <SelectItem value="F">F (0 points)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeCourse(course.id)}
                disabled={courses.length === 1}
                className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={addCourse} className="gap-1 group">
          <Plus className="h-4 w-4 group-hover:rotate-90 transition-transform duration-200" /> Add Course
        </Button>
        <Button onClick={handleCalculate} className="bg-primary-gradient hover:opacity-90 transition-opacity">
          Calculate GPA
        </Button>
      </div>

      {gpa !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 p-6 rounded-lg bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm border border-white/10 dark:border-gray-800/50 text-center"
        >
          <p className="text-muted-foreground mb-2">Your GPA</p>
          <p className="text-5xl font-bold gradient-text">{gpa.toFixed(2)}</p>
        </motion.div>
      )}
    </div>
  )
}
