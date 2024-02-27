"use client";

import { FC } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { JOB_APPLICANT_COLUMNS, JOB_APPLICANT_DATA } from "@/constants";
import ButtonActionTable from "../ButtonActionTable";
import { Badge } from "@/components/ui/badge";
// import { Applicant, User } from "@prisma/client";

// type applicantType = {
// //   user: User | null;
// } & Applicant;

interface ApplicantsProps {
  //   applicants: applicantType[] | undefined;
}

const Applicants: FC<ApplicantsProps> = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            {JOB_APPLICANT_COLUMNS.map((item: string, i: number) => (
              <TableHead key={item + i}>{item}</TableHead>
            ))}
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {JOB_APPLICANT_DATA.map((item: any, i: number) => (
            <TableRow key={item.name + i}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.appliedDate}</TableCell>
              <TableCell>
                <ButtonActionTable url="" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Applicants;
