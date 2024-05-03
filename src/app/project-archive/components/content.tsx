import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableRowBody
} from "@/app/project-archive/components/table";
import {Badge} from "@/components/ui/badge";
import projectArchives from "@/app/project-archive/components/project-archive.json";
import {useMemo} from "react";

const Content = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Year</TableHead>
                    <TableHead>Project</TableHead>
                    <TableHead className="hidden lg:table-cell">Made At</TableHead>
                    <TableHead className="hidden lg:table-cell">Built with</TableHead>
                    <TableHead className="hidden lg:table-cell">Link</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableContents/>
            </TableBody>
        </Table>
    );
};

export default Content;

const TableContents = () => {
    const projectList = useMemo(() =>
            projectArchives.map(exp => ({...exp, id: crypto.randomUUID()})),
        []
    )

    return (
        <>
            {projectList.map(({id, year, project, made_at, build_with, links}) => (
                <TableRowBody key={id}>
                    <TableCell className="text-sm">
                        <div className="translate-y-px">{year}</div>
                    </TableCell>
                    <TableCell className="font-semibold leading-snug text-slate-200">
                        <div>
                            <div className="block sm:hidden">
                                <a
                                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 sm:hidden group/link text-base"
                                    href={project.url || "#"}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label={`${project.name} (opens in a new tab)`}
                                >
                        <span>
                          {project.name}{" "}
                            <span className="inline-block">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                aria-hidden="true"
                            >
                              <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </span>
                                </a>
                            </div>

                            <div className="hidden sm:block">{project.name}</div>
                        </div>
                    </TableCell>
                    <TableCell className="hidden text-sm lg:table-cell">
                        <div className="translate-y-px whitespace-nowrap">{made_at}</div>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                        <div className="translate-y-px whitespace-nowrap">
                            <ul className="flex -translate-y-1.5 flex-wrap">
                                {build_with.map((tech: string, index: number) => (
                                    <li className="my-1 mr-1.5" key={index}>
                                        <Badge variant="portfolio">{tech}</Badge>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                        <ul className="translate-y-1">
                            {links.map((link, index) => (
                                <li className="mb-1 flex items-center" key={index}>
                                    <a
                                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm group/link text-sm"
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label={`${link.name} (opens in a new tab)`}
                                    >
                                      <span>
                                        {" "}
                                          <span className="inline-block">
                                          {link.name}
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 20 20"
                                                  fill="currentColor"
                                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                                                  aria-hidden="true"
                                              >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clipRule="evenodd"
                                            />
                                          </svg>
                                        </span>
                                      </span>
                                    </a>

                                </li>
                            ))}
                        </ul>
                    </TableCell>
                </TableRowBody>
            ))}
        </>
    )
}