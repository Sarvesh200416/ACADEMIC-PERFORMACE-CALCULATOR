# 🎓 GPA & CGPA Calculator Web App

A clean and minimalist web application that allows users to calculate their GPA or CGPA based on credits and grade input. Designed for simplicity and ease of use.

---

## ✨ Features

- 📌 GPA Calculator
  - Add multiple courses by entering:
    - Number of credits
    - Grade (S, A, B, C, D, E, F)
  - Grade mapping:
    - S = 10  
    - A = 9  
    - B = 8  
    - C = 7  
    - D = 6  
    - E = 5  
    - F = 0 (Fail)
  - Option to delete mistakenly entered courses
  - Automatic GPA calculation:
    ```
    GPA = (Σ Grade Points × Credits) / Σ Credits
    ```

- 📘 CGPA Calculator
  - Enter number of semesters completed
  - For each semester, input:
    - GPA
    - Credits earned
  - Optionally, include the current semester's GPA and credits
  - Automatic CGPA calculation:
    ```
    CGPA = (Σ GPA × Credits) / Σ Credits
    ```

---

## 🖥️ UI Design

- Minimalistic and aesthetic design
- No heavy graphics or clutter
- Light theme with clean typography and intuitive layout

---

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Edge, etc.)

### Running Locally

1. Clone the repository:

```bash
git clone https://github.com/your-username/gpa-cgpa-calculator.git
cd gpa-cgpa-calculator
