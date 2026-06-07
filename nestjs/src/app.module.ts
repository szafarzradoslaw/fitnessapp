import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { PrismaModule } from './prisma/prisma.module';
import { FoodsModule } from './foods/foods.module';

@Module({
  imports: [TestModule, PrismaModule, FoodsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
