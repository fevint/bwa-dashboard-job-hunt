
import { FC } from "react";


// type paramsType = {
// 	id: string;
// };
interface JobDetailPageProps {
	// params: paramsType;
}

export const revalidate = 0;

// async function getDetailJob(id: string) {
// 	const job = await prisma.job.findFirst({
// 		where: {
// 			id: id,
// 		},
// 		include: {
// 			applicant: {
// 				include: {
// 					user: true,
// 				},
// 			},
// 			CategoryJob: true,
// 		},
// 	});

// 	return job;
// }

const JobDetailPage: FC<JobDetailPageProps> =  () => {
	// const job = await getDetailJob(params.id);

	return (
		<div>
			<div className="inline-flex items-center gap-5 mb-5">
				</div>
			</div>

			

	);
};

export default JobDetailPage;
