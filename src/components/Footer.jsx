export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Abhinand. All rights reserved.</p>
      </div>
    </footer>
  )
}

