"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trash2, Plus } from "lucide-react"
import { calculateCGPA } from "@/lib/calculations"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"

interface Semester {
  id: string
  gpa: number
  credits: number
}

export default function CgpaCalculator() {
  const [semesters, setSemesters] = useState<Semester[]>([{ id: "1", gpa: 8.5, credits: 20 }])
  const [cgpa, setCgpa] = useState<number | null>(null)
  const [includeCurrentSemester, setIncludeCurrentSemester] = useState(false)
  const [currentSemester, setCurrentSemester] = useState<{ gpa: number; credits: number }>({
    gpa: 8.0,
    credits: 20,
  })

  const addSemester = () => {
    setSemesters([...semesters, { id: Date.now().toString(), gpa: 8.0, credits: 20 }])
  }

  const removeSemester = (id: string) => {
    setSemesters(semesters.filter((semester) => semester.id !== id))
  }

  const updateSemester = (id: string, field: keyof Semester, value: any) => {
    setSemesters(semesters.map((semester) => (semester.id === id ? { ...semester, [field]: value } : semester)))
  }

  const updateCurrentSemester = (field: keyof typeof currentSemester, value: number) => {
    setCurrentSemester({
      ...currentSemester,
      [field]: value,
    })
  }

  const handleCalculate = () => {
    const allSemesters = [...semesters]
    if (includeCurrentSemester) {
      allSemesters.push({
        id: "current",
        ...currentSemester,
      })
    }

    const result = calculateCGPA(allSemesters)
    setCgpa(result)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground mb-2">Enter your completed semesters:</p>
        {semesters.map((semester, index) => (
          <motion.div
            key={semester.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-12 gap-4 items-center p-3 rounded-lg bg-card/50 hover:bg-card/80 transition-colors duration-200"
          >
            <div className="col-span-1 flex items-center justify-center h-8 w-8 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
              {index + 1}
            </div>
            <div className="col-span-5">
              <Label htmlFor={`gpa-${semester.id}`} className="text-xs mb-1 block">
                GPA
              </Label>
              <Input
                id={`gpa-${semester.id}`}
                type="number"
                min="0"
                max="10"
                step="0.01"
                value={semester.gpa}
                onChange={(e) => updateSemester(semester.id, "gpa", Number(e.target.value))}
                className="bg-background/50 focus:bg-background transition-colors duration-200"
              />
            </div>
            <div className="col-span-5">
              <Label htmlFor={`credits-${semester.id}`} className="text-xs mb-1 block">
                Credits
              </Label>
              <Input
                id={`credits-${semester.id}`}
                type="number"
                min="0.5"
                max="5"
                step="0.5"
                value={semester.credits}
                onChange={(e) => updateSemester(semester.id, "credits", Number(e.target.value))}
                className="bg-background/50 focus:bg-background transition-colors duration-200"
              />
            </div>
            <div className="col-span-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeSemester(semester.id)}
                disabled={semesters.length === 1}
                className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={addSemester} className="gap-1 group">
          <Plus className="h-4 w-4 group-hover:rotate-90 transition-transform duration-200" /> Add Semester
        </Button>
      </div>

      <div className="pt-4 border-t border-border">
        <div className="flex items-center mb-4 space-x-2">
          <Checkbox
            id="include-current"
            checked={includeCurrentSemester}
            onCheckedChange={(checked) => setIncludeCurrentSemester(checked === true)}
          />
          <Label htmlFor="include-current">Include current semester (optional)</Label>
        </div>

        {includeCurrentSemester && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-4 mb-4 p-3 rounded-lg bg-card/50"
          >
            <div>
              <Label htmlFor="current-gpa" className="text-xs mb-1 block">
                Current Semester GPA
              </Label>
              <Input
                id="current-gpa"
                type="number"
                min="0"
                max="10"
                step="0.01"
                value={currentSemester.gpa}
                onChange={(e) => updateCurrentSemester("gpa", Number(e.target.value))}
                className="bg-background/50 focus:bg-background transition-colors duration-200"
              />
            </div>
            <div>
              <Label htmlFor="current-credits" className="text-xs mb-1 block">
                Current Semester Credits
              </Label>
              <Input
                id="current-credits"
                type="number"
                min="0.5"
                max="5"
                step="0.5"
                value={currentSemester.credits}
                onChange={(e) => updateCurrentSemester("credits", Number(e.target.value))}
                className="bg-background/50 focus:bg-background transition-colors duration-200"
              />
            </div>
          </motion.div>
        )}
      </div>

      <div className="flex justify-end">
        <Button onClick={handleCalculate} className="bg-secondary-gradient hover:opacity-90 transition-opacity">
          Calculate CGPA
        </Button>
      </div>

      {cgpa !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 p-6 rounded-lg bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10 backdrop-blur-sm border border-white/10 dark:border-gray-800/50 text-center"
        >
          <p className="text-muted-foreground mb-2">Your CGPA</p>
          <p className="text-5xl font-bold gradient-text">{cgpa.toFixed(2)}</p>
        </motion.div>
      )}
    </div>
  )
}
