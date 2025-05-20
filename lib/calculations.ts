export function calculateAttendance(attended: number, total: number) {
  if (total === 0) {
    return {
      currentPercentage: 0,
      isMinimumMet: false,
      classesNeeded: 0,
    }
  }

  const currentPercentage = (attended / total) * 100
  const isMinimumMet = currentPercentage >= 74.01 // Consider 74.01% or higher as meeting the 75% requirement

  // Calculate how many more classes needed to reach 75%
  let classesNeeded = 0

  if (!isMinimumMet) {
    // Formula: (attended + x) / (total + x) >= 0.75
    // Solving for x: x >= (0.75*total - attended) / 0.25
    classesNeeded = Math.ceil((0.75 * total - attended) / 0.25)
  }

  return {
    currentPercentage,
    isMinimumMet,
    classesNeeded,
  }
}

export function calculateGPA(courses: { credits: number; grade: string }[]) {
  let totalCredits = 0
  let weightedSum = 0

  const gradePoints: { [key: string]: number } = {
    S: 10,
    A: 9,
    B: 8,
    C: 7,
    D: 6,
    E: 5,
    F: 0,
  }

  for (const course of courses) {
    const points = gradePoints[course.grade]
    if (points !== undefined) {
      weightedSum += course.credits * points
      totalCredits += course.credits
    }
  }

  if (totalCredits === 0) {
    return 0
  }

  return weightedSum / totalCredits
}

export function calculateCGPA(semesters: { gpa: number; credits: number }[]) {
  let totalCredits = 0
  let weightedSum = 0

  for (const semester of semesters) {
    weightedSum += semester.gpa * semester.credits
    totalCredits += semester.credits
  }

  if (totalCredits === 0) {
    return 0
  }

  return weightedSum / totalCredits
}
