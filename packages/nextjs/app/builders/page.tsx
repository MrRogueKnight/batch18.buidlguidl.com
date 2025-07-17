import fs from "fs/promises";
import path from "path";
import BuildersTable from "~~/components/builders/BuildersTable";

export default async function BuildersPage() {
  const currentDir = path.join(process.cwd(), "app", "builders");
  const files = await fs.readdir(currentDir, { withFileTypes: true });
  const builders = files.filter(file => file.isDirectory()).map(dir => dir.name);
  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="text-center w-full md:w-2/3 lg:w-1/2">
        <h1 className="font-extrabold mb-2 bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed">
          Batch 18: Checked-in Builders
        </h1>
        <div className="overflow-x-auto">
          <BuildersTable builders={builders} />
        </div>
      </div>
    </div>
  );
}
