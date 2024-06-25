import { IJob1 } from "./application/jobs/Job1/IJob1"
import { Job1 } from "./application/jobs/Job1/Job1"
import { IJob2 } from "./application/jobs/Job2/IJob2"
import { Job2 } from "./application/jobs/Job2/Job2"

(async () => {
    console.log('[APP] - Start App')
    
    const job1: IJob1 = new Job1()
    const job2: IJob2 = new Job2()

    await job1.execute()
    await job2.execute()

    console.log('[APP] - End App')

    process.exit()
}) ()