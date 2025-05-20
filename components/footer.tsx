export function Footer() {
  return (
    <footer className="w-full py-8 bg-background/50 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Academic Calculator. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <p className="text-xs text-muted-foreground">Designed for students, by students</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
