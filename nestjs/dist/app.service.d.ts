import { PrismaService } from './prisma/prisma.service';
export declare class AppService {
    private prisma;
    constructor(prisma: PrismaService);
    getFoods(): Promise<{
        id: string;
        name: string;
        createdAt: Date;
    }[]>;
}
