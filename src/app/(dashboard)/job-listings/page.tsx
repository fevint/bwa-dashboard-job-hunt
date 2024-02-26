import { FC } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_LISTING_COLUMNS, JOB_LISTING_DATA } from "@/constants";
import { Badge } from "@/components/ui/badge"; 
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";

type paramsType = {
  id: string;
};   
interface JobDetailPageProps {
  params: paramsType;
}

export const revalidate = 0;

// async function getDetailJob(id: string) {
//   const job = await prisma.job.findFirst({
//     where: {
//       id: id,
//     },
//     include: {
//       applicant: {
//         include: {
//           user: true,
//         },
//       },
//       CategoryJob: true,
//     },
//   });

//   return job;
// }

const JobDetailPage: FC<JobDetailPageProps> = async ({ params }) => {
  //   const job = await getDetailJob(params.id);
  const router = useRouter();

  return (
    <div>
      <div className="font-semibold text-3xl">Job Listings</div>
      <div className="mt-10">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              {JOB_LISTING_COLUMNS.map((item: string, i: number) => (
                <TableHead key={item + i}>{item}</TableHead>
              ))}
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {JOB_LISTING_DATA.map((item: any, i: number) => (
              <TableRow key={item.roles + i}>
                <TableCell>{item.roles}</TableCell>
                <TableCell>
                  <Badge>{item.status}</Badge>
                </TableCell>
                <TableCell>{item.datePosted}</TableCell>
                <TableCell>{item.dueDate}</TableCell>
                <TableCell>
                  <Badge variant={"outline"}>{item.jobType}</Badge>
                </TableCell>
                <TableCell>{item.applicants}</TableCell>
                <TableCell>
                  {item.applicants} / {item.needs}{" "}
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => router.push(`/job-detail/${item.id}`)}
                    size="icon"
                    variant={"outline"}
                  >
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default JobDetailPage;