export const SidebarHeader = () => {
  return (
    <header className="flex flex-col items-center justify-center py-6">
      <img
        src="/headshot.jpg"
        alt="Headshot"
        className="w-24 h-24 rounded-full border-4 border-primary object-cover shadow-md"
      />
      <h1 className="mt-4 text-xl font-medium">Aster Seawalker</h1>
      <h2 className="text-sm text-gray-primary font-light">Computer Science</h2>
    </header>
  );
};
