export function Footer() {
  return (
    <footer className="h-[60px] bg-[#1D2B3A] fixed bottom-0 z-20 w-full flex flex-row items-center justify-evenly">
      <p className="text-white/80 text-base md:text-lg font-semibold md:leading-[60px] whitespace-nowrap flex flex-row">
        &copy; {new Date().getFullYear()} Nixtla. All rights
      </p>
    </footer>
  )
}